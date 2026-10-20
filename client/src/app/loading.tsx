import type React from 'react';

import { RouteLoadingShell } from '@/components/common/RouteLoadingShell';

export default function Loading(): React.ReactElement {
  return <RouteLoadingShell className="min-h-dvh" />;
}
