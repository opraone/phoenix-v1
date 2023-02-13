/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import { CancelOrderParams, cancelOrderParamsBeet } from './CancelOrderParams'
export type ReduceOrderParams = {
  baseParams: CancelOrderParams
  size: beet.bignum
}

/**
 * @category userTypes
 * @category generated
 */
export const reduceOrderParamsBeet = new beet.BeetArgsStruct<ReduceOrderParams>(
  [
    ['baseParams', cancelOrderParamsBeet],
    ['size', beet.u64],
  ],
  'ReduceOrderParams'
)
