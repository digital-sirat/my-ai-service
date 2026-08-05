import { describe, expect, it } from 'vitest';

const entries = import.meta.glob('../WorkspaceEntry.ts', {
  eager: true,
  query: '?raw',
  import: 'default'
}) as Record<string, string>;

describe('Workspace Foundation lazy loading', () => {
  it('contains exactly one runtime Foundation dynamic import behind the disabled guard', () => {
    const source = Object.values(entries)[0];
    expect(source).toBeDefined();
    if (!source) throw new Error('WorkspaceEntry source is unavailable');

    const runtimeImports = source.match(/\(\) => import\('\.\/foundation'\)/g) ?? [];
    const guard = 'if (!featureFlags.isFeatureEnabled(UNIFIED_AI_WORKSPACE_FEATURE_FLAG)) return null';
    const loaderCall = 'return (await loadFoundation()).workspaceFoundation';

    expect(runtimeImports).toHaveLength(1);
    expect(source.indexOf(guard)).toBeGreaterThanOrEqual(0);
    expect(source.indexOf(guard)).toBeLessThan(source.indexOf(loaderCall));
  });
});
