'use client';

import { useTheme, useWidgetSDK } from '@nitrostack/widgets';

interface InfrastructureData {
  onion: string;
  sslSerial: string;
  matchedIp: string;
  isp: string;
  location: string;
  openPorts: string;
  confidence: number;
}

export default function InfrastructureFingerprintMap() {
  const theme = useTheme();
  const { isReady, getToolOutput } = useWidgetSDK();
  const data = getToolOutput<InfrastructureData>();
  const isDark = theme === 'dark';

  if (!isReady || !data) {
    return <main style={styles.loading}>Waiting for infrastructure results...</main>;
  }

  return (
    <main style={{ ...styles.shell, background: isDark ? '#17201f' : '#f4f1e8', color: isDark ? '#f5f1e8' : '#18211f' }}>
      <header style={styles.header}>
        <div>
          <p style={styles.eyebrow}>INFRASTRUCTURE FINGERPRINT</p>
          <h1 style={styles.title}>{data.matchedIp}</h1>
        </div>
        <strong style={styles.confidence}>{data.confidence}% match</strong>
      </header>
      <dl style={styles.grid}>
        <div><dt>Target</dt><dd>{data.onion}</dd></div>
        <div><dt>Location</dt><dd>{data.location}</dd></div>
        <div><dt>Provider</dt><dd>{data.isp}</dd></div>
        <div><dt>Open ports</dt><dd>{data.openPorts}</dd></div>
      </dl>
      <footer style={styles.footer}>SSL serial <code>{data.sslSerial}</code></footer>
    </main>
  );
}

const styles = {
  shell: { padding: 24, minWidth: 280, fontFamily: 'Georgia, serif', borderTop: '4px solid #d76b3f' },
  loading: { padding: 24, fontFamily: 'Georgia, serif' },
  header: { display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'start' },
  eyebrow: { margin: 0, fontFamily: 'monospace', fontSize: 11, letterSpacing: 1.2, color: '#d76b3f' },
  title: { margin: '8px 0 0', fontSize: 30, fontWeight: 500 },
  confidence: { color: '#317a62', whiteSpace: 'nowrap' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 16, margin: '28px 0 20px' },
  footer: { borderTop: '1px solid currentColor', paddingTop: 12, fontSize: 12, opacity: 0.7 },
};