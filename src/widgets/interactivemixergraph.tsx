import React from 'react';

interface Node {
  id: string;
  label: string;
  type: 'source' | 'mixer' | 'hop' | 'vasp';
  address: string;
  riskScore: number;
}

interface Edge {
  id: string;
  source: string;
  target: string;
  label: string;
}

interface Props {
  data: {
    rootAddress: string;
    nodes: Node[];
    edges: Edge[];
    totalHops: number;
    mixerDetected: boolean;
    vaspDetected: boolean;
  };
}

export default function InteractiveMixerGraph({ data }: Props) {
  const getTypeColor = (type: Node['type']) => {
    switch (type) {
      case 'source': return 'bg-red-900/50 border-red-500 text-red-300';
      case 'mixer': return 'bg-purple-900/50 border-purple-500 text-purple-300';
      case 'hop': return 'bg-amber-900/50 border-amber-500 text-amber-300';
      case 'vasp': return 'bg-emerald-900/50 border-emerald-500 text-emerald-300';
    }
  };

  return (
    <div className="bg-[#090D16] border border-[#1F293D] p-5 rounded-lg text-slate-100 font-mono">
      <div className="flex justify-between items-center border-b border-[#1F293D] pb-3 mb-4">
        <div>
          <h3 className="text-sm font-bold text-cyan-400">MIXER & PEELING CHAIN VISUALIZER</h3>
          <p className="text-[11px] text-slate-400">Root Address: {data?.rootAddress}</p>
        </div>
        <div className="flex gap-2 text-[10px]">
          <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded border border-purple-500/30">
            Mixer Detected
          </span>
          <span className="bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded border border-emerald-500/30">
            VASP Off-Ramp
          </span>
        </div>
      </div>

      {/* Node Flow Diagram */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 bg-[#05070D] p-4 rounded border border-slate-800">
        {data?.nodes?.map((node, index) => (
          <React.Fragment key={node.id}>
            <div className={`p-3 rounded border text-center min-w-[140px] ${getTypeColor(node.type)}`}>
              <div className="text-[10px] font-bold uppercase tracking-wider">{node.type}</div>
              <div className="text-xs font-semibold my-1">{node.label}</div>
              <div className="text-[9px] text-slate-400 truncate">{node.address.substring(0, 10)}...</div>
            </div>

            {index < data.nodes.length - 1 && (
              <div className="flex flex-col items-center justify-center my-2 md:my-0">
                <span className="text-[10px] text-cyan-400 font-bold">{data.edges[index]?.label}</span>
                <span className="text-slate-600 text-xs">➔</span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}