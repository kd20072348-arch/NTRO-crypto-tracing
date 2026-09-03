import { Module } from '@nitrostack/core';
import { DatabaseService } from './database.service';

@Module({
  name: 'database',
  description: 'Core database service and mock data provider',
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}