'use client';

import { useWidgetSDK } from '@nitrostack/widgets';
import InteractiveMixerGraph from '../../interactivemixergraph';

export default function InteractiveMixerGraphPage() {
  const { isReady, getToolOutput } = useWidgetSDK();
  const data = getToolOutput<React.ComponentProps<typeof InteractiveMixerGraph>['data']>();

  if (!isReady || !data) {
    return <main style={{ padding: 24, fontFamily: 'monospace' }}>Waiting for mixer graph results...</main>;
  }

  return <InteractiveMixerGraph data={data} />;
}