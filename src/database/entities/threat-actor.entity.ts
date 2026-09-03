export interface ThreatActorEntity {
  id: string;
  handle: string;
  pgpKey: string;
  riskScore: number;
  associatedWallets: string[];
}