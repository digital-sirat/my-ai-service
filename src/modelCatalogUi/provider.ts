import { isUnifiedModelCatalogUiEnabled } from './featureFlag';
import { CATALOG_UI_SURFACES } from './surfaces';
import type { CatalogUiContext } from './types';

export interface CatalogUiProviderOptions {
  isEnabled?: () => boolean;
  loadCatalog?: () => Promise<typeof import('@/modelCatalog')>;
}

export interface CatalogUiProvider {
  isEnabled(): boolean;
  load(): Promise<CatalogUiContext | null>;
}

/** P3 and its registry graph are lazy-loaded only after explicit opt-in. */
export const createCatalogUiProvider = (options: CatalogUiProviderOptions = {}): CatalogUiProvider => {
  const enabled = options.isEnabled ?? isUnifiedModelCatalogUiEnabled;
  return Object.freeze({
    isEnabled: enabled,
    async load() {
      if (!enabled()) return null;
      const module = await (options.loadCatalog ?? (() => import('@/modelCatalog')))();
      return Object.freeze({ catalog: module.unifiedModelCatalog, surfaces: CATALOG_UI_SURFACES });
    }
  });
};

export const catalogUiProvider = createCatalogUiProvider();
