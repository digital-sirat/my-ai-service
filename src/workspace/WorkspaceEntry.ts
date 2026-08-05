import type { WorkspaceEntry, WorkspaceFeatureFlagProvider } from './types';
import { UNIFIED_AI_WORKSPACE_FEATURE_FLAG } from './types';
export interface WorkspaceEntryOptions { readonly featureFlags: WorkspaceFeatureFlagProvider; readonly loadFoundation?: () => Promise<typeof import('./foundation')>; }
export const createWorkspaceEntry = ({ featureFlags, loadFoundation = () => import('./foundation') }: WorkspaceEntryOptions): WorkspaceEntry => Object.freeze({
  featureFlag: UNIFIED_AI_WORKSPACE_FEATURE_FLAG,
  isEnabled: () => featureFlags.isFeatureEnabled(UNIFIED_AI_WORKSPACE_FEATURE_FLAG),
  async load() { if (!featureFlags.isFeatureEnabled(UNIFIED_AI_WORKSPACE_FEATURE_FLAG)) return null; return (await loadFoundation()).workspaceFoundation; }
});
