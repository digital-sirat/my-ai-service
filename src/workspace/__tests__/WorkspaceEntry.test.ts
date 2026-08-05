import { describe, expect, it, vi } from 'vitest';
import { createWorkspaceEntry } from '../WorkspaceEntry';
import { UNIFIED_AI_WORKSPACE_FEATURE_FLAG } from '../types';

describe('WorkspaceEntry feature isolation', () => {
  it('does not invoke the Foundation loader while disabled', async () => {
    const loadFoundation = vi.fn();
    const entry = createWorkspaceEntry({
      featureFlags: { isFeatureEnabled: () => false },
      loadFoundation
    });

    expect(entry.featureFlag).toBe(UNIFIED_AI_WORKSPACE_FEATURE_FLAG);
    expect(entry.isEnabled()).toBe(false);
    expect(await entry.load()).toBeNull();
    expect(loadFoundation).not.toHaveBeenCalled();
  });

  it('loads Foundation only after explicit enablement', async () => {
    const workspaceFoundation = { shell: {} } as never;
    const loadFoundation = vi.fn(async () => ({ workspaceFoundation }));
    const entry = createWorkspaceEntry({
      featureFlags: { isFeatureEnabled: () => true },
      loadFoundation
    });

    expect(await entry.load()).toBe(workspaceFoundation);
    expect(loadFoundation).toHaveBeenCalledOnce();
  });
});
