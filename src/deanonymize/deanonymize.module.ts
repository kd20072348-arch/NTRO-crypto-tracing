import { Module } from '@nitrostack/core';
import { DeanonymizeService } from './deanonymize.service.js';
import { DeanonymizeTools } from './deanonymize.tool.js';

@Module({
  name: 'deanonymize',
  description: 'Infrastructure correlation tools',
  controllers: [DeanonymizeTools],
  providers: [DeanonymizeService],
  exports: [DeanonymizeService],
})
export class DeanonymizeModule {}