import { beforeEach, describe, expect, it, vi } from 'vitest';
const state = vi.hoisted(() => ({ enabled: false, load: vi.fn<() => Promise<object | null>>() }));
vi.mock('@/utils/featureFlag', () => ({ isFeatureEnabled: vi.fn(() => state.enabled) }));
vi.mock('@/workspace', () => ({ UNIFIED_AI_WORKSPACE_FEATURE_FLAG: 'unified-ai-workspace', createWorkspaceEntry: () => ({ featureFlag: 'unified-ai-workspace', isEnabled: () => state.enabled, load: state.load }) }));
describe('Workspace integration bridge', () => {
  beforeEach(() => { vi.resetModules(); state.enabled = false; state.load.mockReset(); });
  it('keeps disabled navigation and runtime activation absent', async () => { const integration = await import('../index'); expect(integration.getWorkspaceNavigationEntry()).toBeNull(); expect(await integration.loadWorkspaceFoundation()).toBeNull(); expect(state.load).not.toHaveBeenCalled(); });
  it('exposes enabled navigation and memoizes Foundation loading', async () => { const integration = await import('../index'); const foundation = Object.freeze({ shell: Object.freeze({}) }); state.enabled = true; state.load.mockResolvedValue(foundation); expect(integration.getWorkspaceNavigationEntry()).toEqual({ path: '/workspace', label: 'AI Workspace', icon: '/favicon.ico' }); const first = integration.loadWorkspaceFoundation(); const second = integration.loadWorkspaceFoundation(); expect(first).toBe(second); await expect(first).resolves.toBe(foundation); expect(state.load).toHaveBeenCalledTimes(1); });
  it('contains Foundation load failures and keeps the rejected request deduplicated', async () => { const integration = await import('../index'); state.enabled = true; state.load.mockRejectedValue(new Error('foundation unavailable')); const first = integration.loadWorkspaceFoundation(); const second = integration.loadWorkspaceFoundation(); expect(first).toBe(second); await expect(first).resolves.toBeNull(); expect(state.load).toHaveBeenCalledTimes(1); });
});
