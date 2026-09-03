export const MOCK_CRIME_SCENARIO = {
  threatActor: {
    id: 'TA-01',
    handle: 'DarkSovereign',
    pgpKey: '4A8B9C0D1E2F3G4H',
    riskScore: 92,
    associatedWallets: ['0x71C7656EC7ab88b098defB751B7401B5f6d8976F']
  },
  onionService: {
    url: 'http://darkmarketx337.onion',
    sslSerial: '123456789ABCDEF',
    leakedIp: '185.220.101.5',
  },
  wallets: [
    { address: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F', chain: 'ETH', tag: 'vendor' },
    { address: '0x47ac0Fb4F2D84898e4D9E7b4DaB3C24507a6D503', chain: 'ETH', tag: 'vasp_exchange' },
  ]
};