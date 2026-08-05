export type WorkspaceRuntimeStatus = 'disabled' | 'idle' | 'loading' | 'ready' | 'unavailable';
export type WorkspaceLifecycleEvent = 'workspace-initialization' | 'foundation-loading' | 'foundation-ready' | 'foundation-unavailable' | 'feature-disabled';
export interface WorkspaceRuntimeSnapshot { readonly status: WorkspaceRuntimeStatus; readonly lifecycle: WorkspaceLifecycleEvent; }
export const createWorkspaceRuntimeSnapshot = (status: WorkspaceRuntimeStatus, lifecycle: WorkspaceLifecycleEvent): WorkspaceRuntimeSnapshot => Object.freeze({ status, lifecycle });
