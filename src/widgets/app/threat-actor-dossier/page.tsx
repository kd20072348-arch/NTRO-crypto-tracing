'use client';

import { useTheme, useWidgetSDK } from '@nitrostack/widgets';

interface DossierData {
  handle: string;
  alias: string;
  riskScore: number;
  pgp: string;
  firstSeen: string;
  socials: string[];
  walletsCount: string;
  primaryMarket: string;
  totalLaunderedUSD: number;
}

export default function ThreatActorDossier() {
  const theme = useTheme();
  const { isReady, getToolOutput } = useWidgetSDK();
  const data = getToolOutput<DossierData>();
  const isDark = theme === 'dark';

  if (!isReady || !data) {
    return <main style={styles.loading}>Waiting for dossier results...</main>;
  }

  return (
    <main style={{ ...styles.shell, background: isDark ? '#201d1a' : '#f5f0e7', color: isDark ? '#f7eee1' : '#211f1b' }}>
      <p style={styles.eyebrow}>THREAT ACTOR DOSSIER</p>
      <header style={styles.header}>
        <div><h1 style={styles.title}>{data.handle}</h1><p style={styles.alias}>{data.alias}</p></div>
        <strong style={styles.risk}>RISK {data.riskScore}</strong>
      </header>
      <dl style={styles.grid}>
        <div><dt>First seen</dt><dd>{data.firstSeen}</dd></div>
        <div><dt>Market</dt><dd>{data.primaryMarket}</dd></div>
        <div><dt>Wallets</dt><dd>{data.walletsCount}</dd></div>
        <div><dt>Laundered</dt><dd>${data.totalLaunderedUSD.toLocaleString()}</dd></div>
      </dl>
      <footer style={styles.footer}>PGP: {data.pgp} | Socials: {data.socials.join(', ')}</footer>
    </main>
  );
}

const styles = {
  shell: { padding: 24, minWidth: 280, fontFamily: 'Georgia, serif', borderTop: '4px solid #b64b3c' },
  loading: { padding: 24, fontFamily: 'Georgia, serif' },
  eyebrow: { margin: 0, fontFamily: 'monospace', fontSize: 11, letterSpacing: 1.2, color: '#b64b3c' },
  header: { display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'start', marginTop: 8 },
  title: { margin: 0, fontSize: 30, fontWeight: 500 },
  alias: { margin: '4px 0 0', opacity: 0.65 },
  risk: { color: '#b64b3c', whiteSpace: 'nowrap' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 16, margin: '28px 0 20px' },
  footer: { borderTop: '1px solid currentColor', paddingTop: 12, fontSize: 12, opacity: 0.7 },
};