import { describe, expect, it, vi } from 'vitest';
const state = vi.hoisted(() => ({ enabled: false }));
vi.mock('@/integrations/workspace', () => ({ WORKSPACE_ROUTE_PATH: '/workspace', isWorkspaceIntegrationEnabled: () => state.enabled }));
import workspaceRoute from '@/router/workspace';
describe('Workspace route isolation', () => {
  it('remains unnamed, isolated and lazy', () => { expect(workspaceRoute.path).toBe('/workspace'); expect(workspaceRoute.name).toBeUndefined(); expect(workspaceRoute.meta?.skipApplicationBootstrap).toBe(true); expect(workspaceRoute.meta?.appName).toBeUndefined(); expect(typeof workspaceRoute.component).toBe('function'); expect(typeof workspaceRoute.children?.[0]?.component).toBe('function'); });
  it('blocks disabled access and permits enabled access', () => { const guard = workspaceRoute.beforeEnter; expect(typeof guard).toBe('function'); if (typeof guard !== 'function') throw new Error('Workspace route guard is unavailable'); state.enabled = false; expect(guard.call(undefined, {} as never, {} as never, vi.fn())).toBe('/'); state.enabled = true; expect(guard.call(undefined, {} as never, {} as never, vi.fn())).toBe(true); });
});
