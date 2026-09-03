export interface ExtractedIntelligence {
  wallets: {
    btc: string[];
    eth: string[];
    xmr: string[];
  };
  handles: {
    telegram: string[];
    discord: string[];
    pgpKeys: string[];
  };
  urls: string[];
  meta: {
    totalEntitiesFound: number;
    timestamp: string;
  };
}

export class DarkwebParser {
  // Cryptocurrency regex patterns
  private static BTC_REGEX = /\b(1[a-km-zA-HJ-NP-Z1-9]{25,34}|3[a-km-zA-HJ-NP-Z1-9]{25,34}|bc1[qn-z0-9]{38,59})\b/g;
  private static ETH_REGEX = /\b(0x[a-fA-F0-9]{40})\b/g;
  private static XMR_REGEX = /\b(4[0-9AB][1-9A-HJ-NP-Za-km-z]{93})\b/g;

  // OSINT & Dark Web infrastructure patterns
  private static TELEGRAM_REGEX = /(?:t\.me\/|@)([a-zA-Z0-9_]{5,32})/g;
  private static DISCORD_REGEX = /\b[a-zA-Z0-9_]{2,32}#[0-9]{4}\b/g;
  private static PGP_REGEX = /-----BEGIN PGP PUBLIC KEY BLOCK-----[\s\S]*?-----END PGP PUBLIC KEY BLOCK-----/g;
  private static ONION_URL_REGEX = /\b[a-z2-7]{16,56}\.onion\b/g;

  static parse(rawText: string): ExtractedIntelligence {
    const btcMatches = Array.from(new Set(rawText.match(this.BTC_REGEX) || []));
    const ethMatches = Array.from(new Set(rawText.match(this.ETH_REGEX) || []));
    const xmrMatches = Array.from(new Set(rawText.match(this.XMR_REGEX) || []));

    const telegramMatches = Array.from(
      new Set(Array.from(rawText.matchAll(this.TELEGRAM_REGEX), (m) => `@${m[1]}`))
    );
    const discordMatches = Array.from(new Set(rawText.match(this.DISCORD_REGEX) || []));
    const pgpMatches = Array.from(new Set(rawText.match(this.PGP_REGEX) || []));
    const onionMatches = Array.from(new Set(rawText.match(this.ONION_URL_REGEX) || []));

    const totalEntities =
      btcMatches.length +
      ethMatches.length +
      xmrMatches.length +
      telegramMatches.length +
      discordMatches.length +
      pgpMatches.length +
      onionMatches.length;

    return {
      wallets: {
        btc: btcMatches,
        eth: ethMatches,
        xmr: xmrMatches,
      },
      handles: {
        telegram: telegramMatches,
        discord: discordMatches,
        pgpKeys: pgpMatches,
      },
      urls: onionMatches,
      meta: {
        totalEntitiesFound: totalEntities,
        timestamp: new Date().toISOString(),
      },
    };
  }
}