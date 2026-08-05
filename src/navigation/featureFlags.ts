import { isFeatureEnabled } from '@/utils/featureFlag';
/** Opt-in: false unless explicitly enabled by the existing feature-flag system. */
export const NAVIGATION_V2_FEATURE_FLAG = 'navigation-v2';
export const isNavigationV2Enabled = (): boolean => isFeatureEnabled(NAVIGATION_V2_FEATURE_FLAG);
