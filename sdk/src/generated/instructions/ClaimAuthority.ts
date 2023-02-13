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
 * @category ClaimAuthority
 * @category generated
 */
export const ClaimAuthorityStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number
}>([['instructionDiscriminator', beet.u8]], 'ClaimAuthorityInstructionArgs')
/**
 * Accounts required by the _ClaimAuthority_ instruction
 *
 * @property [] phoenixProgram Phoenix program
 * @property [] logAuthority Phoenix log authority
 * @property [_writable_] market This account holds the market state
 * @property [**signer**] marketAuthority The market_authority account must sign to claim authority
 * @category Instructions
 * @category ClaimAuthority
 * @category generated
 */
export type ClaimAuthorityInstructionAccounts = {
  phoenixProgram: web3.PublicKey
  logAuthority: web3.PublicKey
  market: web3.PublicKey
  marketAuthority: web3.PublicKey
}

export const claimAuthorityInstructionDiscriminator = 101

/**
 * Creates a _ClaimAuthority_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category ClaimAuthority
 * @category generated
 */
export function createClaimAuthorityInstruction(
  accounts: ClaimAuthorityInstructionAccounts,
  programId = new web3.PublicKey('PhoeNiXZ8ByJGLkxNfZRnkUfjvmuYqLR89jjFHGqdXY')
) {
  const [data] = ClaimAuthorityStruct.serialize({
    instructionDiscriminator: claimAuthorityInstructionDiscriminator,
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
  ]

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
