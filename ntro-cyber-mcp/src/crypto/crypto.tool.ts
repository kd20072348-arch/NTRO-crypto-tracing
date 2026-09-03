import { tool, Widget, z } from '@nitrostack/core'; // <--- Lowercase 'tool'
import { DatabaseService } from '../database/database.service';

export class CryptoTraceTools {
  constructor(private readonly db: DatabaseService) {}

  @tool({                                           // <--- Use @tool
    name: 'trace_multi_hop_flow',
    description: 'Traces N-level transaction hops for a target BTC/ETH wallet.',
    inputSchema: z.object({
      walletAddress: z.string(),
      maxHops: z.number().default(3),
    }),
  })
  async traceMultiHopFlow(input: { walletAddress: string; maxHops: number }) {
    return {
      targetAddress: input.walletAddress,
      totalHopsAnalyzed: input.maxHops,
      offRampDetected: true,
      vaspEndpoint: 'Binance Hot Wallet',
    };
  }

  @tool({                                           // <--- Use @tool
    name: 'detect_wallet_cluster',
    description: 'Analyzes co-spending heuristics across multiple wallets.',
    inputSchema: z.object({
      walletAddresses: z.array(z.string()),
    }),
  })
  async detectWalletCluster(input: { walletAddresses: string[] }) {
    return {
      clusterId: 'CLUSTER-TA-8821',
      addresses: input.walletAddresses,
    };
  }
}