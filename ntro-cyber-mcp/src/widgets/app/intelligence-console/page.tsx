'use client';

import { useEffect, useState } from 'react';

type Module = {
  number: string;
  code: string;
  label: string;
  title: string;
  description: string;
  status: string;
};

const modules: Module[] = [
  {
    number: '01',
    code: 'TRC',
    label: 'CRYPTOGRAPHIC FLOW ANALYSIS',
    title: 'MULTI-HOP TRACE',
    description:
      'Trace cryptocurrency movement across intermediary wallets and identify probable exchange off-ramps.',
    status: 'LIVE TRACE',
  },
  {
    number: '02',
    code: 'CLS',
    label: 'ENTITY CORRELATION',
    title: 'WALLET CLUSTER',
    description:
      'Evaluate co-spending behaviour and correlate addresses under probable common ownership.',
    status: 'ANALYSIS',
  },
  {
    number: '03',
    code: 'EXT',
    label: 'HIDDEN SERVICE INTELLIGENCE',
    title: 'ENTITY EXTRACTION',
    description:
      'Extract cryptocurrency addresses, aliases, PGP material and other identifiers from collected sources.',
    status: 'INDEXED',
  },
  {
    number: '04',
    code: 'MET',
    label: 'INFRASTRUCTURE PROFILING',
    title: 'ONION METADATA',
    description:
      'Inspect hidden-service metadata, certificate fingerprints, web signatures and infrastructure artefacts.',
    status: 'OBSERVED',
  },
  {
    number: '05',
    code: 'SSL',
    label: 'INFRASTRUCTURE CORRELATION',
    title: 'CERTIFICATE MATCH',
    description:
      'Correlate SSL certificate artefacts against exposed surface infrastructure and scan intelligence.',
    status: '94.6% MATCH',
  },
  {
    number: '06',
    code: 'FAV',
    label: 'ASSET FINGERPRINTING',
    title: 'FAVICON CORRELATION',
    description:
      'Compare hidden-service favicon hashes with indexed public infrastructure and identify probable host reuse.',
    status: '6 MATCHES',
  },
];

