import { ToolDecorator as Tool, Widget, z, Injectable } from '@nitrostack/core';
import { DeanonymizeService } from './deanonymize.service.js';

@Injectable({ deps: [DeanonymizeService] })
export class DeanonymizeTools {
  constructor(private readonly deanonymizeService: DeanonymizeService) {}

  @Tool({
    name: 'match_ssl_certificate',
    description: 'Correlates onion SSL serial numbers against public IPv4 addresses on Shodan/Censys to unmask physical host infrastructure.',
    inputSchema: z.object({
      onionUrl: z.string().describe('Target .onion domain name'),
      sslSerial: z.string().describe('SSL Certificate Serial Number (e.g., 03:A4:9B:12:F8:77:E1)'),
    }),
  })
  @Widget('infra-fingerprint-map')
  async matchSslCertificate(input: { onionUrl: string; sslSerial: string }) {
    const host = await this.deanonymizeService.correlateSslSerial(input.sslSerial);

    return {
      onion: input.onionUrl,
      sslSerial: input.sslSerial,
      matchedIp: host.ip,
      isp: host.isp,
      location: `${host.city}, ${host.country}`,
      openPorts: host.openPorts.join(', '),
      confidence: Math.round(host.confidenceScore * 100),
    };
  }
}