import { describe, expect, it } from 'vitest';

const entries = import.meta.glob('../index.ts', {
  eager: true,
  query: '?raw',
  import: 'default'
}) as Record<string, string>;

describe('Workspace public API', () => {
  it('remains headless and does not export the Vue presentation graph', () => {
    const source = Object.values(entries)[0];
    expect(source).toBeDefined();
    expect(source).not.toContain('./foundation');
    expect(source).not.toContain('.vue');
    expect(source).not.toContain('components/');
    expect(source).not.toContain('WorkspaceShell');
    expect(source).not.toContain('WorkspaceSlot');
    expect(source).not.toContain('WorkspaceHost');
  });
});
