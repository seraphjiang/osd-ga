import { CoreSetup, CoreStart, Plugin } from '../../../src/core/public';
import { OsdGaPluginSetup, OsdGaPluginStart } from './types';

export class OsdGaPlugin implements Plugin<OsdGaPluginSetup, OsdGaPluginStart> {
  public setup(core: CoreSetup): OsdGaPluginSetup {
    return {};
  }

  public start(core: CoreStart): OsdGaPluginStart {
    return {};
  }

  public stop() {}
}
