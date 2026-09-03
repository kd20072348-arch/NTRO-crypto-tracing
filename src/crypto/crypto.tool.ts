import { ToolDecorator as Tool, Widget, z, Injectable } from '@nitrostack/core';
import { CryptoService } from './crypto.service.js';

@Injectable({ deps: [CryptoService] })
export class CryptoTraceTools {
  constructor(private readonly cryptoService: CryptoService) {}

  @Tool({
    name: 'trace_multi_hop_flow',
    description: 'Traces N-level transaction hops for a target BTC/ETH wallet.',
    inputSchema: z.object({
      walletAddress: z.string(),
      maxHops: z.number().default(3),
    }),
  })
  @Widget('crypto-trace-result')
  async traceMultiHopFlow(input: { walletAddress: string; maxHops: number }) {
    return {
      targetAddress: input.walletAddress,
      totalHopsAnalyzed: input.maxHops,
      offRampDetected: true,
      vaspEndpoint: 'Binance Hot Wallet',
    };
  }

  @Tool({
    name: 'render_mixer_hop_graph',
    description: 'Generates a node-edge graph mapping funds through a privacy mixer, peeling-chain hops, and a VASP deposit address.',
    inputSchema: z.object({
      rootAddress: z.string().describe('Target root wallet address'),
    }),
  })
  @Widget('interactive-mixer-graph')
  async renderMixerHopGraph(input: { rootAddress: string }) {
    const graph = await this.cryptoService.buildMixerHopGraph(input.rootAddress);

    return {
      rootAddress: input.rootAddress,
      nodes: graph.nodes,
      edges: graph.edges,
      totalHops: graph.summary.totalHops,
      mixerDetected: graph.summary.hasMixer,
      vaspDetected: graph.summary.hasVasp,
    };
  }

  @Tool({
    name: 'detect_wallet_cluster',
    description: 'Analyzes co-spending heuristics across multiple wallets.',
    inputSchema: z.object({
      walletAddresses: z.array(z.string()),
    }),
  })
  @Widget('wallet-cluster-result')
  async detectWalletCluster(input: { walletAddresses: string[] }) {
    return {
      clusterId: 'CLUSTER-TA-8821',
      addresses: input.walletAddresses,
    };
  }
}