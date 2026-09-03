import { McpApp, Module } from '@nitrostack/core';
import { DatabaseModule } from './database/database.module.js';
import { DarkwebModule } from './darkweb/darkweb.module.js';
import { DeanonymizeModule } from './deanonymize/deanonymize.module.js';
import { CryptoModule } from './crypto/crypto.module.js';

@McpApp({
  module: AppModule,
  server: { name: 'ntro-cyber-mcp', version: '1.0.0' },
  transport: {
    type: 'http',
    http: { port: Number(process.env.PORT) || 3000, host: process.env.HOST || '0.0.0.0' },
  },
})
@Module({
  name: 'app',
  description: 'NTRO Darkweb & Crypto Tracing Intelligence Engine',
  imports: [
    DatabaseModule,
    DarkwebModule,
    DeanonymizeModule,
    CryptoModule,
  ],
})
export class AppModule {}