/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category RequestSeatAuthorized
 * @category generated
 */
export const RequestSeatAuthorizedStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number
}>(
  [['instructionDiscriminator', beet.u8]],
  'RequestSeatAuthorizedInstructionArgs'
)
/**
 * Accounts required by the _RequestSeatAuthorized_ instruction
 *
 * @property [] phoenixProgram Phoenix program
 * @property [] logAuthority Phoenix log authority
 * @property [_writable_] market This account holds the market state
 * @property [**signer**] marketAuthority The market_authority account must sign to claim authority
 * @property [_writable_, **signer**] payer
 * @property [] trader
 * @property [_writable_] seat
 * @category Instructions
 * @category RequestSeatAuthorized
 * @category generated
 */
export type RequestSeatAuthorizedInstructionAccounts = {
  phoenixProgram: web3.PublicKey
  logAuthority: web3.PublicKey
  market: web3.PublicKey
  marketAuthority: web3.PublicKey
  payer: web3.PublicKey
  trader: web3.PublicKey
  seat: web3.PublicKey
  systemProgram?: web3.PublicKey
}

export const requestSeatAuthorizedInstructionDiscriminator = 105

/**
 * Creates a _RequestSeatAuthorized_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category RequestSeatAuthorized
 * @category generated
 */
export function createRequestSeatAuthorizedInstruction(
  accounts: RequestSeatAuthorizedInstructionAccounts,
  programId = new web3.PublicKey('PhoeNiXZ8ByJGLkxNfZRnkUfjvmuYqLR89jjFHGqdXY')
) {
  const [data] = RequestSeatAuthorizedStruct.serialize({
    instructionDiscriminator: requestSeatAuthorizedInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.phoenixProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.logAuthority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.market,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.marketAuthority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.payer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.trader,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.seat,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
  ]

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
