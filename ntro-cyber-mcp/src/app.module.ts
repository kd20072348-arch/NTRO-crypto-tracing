// src/app.module.ts
import { Module } from '@nitrostack/core';
import { DarkwebModule } from './darkweb/darkweb.module';
import { DeAnonymizeModule } from './deanonymize/deanonymize.module';
import { CryptoTraceModule } from './crypto/crypto.module';

@Module({
  imports: [DarkwebModule, DeAnonymizeModule, CryptoTraceModule]
})
export class AppModule {}