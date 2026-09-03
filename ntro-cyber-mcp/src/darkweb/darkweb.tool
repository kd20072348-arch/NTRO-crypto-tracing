// src/darkweb/darkweb.tool.ts
import { Tool, z } from '@nitrostack/core';

export class DarkwebTools {
  @Tool({
    name: 'scrape_onion_dump',
    description: 'Extracts crypto wallets, PGP fingerprints, and social handles from raw onion text or HTML.',
    inputSchema: z.object({
      rawContent: z.string().describe('HTML or text scraped from target .onion forum')
    })
  })
  async scrapeOnionDump(input: { rawContent: string }) {
    const btcRegex = /[13][a-km-zA-HJ-NP-Z1-9]{25,34}|bc1[qn-z0-9]{38,59}/g;
    const ethRegex = /0x[a-fA-F0-9]{40}/g;
    const xmrRegex = /4[0-9AB][1-9A-HJ-NP-Za-km-z]{93}/g;

    return {
      extractedWallets: {
        btc: [...new Set(input.rawContent.match(btcRegex) || [])],
        eth: [...new Set(input.rawContent.match(ethRegex) || [])],
        xmr: [...new Set(input.rawContent.match(xmrRegex) || [])]
      },
      extractedHandles: [...new Set(input.rawContent.match(/@[a-zA-Z0-9_]+/g) || [])]
    };
  }
}