import { isFeatureEnabled } from '@/utils/featureFlag';

/** P4 is opt-in and disabled by the existing feature-flag system by default. */
export const UNIFIED_MODEL_CATALOG_UI_FEATURE_FLAG = 'unified-model-catalog-ui';
export const isUnifiedModelCatalogUiEnabled = (): boolean =>
  isFeatureEnabled(UNIFIED_MODEL_CATALOG_UI_FEATURE_FLAG);
