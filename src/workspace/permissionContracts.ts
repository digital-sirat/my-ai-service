export type WorkspacePermissionTier = 'guest' | 'user' | 'pro' | 'team' | 'enterprise' | 'admin';
export interface WorkspacePermissionContract { readonly tier: WorkspacePermissionTier; readonly capabilities: readonly never[]; readonly kind: 'placeholder'; }
export const WORKSPACE_PERMISSION_TIERS: readonly WorkspacePermissionContract[] = Object.freeze(
  (['guest','user','pro','team','enterprise','admin'] as const).map(tier => Object.freeze({ tier, capabilities:Object.freeze([]), kind:'placeholder' as const }))
);
