import { Module } from '@nitrostack/core';
import { CryptoService } from './crypto.service.js';
import { CryptoTraceTools } from './crypto.tool.js';

@Module({
  name: 'crypto',
  description: 'Crypto tracing and mixer graph tools',
  controllers: [CryptoTraceTools],
  providers: [CryptoService],
})
export class CryptoModule {}