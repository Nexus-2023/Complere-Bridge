import { Provider } from '@ethersproject/providers'

import { fetchETHWithdrawalsFromEventLogs } from './fetchETHWithdrawalsFromEventLogs'

import {
  FetchWithdrawalsFromSubgraphResult,
  fetchWithdrawalsFromSubgraph
} from './fetchWithdrawalsFromSubgraph'
import { fetchLatestSubgraphBlockNumber } from '../SubgraphUtils'
import { fetchTokenWithdrawalsFromEventLogs } from './fetchTokenWithdrawalsFromEventLogs'
import { fetchL2Gateways } from '../fetchL2Gateways'
import { Withdrawal } from '../../hooks/useTransactionHistory'
import { attachTimestampToTokenWithdrawal } from './helpers'
import { WithdrawalInitiated } from '../../hooks/arbTokenBridge.types'

export type FetchWithdrawalsParams = {
  sender?: string
  receiver?: string
  fromBlock?: number
  toBlock?: number
  l1Provider: Provider
  l2Provider: Provider
  pageNumber?: number
  pageSize?: number
  searchString?: string
}

export async function fetchWithdrawals({
  sender,
  receiver,
  l1Provider,
  l2Provider,
  pageNumber = 0,
  pageSize = 10,
  searchString,
  fromBlock,
  toBlock
}: FetchWithdrawalsParams): Promise<Withdrawal[]> {

  console.group('fetchWithdrawals');

  // Log input parameters
  console.info('Received query parameters:');
  console.table({ sender, receiver, pageNumber, pageSize, searchString, fromBlock, toBlock });

  if (typeof sender === 'undefined' && typeof receiver === 'undefined') {
    console.warn('Both sender and receiver are undefined. Returning an empty array.');
    console.groupEnd();
    return [];
  }

  try {
   

    const l1ChainID = (await l1Provider.getNetwork()).chainId;
    const l2ChainID = (await l2Provider.getNetwork()).chainId;
 

    const l2GatewayAddresses = await fetchL2Gateways(l2Provider);

   

    if (!fromBlock) {
      fromBlock = 0;
    }

    if (!toBlock) {
      console.time('Fetch Latest Subgraph Block Number'); 
      const latestSubgraphBlockNumber = await fetchLatestSubgraphBlockNumber(l2ChainID);
      toBlock = latestSubgraphBlockNumber;

     
    }

    let withdrawalsFromSubgraph: FetchWithdrawalsFromSubgraphResult[] = [];
    try {
      console.time('Fetch Withdrawals From Subgraph');

      withdrawalsFromSubgraph = (await fetchWithdrawalsFromSubgraph({
        sender,
        receiver,
        fromBlock,
        toBlock,
        l2ChainId: l2ChainID,
        pageNumber,
        pageSize,
        searchString
      })).map(tx => ({
        ...tx,
        direction: 'withdrawal',
        source: 'subgraph',
        parentChainId: l1ChainID,
        childChainId: l2ChainID
      }));

      console.timeEnd('Fetch Withdrawals From Subgraph');
      console.info('Withdrawals From Subgraph:', withdrawalsFromSubgraph);
    } catch (error) {
      console.error('Error fetching withdrawals from subgraph:', error);
      console.trace();
    }

    console.time('Fetch Withdrawals From Event Logs');

    const [ethWithdrawalsFromEventLogs, tokenWithdrawalsFromEventLogs] = await Promise.all([
      fetchETHWithdrawalsFromEventLogs({
        receiver,
        fromBlock: toBlock + 1,
        toBlock: 'latest',
        l2Provider
      }),
      fetchTokenWithdrawalsFromEventLogs({
        sender,
        receiver,
        fromBlock: toBlock + 1,
        toBlock: 'latest',
        l2Provider,
        l2GatewayAddresses
      })
    ]);

 

    const mappedEthWithdrawalsFromEventLogs: Withdrawal[] = ethWithdrawalsFromEventLogs.map(tx => ({
      ...tx,
      direction: 'withdrawal',
      source: 'event_logs',
      parentChainId: l1ChainID,
      childChainId: l2ChainID
    }));
    const mappedTokenWithdrawalsFromEventLogs: WithdrawalInitiated[] = tokenWithdrawalsFromEventLogs.map(tx => ({
      ...tx,
      direction: 'withdrawal',
      source: 'event_logs',
      parentChainId: l1ChainID,
      childChainId: l2ChainID
    }));

 

    const tokenWithdrawalsFromEventLogsWithTimestamp: Withdrawal[] = await Promise.all(
      mappedTokenWithdrawalsFromEventLogs.map(withdrawal => attachTimestampToTokenWithdrawal({ withdrawal, l2Provider }))
    );

 

    const allWithdrawals = [
      ...mappedEthWithdrawalsFromEventLogs,
      ...tokenWithdrawalsFromEventLogsWithTimestamp,
      ...withdrawalsFromSubgraph
    ];

    console.info('All Withdrawals:', allWithdrawals);
    console.groupEnd();

    return allWithdrawals;
  } catch (error) {
    console.error('Error in fetchWithdrawals:', error);
    console.trace();
    console.groupEnd();
    return [];
  }
}

 