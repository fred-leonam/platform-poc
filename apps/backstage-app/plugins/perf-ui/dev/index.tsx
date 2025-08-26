import { createDevApp } from '@backstage/dev-utils';
import { perfUiPlugin, PerfUiPage } from '../src/plugin';

createDevApp()
  .registerPlugin(perfUiPlugin)
  .addPage({
    element: <PerfUiPage />,
    title: 'Root Page',
    path: '/perf-ui',
  })
  .render();