export default function IntelligenceConsole() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<'next' | 'previous'>('next');
  const [transitioning, setTransitioning] = useState(false);

  const changeSlide = (
    target: number,
    moveDirection: 'next' | 'previous'
  ) => {
    if (transitioning || target === active) return;

    setDirection(moveDirection);
    setTransitioning(true);

    window.setTimeout(() => {
      setActive(target);
      setTransitioning(false);
    }, 220);
  };

  const next = () => {
    const nextIndex = active === modules.length - 1 ? 0 : active + 1;
    changeSlide(nextIndex, 'next');
  };

  const previous = () => {
    const previousIndex = active === 0 ? modules.length - 1 : active - 1;
    changeSlide(previousIndex, 'previous');
  };

  useEffect(() => {
    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') next();
      if (event.key === 'ArrowLeft') previous();
    };

    window.addEventListener('keydown', handleKeyboard);

    return () => {
      window.removeEventListener('keydown', handleKeyboard);
    };
  });

  const current = modules[active];

  return (
    <main className="intel-console">
      {/* subtle texture */}
      <div className="noise-layer" />
      <div className="scan-layer" />

      {/* decorative corner marks */}
      <span className="corner-mark corner-top-left" />
      <span className="corner-mark corner-top-right" />
      <span className="corner-mark corner-bottom-left" />
      <span className="corner-mark corner-bottom-right" />

      {/* HEADER */}
      <header className="intel-header">
        <div className="header-left">
          <div className="agency-mark">
            <span className="agency-symbol">✣</span>

            <div>
              <strong>NTRO</strong>
              <span>CYBER INTELLIGENCE SYSTEM</span>
            </div>
          </div>
        </div>

        <div className="header-centre">
          <span>OPS-NODE / DELTA-04</span>
          <span className="header-divider">///</span>
          <span>CASE 024-ALPHA</span>
        </div>

        <div className="header-right">
          <span className="live-indicator" />
          SYSTEM ONLINE
        </div>
      </header>

      {/* SYSTEM STRIP */}
      <div className="classification-strip">
        <span>RESTRICTED // CYBER OPERATIONS</span>

        <span className="classification-code">
          SESSION 7F2-A91
        </span>

        <span>AUTHORIZED ENVIRONMENT</span>
      </div>

      {/* MAIN CONTENT */}
      <section className="intel-body">
        {/* SIDE NAVIGATION */}
        <aside className="intel-sidebar">
          <div className="side-top">
            <span className="side-index-label">MODULE</span>

            <strong>
              {String(active + 1).padStart(2, '0')}
            </strong>

            <span className="side-total">/06</span>
          </div>

          <div className="side-rule">
            <span />
          </div>

          <nav className="vertical-module-nav">
            {modules.map((module, index) => (
              <button
                key={module.code}
                className={
                  index === active
                    ? 'vertical-nav-item active'
                    : 'vertical-nav-item'
                }
                onClick={() =>
                  changeSlide(
                    index,
                    index > active ? 'next' : 'previous'
                  )
                }
              >
                <span>{module.number}</span>
                <span>{module.code}</span>
              </button>
            ))}
          </nav>

          <div className="side-coordinates">
            <span>28°36&apos;N</span>
            <span>077°12&apos;E</span>
          </div>
        </aside>

        {/* CAROUSEL */}
        <div className="carousel-stage">
          <article
            className={`
              carousel-slide
              ${transitioning ? 'leaving' : 'entered'}
              ${direction === 'next' ? 'direction-next' : 'direction-prev'}
            `}
          >
            <div className="slide-header">
              <div>
                <p className="slide-kicker">
                  <span className="kicker-index">
                    {current.number}
                  </span>

                  {current.label}
                </p>

                <h1>{current.title}</h1>
              </div>

              <div className="module-status">
                <span>STATUS</span>
                <strong>{current.status}</strong>
              </div>
            </div>

            <div className="slide-bottom">
              <div className="slide-copy">
                <span className="micro-label">
                  MODULE / {current.code}
                </span>

                <p>{current.description}</p>

                <div className="slide-tags">
                  <span>INTELLIGENCE</span>
                  <span>TRACE</span>
                  <span>CORRELATION</span>
                </div>
              </div>

              <div className="visualisation-frame">
                <div className="visual-topbar">
                  <span>
                    VISUAL OUTPUT / {current.code}
                  </span>

                  <span>
                    0{active + 1}.290
                  </span>
                </div>

                <div className="visual-canvas">
                  <SlideVisual active={active} />
                </div>
              </div>
            </div>
          </article>

          {/* oversized editorial number */}
          <span className="background-index">
            {current.number}
          </span>

          <div className="carousel-progress">
            <div
              className="carousel-progress-fill"
              style={{
                width: `${((active + 1) / modules.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="intel-footer">
        <button
          className="carousel-arrow previous"
          onClick={previous}
        >
          <span>←</span>

          <div>
            <small>PREVIOUS</small>
            <strong>
              {
                modules[
                  active === 0
                    ? modules.length - 1
                    : active - 1
                ].code
              }
            </strong>
          </div>
        </button>

        <div className="carousel-selector">
          {modules.map((module, index) => (
            <button
              key={module.code}
              onClick={() =>
                changeSlide(
                  index,
                  index > active ? 'next' : 'previous'
                )
              }
              className={
                index === active
                  ? 'selector-item active'
                  : 'selector-item'
              }
            >
              <span>{module.number}</span>

              <div className="selector-line" />

              <small>{module.code}</small>
            </button>
          ))}
        </div>

        <button
          className="carousel-arrow next"
          onClick={next}
        >
          <div>
            <small>NEXT</small>
            <strong>
              {
                modules[
                  active === modules.length - 1
                    ? 0
                    : active + 1
                ].code
              }
            </strong>
          </div>

          <span>→</span>
        </button>
      </footer>
    </main>
  );
}

function SlideVisual({ active }: { active: number }) {
  switch (active) {
    case 0:
      return <CryptoFlow />;

    case 1:
      return <WalletCluster />;

    case 2:
      return <EntityExtraction />;

    case 3:
      return <MetadataDiagram />;

    case 4:
      return <CertificateMatch />;

    case 5:
      return <FaviconMatches />;

    default:
      return null;
  }
}

/* =========================================================
   01 — CRYPTO FLOW
========================================================= */

function CryptoFlow() {
  return (
    <div className="crypto-diagram diagram">
      <svg
        className="network-svg"
        viewBox="0 0 800 290"
        preserveAspectRatio="none"
      >
        <path
          className="flow-path"
          d="M70 150 C180 150 170 76 290 76"
        />

        <path
          className="flow-path"
          d="M290 76 C400 76 395 185 500 185"
        />

        <path
          className="flow-path flow-alert"
          d="M500 185 C610 185 610 105 720 105"
        />

        <circle cx="70" cy="150" r="4" />
        <circle cx="290" cy="76" r="4" />
        <circle cx="500" cy="185" r="4" />
        <circle cx="720" cy="105" r="4" />
      </svg>

      <DiagramNode
        className="crypto-source"
        label="SOURCE"
        value="bc1q...97f2"
      />

      <DiagramNode
        className="crypto-hop-one"
        label="HOP / 01"
        value="0.842 BTC"
      />

      <DiagramNode
        className="crypto-hop-two"
        label="HOP / 02"
        value="0.801 BTC"
      />

      <DiagramNode
        className="crypto-exchange alert-node"
        label="OFF-RAMP"
        value="EXCHANGE / 94%"
      />

      <span className="flow-value flow-value-one">
        0.842
      </span>

      <span className="flow-value flow-value-two">
        0.801
      </span>

      <span className="flow-value flow-value-three">
        0.784
      </span>

      <span className="diagram-cross cross-one">+</span>
      <span className="diagram-cross cross-two">×</span>
    </div>
  );
}

function DiagramNode({
  className,
  label,
  value,
}: {
  className: string;
  label: string;
  value: string;
}) {
  return (
    <div className={`diagram-node ${className}`}>
      <span className="diagram-node-marker" />

      <small>{label}</small>

      <strong>{value}</strong>
    </div>
  );
}

/* =========================================================
   02 — WALLET CLUSTER
========================================================= */

function WalletCluster() {
  return (
    <div className="cluster-diagram diagram">
      <div className="cluster-centre">
        <div className="cluster-ring ring-one" />
        <div className="cluster-ring ring-two" />
        <div className="cluster-core">
          CLUSTER
          <strong>A-17</strong>
        </div>
      </div>

      <ClusterNode
        className="cluster-a"
        address="bc1q..93f"
        score="92"
      />

      <ClusterNode
        className="cluster-b"
        address="bc1q..5ad"
        score="88"
      />

      <ClusterNode
        className="cluster-c"
        address="1Hc9..12x"
        score="81"
      />

      <ClusterNode
        className="cluster-d"
        address="bc1q..771"
        score="64"
      />

      <span className="cluster-link link-a" />
      <span className="cluster-link link-b" />
      <span className="cluster-link link-c" />
      <span className="cluster-link link-d" />
    </div>
  );
}

function ClusterNode({
  className,
  address,
  score,
}: {
  className: string;
  address: string;
  score: string;
}) {
  return (
    <div className={`cluster-node ${className}`}>
      <span className="cluster-dot" />
      <strong>{address}</strong>
      <small>{score}% CORR.</small>
    </div>
  );
}

/* =========================================================
   03 — ENTITY EXTRACTION
========================================================= */

function EntityExtraction() {
  return (
    <div className="entity-diagram diagram">
      <div className="entity-column">
        <header>
          <span>08</span>
          WALLETS
        </header>

        <EntityRow type="BTC" value="bc1q2n...8f3" />
        <EntityRow type="ETH" value="0x7fa9...c12" />
        <EntityRow type="XMR" value="48df9...a91" />
      </div>

      <div className="entity-column">
        <header>
          <span>05</span>
          IDENTITIES
        </header>

        <EntityRow type="ID" value="@cipher_root" />
        <EntityRow type="ID" value="null_vector" />
        <EntityRow type="SOC" value="@source_71" />
      </div>

      <div className="entity-column">
        <header>
          <span>04</span>
          PGP MATERIAL
        </header>

        <EntityRow type="PGP" value="82AE-F01C" />
        <EntityRow type="PGP" value="991D-2AF7" />
        <EntityRow type="SIG" value="VALID" />
      </div>
    </div>
  );
}

function EntityRow({
  type,
  value,
}: {
  type: string;
  value: string;
}) {
  return (
    <div className="entity-row">
      <span>{type}</span>
      <strong>{value}</strong>
    </div>
  );
}

/* =========================================================
   04 — ONION METADATA
========================================================= */

function MetadataDiagram() {
  return (
    <div className="metadata-diagram diagram">
      <div className="metadata-target">
        <div className="target-cross horizontal" />
        <div className="target-cross vertical" />

        <div className="target-ring ring-a" />
        <div className="target-ring ring-b" />

        <strong>HS-94</strong>
        <small>HIDDEN SERVICE</small>
      </div>

      <div className="metadata-list">
        <MetadataItem
          index="01"
          label="SSL SERIAL"
          value="03:D9:F4:8E"
        />

        <MetadataItem
          index="02"
          label="FAVICON"
          value="-11842937"
        />

        <MetadataItem
          index="03"
          label="SERVER"
          value="nginx/1.22"
        />

        <MetadataItem
          index="04"
          label="STATUS"
          value="ACTIVE"
        />
      </div>
    </div>
  );
}

function MetadataItem({
  index,
  label,
  value,
}: {
  index: string;
  label: string;
  value: string;
}) {
  return (
    <div className="metadata-item">
      <span>{index}</span>

      <small>{label}</small>

      <strong>{value}</strong>
    </div>
  );
}

/* =========================================================
   05 — CERTIFICATE MATCH
========================================================= */

function CertificateMatch() {
  return (
    <div className="certificate-diagram diagram">
      <div className="map-grid">
        <div className="map-horizontal h-one" />
        <div className="map-horizontal h-two" />

        <div className="map-vertical v-one" />
        <div className="map-vertical v-two" />

        <div className="map-target">
          <span className="map-target-cross">+</span>

          <div className="map-pulse" />

          <strong>185.74.xxx.xxx</strong>

          <small>
            CORRELATED HOST
          </small>
        </div>
      </div>

      <div className="certificate-data">
        <div>
          <small>MATCH</small>
          <strong className="match-score">94.6%</strong>
        </div>

        <div>
          <small>ASN</small>
          <strong>AS210644</strong>
        </div>

        <div>
          <small>PORTS</small>
          <strong>80 / 443</strong>
        </div>

        <div>
          <small>REGION</small>
          <strong>EU-WEST</strong>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   06 — FAVICON MATCHES
========================================================= */

function FaviconMatches() {
  return (
    <div className="favicon-diagram diagram">
      <div className="favicon-source">
        <span className="favicon-shape">
          ///
        </span>

        <small>SOURCE HASH</small>

        <strong>
          -11842937
        </strong>
      </div>

      <div className="favicon-spine" />

      <div className="favicon-results">
        <FaviconResult
          index="01"
          host="185.73.xxx.41"
          score="99.1"
        />

        <FaviconResult
          index="02"
          host="46.21.xxx.14"
          score="96.4"
        />

        <FaviconResult
          index="03"
          host="193.8.xxx.93"
          score="91.8"
        />

        <FaviconResult
          index="04"
          host="91.214.xxx.5"
          score="87.2"
        />
      </div>
    </div>
  );
}

function FaviconResult({
  index,
  host,
  score,
}: {
  index: string;
  host: string;
  score: string;
}) {
  return (
    <div className="favicon-result">
      <span>{index}</span>

      <strong>{host}</strong>

      <div className="match-bar">
        <span style={{ width: `${score}%` }} />
      </div>

      <small>{score}%</small>
    </div>
  );
}