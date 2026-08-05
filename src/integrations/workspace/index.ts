import { createWorkspaceEntry, UNIFIED_AI_WORKSPACE_FEATURE_FLAG } from '@/workspace';
import type { WorkspaceFoundation } from '@/workspace';
import { isFeatureEnabled } from '@/utils/featureFlag';
export const WORKSPACE_ROUTE_PATH = '/workspace' as const;
export const WORKSPACE_NAVIGATION_LABEL = 'AI Workspace' as const;
export const WORKSPACE_NAVIGATION_ICON = '/favicon.ico' as const;
export interface WorkspaceNavigationEntry { readonly path: typeof WORKSPACE_ROUTE_PATH; readonly label: typeof WORKSPACE_NAVIGATION_LABEL; readonly icon: typeof WORKSPACE_NAVIGATION_ICON; }
const WORKSPACE_NAVIGATION_ENTRY: WorkspaceNavigationEntry = Object.freeze({ path: WORKSPACE_ROUTE_PATH, label: WORKSPACE_NAVIGATION_LABEL, icon: WORKSPACE_NAVIGATION_ICON });
const workspaceEntry = createWorkspaceEntry({ featureFlags: Object.freeze({ isFeatureEnabled }) });
let foundationRequest: Promise<WorkspaceFoundation | null> | null = null;
export const isWorkspaceIntegrationEnabled = (): boolean => workspaceEntry.isEnabled();
export const getWorkspaceNavigationEntry = (): WorkspaceNavigationEntry | null => isWorkspaceIntegrationEnabled() ? WORKSPACE_NAVIGATION_ENTRY : null;
export const loadWorkspaceFoundation = (): Promise<WorkspaceFoundation | null> => {
  if (!isWorkspaceIntegrationEnabled()) return Promise.resolve(null);
  if (!foundationRequest) foundationRequest = workspaceEntry.load().catch(() => null);
  return foundationRequest;
};
export { UNIFIED_AI_WORKSPACE_FEATURE_FLAG };
