import { createWorkspaceEntry, UNIFIED_AI_WORKSPACE_FEATURE_FLAG } from '@/workspace';
import type { WorkspaceFoundation } from '@/workspace';
import { isFeatureEnabled } from '@/utils/featureFlag';
import { createWorkspaceRuntimeSnapshot } from './contracts';
import type { WorkspaceRuntimeSnapshot } from './contracts';
export * from './contracts';
export const WORKSPACE_ROUTE_PATH = '/workspace' as const;
export const WORKSPACE_NAVIGATION_LABEL = 'AI Workspace' as const;
export const WORKSPACE_NAVIGATION_ICON = '/favicon.ico' as const;
export interface WorkspaceNavigationEntry { readonly path: typeof WORKSPACE_ROUTE_PATH; readonly label: typeof WORKSPACE_NAVIGATION_LABEL; readonly icon: typeof WORKSPACE_NAVIGATION_ICON; }
const WORKSPACE_NAVIGATION_ENTRY: WorkspaceNavigationEntry = Object.freeze({ path: WORKSPACE_ROUTE_PATH, label: WORKSPACE_NAVIGATION_LABEL, icon: WORKSPACE_NAVIGATION_ICON });
const workspaceEntry = createWorkspaceEntry({ featureFlags: Object.freeze({ isFeatureEnabled }) });
let runtimeSnapshot = createWorkspaceRuntimeSnapshot('idle', 'workspace-initialization');
let foundationRequest: Promise<WorkspaceFoundation | null> | null = null;
const setRuntimeSnapshot = (snapshot: WorkspaceRuntimeSnapshot): void => { runtimeSnapshot = snapshot; };
export const isWorkspaceIntegrationEnabled = (): boolean => workspaceEntry.isEnabled();
export const getWorkspaceRuntimeSnapshot = (): WorkspaceRuntimeSnapshot => runtimeSnapshot;
export const getWorkspaceNavigationEntry = (): WorkspaceNavigationEntry | null => isWorkspaceIntegrationEnabled() ? WORKSPACE_NAVIGATION_ENTRY : null;
export const loadWorkspaceFoundation = (): Promise<WorkspaceFoundation | null> => {
  if (!isWorkspaceIntegrationEnabled()) { setRuntimeSnapshot(createWorkspaceRuntimeSnapshot('disabled', 'feature-disabled')); return Promise.resolve(null); }
  if (!foundationRequest) {
    setRuntimeSnapshot(createWorkspaceRuntimeSnapshot('loading', 'foundation-loading'));
    foundationRequest = workspaceEntry.load().then(
      (foundation) => { setRuntimeSnapshot(createWorkspaceRuntimeSnapshot(foundation ? 'ready' : 'unavailable', foundation ? 'foundation-ready' : 'foundation-unavailable')); return foundation; },
      () => { setRuntimeSnapshot(createWorkspaceRuntimeSnapshot('unavailable', 'foundation-unavailable')); return null; }
    );
  }
  return foundationRequest;
};
export { UNIFIED_AI_WORKSPACE_FEATURE_FLAG };
