import { Module } from '@nitrostack/core';
import { DatabaseModule } from '../database/database.module';
import { CryptoTraceTools } from './crypto.tool';

@Module({
  name: 'crypto',
  description: 'Crypto tracing and multi-hop transaction tools',
  imports: [DatabaseModule],
  providers: [CryptoTraceTools],
  exports: [CryptoTraceTools],
})
export class CryptoModule {}