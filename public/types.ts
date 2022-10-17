import { NavigationPublicPluginStart } from '../../../src/plugins/navigation/public';

export interface OsdGaPluginSetup {
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface OsdGaPluginStart {}

export interface AppPluginStartDependencies {
  navigation: NavigationPublicPluginStart;
}
