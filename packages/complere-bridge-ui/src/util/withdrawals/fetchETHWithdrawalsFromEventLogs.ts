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
  console.group('fetchETHWithdrawalsFromEventLogs');

  // Log the input parameters
  console.info('Received query parameters:');
  console.table({ receiver, fromBlock, toBlock, l2Provider });

  if (typeof receiver === 'undefined') {
    console.warn('Receiver address is undefined. Returning an empty array.');
    console.groupEnd();
    return [];
  }

  // Try-catch block to handle any potential errors in fetching events
  try {
    console.time('Fetch L2ToL1 Events');

    const events = L2ToL1MessageReader.getL2ToL1Events(
      l2Provider,
      { fromBlock, toBlock },
      undefined,
      receiver
    );

    console.timeEnd('Fetch L2ToL1 Events');
    console.info('Fetched L2ToL1 events:');
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

// export function fetchETHWithdrawalsFromEventLogs({
//   receiver,
//   fromBlock,
//   toBlock,
//   l2Provider
// }: {
//   receiver?: string
//   fromBlock: BlockTag
//   toBlock: BlockTag
//   l2Provider: Provider
// }) {

//   console.log("receiver" ,receiver);
//   console.log("fromBlock" ,fromBlock);
//   console.log("toBlock" ,toBlock);
//   console.log("l2Provider" ,l2Provider);
//   if (typeof receiver === 'undefined') {
//     return []
//   }

//   console.log("L2ToL1MessageReader.getL2ToL1Events(l2Provider,{ fromBlock, toBlock },undefined,  receiver)" ,  L2ToL1MessageReader.getL2ToL1Events(
//     l2Provider,
//     { fromBlock, toBlock },
//     undefined,
//     receiver
//   ));
//   // funds sent by this address
//   return L2ToL1MessageReader.getL2ToL1Events(
//     l2Provider,
//     { fromBlock, toBlock },
//     undefined,
//     receiver
//   )
// }
