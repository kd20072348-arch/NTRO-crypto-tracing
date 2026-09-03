'use client';

import { useTheme, useWidgetSDK } from '@nitrostack/widgets';

interface TraceResult { targetAddress: string; totalHopsAnalyzed: number; offRampDetected: boolean; vaspEndpoint: string }

export default function CryptoTraceResult() {
  const theme = useTheme();
  const { isReady, getToolOutput } = useWidgetSDK();
  const data = getToolOutput<TraceResult>();
  if (!isReady || !data) return <main style={styles.loading}>Waiting for trace results...</main>;
  return (
    <main style={{ ...styles.shell, background: theme === 'dark' ? '#15242a' : '#eef5f2', color: theme === 'dark' ? '#eff8f5' : '#142521' }}>
      <p style={styles.eyebrow}>MULTI-HOP TRACE</p>
      <h1 style={styles.title}>{data.totalHopsAnalyzed} hops analyzed</h1>
      <p style={styles.address}>{data.targetAddress}</p>
      <dl style={styles.grid}><div><dt>Off-ramp</dt><dd>{data.offRampDetected ? 'Detected' : 'Not detected'}</dd></div><div><dt>VASP endpoint</dt><dd>{data.vaspEndpoint}</dd></div></dl>
    </main>
  );
}

const styles = {
  shell: { padding: 24, minWidth: 280, fontFamily: 'Georgia, serif', borderTop: '4px solid #2f8f78' },
  loading: { padding: 24, fontFamily: 'Georgia, serif' },
  eyebrow: { margin: 0, color: '#2f8f78', fontFamily: 'monospace', fontSize: 11, letterSpacing: 1.2 },
  title: { margin: '8px 0', fontSize: 28, fontWeight: 500 },
  address: { fontFamily: 'monospace', fontSize: 12, overflowWrap: 'anywhere', opacity: 0.7 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 16, marginTop: 24 },
};