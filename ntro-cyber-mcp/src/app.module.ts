import { Module } from '@nitrostack/core';
import { DatabaseModule } from './database/database.module';
import { DarkwebModule } from './darkweb/darkweb.module';
import { DeAnonymizeModule } from './deanonymize/deanonymize.module';
import { CryptoModule } from './crypto/crypto.module';

@Module({
  name: 'app',
  description: 'NTRO Darkweb & Crypto Tracing Intelligence Engine',
  imports: [
    DatabaseModule,
    DarkwebModule,
    DeAnonymizeModule,
    CryptoModule,
  ],
})
export class AppModule {}