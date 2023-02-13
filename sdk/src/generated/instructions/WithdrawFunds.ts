/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token'
import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category WithdrawFunds
 * @category generated
 */
export const WithdrawFundsStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number
}>([['instructionDiscriminator', beet.u8]], 'WithdrawFundsInstructionArgs')
/**
 * Accounts required by the _WithdrawFunds_ instruction
 *
 * @property [] phoenixProgram Phoenix program
 * @property [] logAuthority Phoenix log authority
 * @property [_writable_] market This account holds the market state
 * @property [_writable_, **signer**] trader
 * @property [_writable_] baseAccount Trader base token account
 * @property [_writable_] quoteAccount Trader quote token account
 * @property [_writable_] baseVault Base vault PDA, seeds are [b'vault', market_address, base_mint_address]
 * @property [_writable_] quoteVault Quote vault PDA, seeds are [b'vault', market_address, quote_mint_address]
 * @category Instructions
 * @category WithdrawFunds
 * @category generated
 */
export type WithdrawFundsInstructionAccounts = {
  phoenixProgram: web3.PublicKey
  logAuthority: web3.PublicKey
  market: web3.PublicKey
  trader: web3.PublicKey
  baseAccount: web3.PublicKey
  quoteAccount: web3.PublicKey
  baseVault: web3.PublicKey
  quoteVault: web3.PublicKey
  tokenProgram?: web3.PublicKey
}

export const withdrawFundsInstructionDiscriminator = 12

/**
 * Creates a _WithdrawFunds_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category WithdrawFunds
 * @category generated
 */
export function createWithdrawFundsInstruction(
  accounts: WithdrawFundsInstructionAccounts,
  programId = new web3.PublicKey('PhoeNiXZ8ByJGLkxNfZRnkUfjvmuYqLR89jjFHGqdXY')
) {
  const [data] = WithdrawFundsStruct.serialize({
    instructionDiscriminator: withdrawFundsInstructionDiscriminator,
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
      pubkey: accounts.trader,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.baseAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.quoteAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.baseVault,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.quoteVault,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
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
