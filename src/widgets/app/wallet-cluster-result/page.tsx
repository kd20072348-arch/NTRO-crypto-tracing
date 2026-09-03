'use client';

import { useTheme, useWidgetSDK } from '@nitrostack/widgets';

interface ClusterResult { clusterId: string; addresses: string[] }

export default function WalletClusterResult() {
  const theme = useTheme();
  const { isReady, getToolOutput } = useWidgetSDK();
  const data = getToolOutput<ClusterResult>();
  if (!isReady || !data) return <main style={styles.loading}>Waiting for cluster results...</main>;
  return (
    <main style={{ ...styles.shell, background: theme === 'dark' ? '#211d28' : '#f3f0f7', color: theme === 'dark' ? '#f7f2ff' : '#211d28' }}>
      <p style={styles.eyebrow}>WALLET CLUSTER</p>
      <h1 style={styles.title}>{data.clusterId}</h1>
      <p style={styles.count}>{data.addresses.length} associated wallet{data.addresses.length === 1 ? '' : 's'}</p>
      <ul style={styles.list}>{data.addresses.map((address) => <li key={address}><code>{address}</code></li>)}</ul>
    </main>
  );
}

const styles = {
  shell: { padding: 24, minWidth: 280, fontFamily: 'Georgia, serif', borderTop: '4px solid #8d5ca8' },
  loading: { padding: 24, fontFamily: 'Georgia, serif' },
  eyebrow: { margin: 0, color: '#8d5ca8', fontFamily: 'monospace', fontSize: 11, letterSpacing: 1.2 },
  title: { margin: '8px 0', fontSize: 28, fontWeight: 500 },
  count: { opacity: 0.7 },
  list: { paddingLeft: 18, display: 'grid', gap: 10 },
};