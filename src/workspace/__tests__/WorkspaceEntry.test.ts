import { describe, expect, it, vi } from 'vitest';
import { createWorkspaceEntry } from '../WorkspaceEntry';
describe('P8A workspace feature isolation', () => {
  it('does not call or import the foundation while disabled', async () => { const loadFoundation=vi.fn();const entry=createWorkspaceEntry({featureFlags:{isFeatureEnabled:()=>false},loadFoundation});expect(entry.isEnabled()).toBe(false);expect(await entry.load()).toBeNull();expect(loadFoundation).not.toHaveBeenCalled(); });
  it('loads only after enablement', async () => { const workspaceFoundation={shell:{}} as never;const loadFoundation=vi.fn(async()=>({workspaceFoundation}));const entry=createWorkspaceEntry({featureFlags:{isFeatureEnabled:()=>true},loadFoundation});expect(await entry.load()).toBe(workspaceFoundation);expect(loadFoundation).toHaveBeenCalledOnce(); });
});
