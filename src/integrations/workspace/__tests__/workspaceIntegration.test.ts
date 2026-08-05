import { describe, expect, it, vi } from 'vitest';
vi.mock('@/utils/featureFlag', () => ({ isFeatureEnabled: vi.fn((name: string) => name === 'unified-ai-workspace') }));
import { isWorkspaceIntegrationEnabled, WORKSPACE_ROUTE_PATH, UNIFIED_AI_WORKSPACE_FEATURE_FLAG } from '../index';
describe('Workspace integration bridge', () => { it('uses the immutable Workspace feature contract', () => { expect(UNIFIED_AI_WORKSPACE_FEATURE_FLAG).toBe('unified-ai-workspace'); expect(WORKSPACE_ROUTE_PATH).toBe('/workspace'); expect(isWorkspaceIntegrationEnabled()).toBe(true); }); });
