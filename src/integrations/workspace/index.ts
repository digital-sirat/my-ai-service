import { createWorkspaceEntry, UNIFIED_AI_WORKSPACE_FEATURE_FLAG } from '@/workspace';
import { isFeatureEnabled } from '@/utils/featureFlag';
export const WORKSPACE_ROUTE_PATH = '/workspace' as const;
export const WORKSPACE_NAVIGATION_LABEL = 'AI Workspace' as const;
export const WORKSPACE_NAVIGATION_ICON = '/favicon.ico' as const;
const workspaceEntry = createWorkspaceEntry({ featureFlags: Object.freeze({ isFeatureEnabled }) });
export const isWorkspaceIntegrationEnabled = (): boolean => workspaceEntry.isEnabled();
export const loadWorkspaceFoundation = () => workspaceEntry.load();
export { UNIFIED_AI_WORKSPACE_FEATURE_FLAG };
