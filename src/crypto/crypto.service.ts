export interface GraphNodeData {
  id: string;
  label: string;
  type: 'source' | 'mixer' | 'hop' | 'vasp';
  address: string;
  riskScore: number;
}

export interface GraphEdgeData {
  id: string;
  source: string;
  target: string;
  label: string;
  amountETH: number;
}

export interface VisualGraphPayload {
  nodes: GraphNodeData[];
  edges: GraphEdgeData[];
  summary: {
    totalHops: number;
    hasMixer: boolean;
    hasVasp: boolean;
  };
}

import { Injectable } from '@nitrostack/core';

@Injectable()
export class CryptoService {
  async buildMixerHopGraph(rootAddress: string): Promise<VisualGraphPayload> {
  const nodes: GraphNodeData[] = [
    {
      id: 'src-1',
      label: 'Darknet Source',
      type: 'source',
      address: rootAddress,
      riskScore: 95,
    },
    {
      id: 'mixer-1',
      label: 'Tornado.Cash 100 ETH Pool',
      type: 'mixer',
      address: '0x47ce0c6ed5b0ce3d3a51fdb1c52dc66a7c3c2936',
      riskScore: 100,
    },
    {
      id: 'hop-1',
      label: 'Peeling Chain Address A',
      type: 'hop',
      address: '0x1a4b3c21d098a892341234567890abcdef112c',
      riskScore: 70,
    },
    {
      id: 'hop-2',
      label: 'Peeling Chain Address B',
      type: 'hop',
      address: '0x2b5c4d32e109b9876543210fedcba223d',
      riskScore: 65,
    },
    {
      id: 'vasp-1',
      label: 'Binance Hot Wallet #4',
      type: 'vasp',
      address: '0x9a4b3c21d098a892341234567890abcdef112c',
      riskScore: 20,
    },
  ];

  const edges: GraphEdgeData[] = [
    { id: 'e1', source: 'src-1', target: 'mixer-1', label: '100.0 ETH', amountETH: 100.0 },
    { id: 'e2', source: 'mixer-1', target: 'hop-1', label: '85.2 ETH', amountETH: 85.2 },
    { id: 'e3', source: 'hop-1', target: 'hop-2', label: '85.0 ETH', amountETH: 85.0 },
    { id: 'e4', source: 'hop-2', target: 'vasp-1', label: '84.8 ETH', amountETH: 84.8 },
  ];

    return {
      nodes,
      edges,
      summary: {
        totalHops: edges.length,
        hasMixer: true,
        hasVasp: true,
      },
    };
  }
}