export interface CryptoWalletEntity {
  address: string;
  chain: 'BTC' | 'ETH' | 'XMR';
  tag: 'vendor' | 'mixer' | 'vasp_exchange' | 'unknown';
  balanceUSD?: number;
}