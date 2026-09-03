import { Module } from '@nitrostack/core';
import { DeAnonymizeTools } from './deanonymize.tool';

@Module({
  name: 'deanonymize',
  description: 'SSL certificate and infrastructure de-anonymization tools',
  providers: [DeAnonymizeTools],
  exports: [DeAnonymizeTools],
})
export class DeAnonymizeModule {}