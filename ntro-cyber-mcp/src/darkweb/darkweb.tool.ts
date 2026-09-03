import { ToolDecorator as Tool, z } from '@nitrostack/core'; // <--- Lowercase 'tool'
import { DatabaseService } from '../database/database.service';

export class DarkwebTools {
  constructor(private readonly db: DatabaseService) {}

  @Tool({                                   // <--- Use @tool
    name: 'scrape_onion_dump',
    description: 'Parses raw HTML or plain text from darkweb forum dumps.',
    inputSchema: z.object({
      rawContent: z.string(),
      sourceUrl: z.string().optional(),
    }),
  })
  async scrapeOnionDump(input: { rawContent: string; sourceUrl?: string }) {
    return {
      sourceUrl: input.sourceUrl || 'http://darkmarketx337.onion',
      status: 'EXTRACTED',
    };
  }

  @Tool({                                   // <--- Use @tool
    name: 'get_onion_site_metadata',
    description: 'Retrieves stored server metadata for a target hidden service.',
    inputSchema: z.object({
      onionUrl: z.string(),
    }),
  })
  async getOnionSiteMetadata(input: { onionUrl: string }) {
    return {
      onionUrl: input.onionUrl,
      sslCertificateSerial: '123456789ABCDEF',
    };
  }
}