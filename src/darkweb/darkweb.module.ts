import { Module } from '@nitrostack/core';
import { DarkwebService } from './darkweb.service.js';
import { DarkwebTools } from './darkweb.tool.js';

@Module({
  name: 'darkweb',
  description: 'Darkweb text intelligence tools',
  controllers: [DarkwebTools],
  providers: [DarkwebService],
  exports: [DarkwebService],
})
export class DarkwebModule {}