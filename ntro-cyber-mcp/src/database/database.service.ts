import { Injectable } from '@nitrostack/core';
import { MOCK_CRIME_SCENARIO } from './seeds/mock-dataset';

@Injectable()
export class DatabaseService {
  private data = MOCK_CRIME_SCENARIO;

  async getThreatActor(handle: string) {
    return this.data.threatActor;
  }

  async getOnionSite(url: string) {
    return this.data.onionService;
  }

  async getWallets() {
    return this.data.wallets;
  }
}