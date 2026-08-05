import { describe, expect, it } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
const root = resolve(process.cwd(), 'src');
const source = (path: string) => readFileSync(resolve(root, path), 'utf8');
const walk = (directory: string): string[] => readdirSync(resolve(root, directory), { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? walk(`${directory}/${entry.name}`) : [`${directory}/${entry.name}`]);
describe('Workspace integration architecture', () => {
  it('keeps the route isolated and ordered before catch-all', () => { const router = source('router/index.ts'); const route = source('router/workspace.ts'); expect(router.indexOf('  workspace,')).toBeLessThan(router.indexOf("path: '/:pathMatch(.*)*'")); expect(route).not.toMatch(/\bname\s*:/); expect(route).not.toContain('appName'); expect(route).toContain('skipApplicationBootstrap: true'); });
  it('allows only the bridge to import the Workspace public API', () => { const consumers = walk('.').filter(path => /\.(ts|vue)$/.test(path) && !path.startsWith('./workspace/') && source(path).includes("@/workspace")); expect(consumers).toEqual(expect.arrayContaining(['./integrations/workspace/index.ts', './integrations/workspace/WorkspacePage.vue'])); expect(consumers.every(path => path.startsWith('./integrations/workspace/'))).toBe(true); });
  it('forbids Workspace internals and application dependencies in the bridge', () => { const bridge = walk('./integrations/workspace').filter(path => /\.(ts|vue)$/.test(path) && !path.includes('/__tests__/')).map(path => source(path)).join('\n'); expect(bridge).not.toMatch(/workspace\/(foundation|components)/); expect(bridge).not.toMatch(/@\/(store|api|backend|operators|router|navigation|layouts|pages|components)/); expect(bridge).not.toMatch(/\b(window|document|fetch|XMLHttpRequest|localStorage|sessionStorage)\b/); });
  it('preserves route and Foundation lazy boundaries', () => { expect(source('router/workspace.ts')).toContain("component: () => import('@/integrations/workspace/WorkspacePage.vue')"); expect(source('workspace/WorkspaceEntry.ts').match(/import\('\.\/foundation'\)/g)).toHaveLength(2); expect(source('workspace/WorkspaceEntry.ts').match(/=> import\('\.\/foundation'\)/g)).toHaveLength(1); });
});
