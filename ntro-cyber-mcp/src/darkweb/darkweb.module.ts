import { Module } from '@nitrostack/core';
import { DarkwebTools } from './darkweb.tool';

@Module({
  name: 'darkweb',
  description: 'Darkweb scraping and entity extraction tools',
  providers: [DarkwebTools],
  exports: [DarkwebTools],
})
export class DarkwebModule {}