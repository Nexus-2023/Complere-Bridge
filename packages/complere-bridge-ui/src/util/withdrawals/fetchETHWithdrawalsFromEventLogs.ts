import { Provider, BlockTag } from '@ethersproject/providers'
import { L2ToL1MessageReader } from '@arbitrum/sdk'

/**
 * Fetches initiated ETH withdrawals from event logs in range of [fromBlock, toBlock].
 *
 * @param query Query params
 * @param query.receiver Address that will receive the funds
 * @param query.fromBlock Start at this block number (including)
 * @param query.toBlock Stop at this block number (including)
 * @param query.l2Provider Provider for the L2 network
 */

export function fetchETHWithdrawalsFromEventLogs({
  receiver,
  fromBlock,
  toBlock,
  l2Provider
}: {
  receiver?: string;
  fromBlock: BlockTag;
  toBlock: BlockTag;
  l2Provider: Provider;
}) {
 

  if (typeof receiver === 'undefined') {
    console.warn('Receiver address is undefined. Returning an empty array.');
    console.groupEnd();
    return [];
  }

  // Try-catch block to handle any potential errors in fetching events
  try {
 

    const events = L2ToL1MessageReader.getL2ToL1Events(
      l2Provider,
      { fromBlock, toBlock },
      undefined,
      receiver
    );

 
    console.table(events);

    console.groupEnd();
    return events;
  } catch (error) {
    console.error('Error fetching L2ToL1 events:', error);
    console.trace();
    console.groupEnd();
    return [];
  }
}

 