import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const perfUiPlugin = createPlugin({
  id: 'perf-ui',
  routes: {
    root: rootRouteRef,
  },
});

export const PerfUiPage = perfUiPlugin.provide(
  createRoutableExtension({
    name: 'PerfUiPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
