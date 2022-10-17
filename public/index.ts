import './index.scss';

import { OsdGaPlugin } from './plugin';

// This exports static code and TypeScript types,
// as well as, OpenSearch Dashboards Platform `plugin()` initializer.
export function plugin() {
  return new OsdGaPlugin();
}
export { OsdGaPluginSetup, OsdGaPluginStart } from './types';