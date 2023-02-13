/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import * as beetSolana from '@metaplex-foundation/beet-solana'
import { MarketSizeParams, marketSizeParamsBeet } from './MarketSizeParams'
import { TokenParams, tokenParamsBeet } from './TokenParams'
export type MarketHeader = {
  discriminant: beet.bignum
  status: beet.bignum
  marketSizeParams: MarketSizeParams
  baseParams: TokenParams
  baseLotSize: beet.bignum
  quoteParams: TokenParams
  quoteLotSize: beet.bignum
  tickSizeInQuoteAtomsPerBaseUnit: beet.bignum
  authority: web3.PublicKey
  feeRecipient: web3.PublicKey
  marketSequenceNumber: beet.bignum
  successor: web3.PublicKey
  padding1: beet.bignum
  padding2: beet.bignum
}

/**
 * @category userTypes
 * @category generated
 */
export const marketHeaderBeet = new beet.BeetArgsStruct<MarketHeader>(
  [
    ['discriminant', beet.u64],
    ['status', beet.u64],
    ['marketSizeParams', marketSizeParamsBeet],
    ['baseParams', tokenParamsBeet],
    ['baseLotSize', beet.u64],
    ['quoteParams', tokenParamsBeet],
    ['quoteLotSize', beet.u64],
    ['tickSizeInQuoteAtomsPerBaseUnit', beet.u64],
    ['authority', beetSolana.publicKey],
    ['feeRecipient', beetSolana.publicKey],
    ['marketSequenceNumber', beet.u64],
    ['successor', beetSolana.publicKey],
    ['padding1', beet.u64],
    ['padding2', beet.u64],
  ],
  'MarketHeader'
)
