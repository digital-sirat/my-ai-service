import type { ModelCapability, ModelCategory } from '@/modelRegistry';
import type { ModelCardContract, UnifiedModelCatalog } from '@/modelCatalog';

export type CatalogUiSurfaceKind = 'chat' | 'image' | 'video' | 'music' | 'voice' | 'document' | 'internet';
export type CatalogUiIntegrationMode = 'legacy-selector-adapter' | 'catalog-readonly' | 'not-applicable';

export interface CatalogUiSurface {
  id: string;
  kind: CatalogUiSurfaceKind;
  component: string;
  mode: CatalogUiIntegrationMode;
  category?: ModelCategory;
  capabilities?: readonly ModelCapability[];
  storeNamespace?: string;
}

export interface LegacySelectorOption<Value = string> {
  value: Value;
  label: string;
  disabled?: boolean;
}

export interface CatalogSelectorOption<Value = string> extends LegacySelectorOption<Value> {
  catalog?: ModelCardContract;
}

export interface CatalogUiContext {
  catalog: UnifiedModelCatalog;
  surfaces: readonly CatalogUiSurface[];
}
