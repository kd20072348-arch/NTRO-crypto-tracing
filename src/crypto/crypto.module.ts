import { Module } from '@nitrostack/core';
import { DatabaseModule } from '../database/database.module.js';
import { CryptoTraceTools } from './crypto.tool.js';

@Module({
  name: 'crypto',
  description: 'Crypto tracing and multi-hop transaction tools',
  imports: [DatabaseModule],
  controllers: [CryptoTraceTools],
})
export class CryptoModule {}