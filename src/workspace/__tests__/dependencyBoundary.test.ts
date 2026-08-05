import { describe, expect, it } from 'vitest';

const sources = import.meta.glob(
  ['../**/*.ts', '../**/*.vue', '!../__tests__/**'],
  { eager: true, query: '?raw', import: 'default' }
) as Record<string, string>;

const forbiddenDependencies = [
  '@/' + 'router', '@/' + 'navigation', '@/' + 'store', '@/' + 'operators',
  '@/' + 'generators', '@/' + 'api', '@/' + 'backend', '@/' + 'modelRegistry',
  '@/' + 'modelCatalog', '@/' + 'modelCatalogUi', '@/' + 'layouts',
  '@/' + 'pages', '@/' + 'components', 'vue-' + 'router', 'vue' + 'x',
  'Navigator' + '.vue', 'Main' + '.vue', 'App' + '.vue'
];

const forbiddenRuntime = [
  'use' + 'Router(', 'use' + 'Route(', 'use' + 'Store(', '$' + 'store',
  'dispatch' + '(', 'commit' + '(', 'fetch' + '(', 'axios',
  'XMLHttp' + 'Request', '/api/'
];

describe('Workspace dependency boundary', () => {
  it('contains no protected application dependencies', () => {
    for (const [path, source] of Object.entries(sources)) {
      for (const token of forbiddenDependencies) {
        expect(source, `${path}:${token}`).not.toContain(token);
      }
    }
  });

  it('contains no business or application runtime calls', () => {
    for (const [path, source] of Object.entries(sources)) {
      for (const token of forbiddenRuntime) {
        expect(source, `${path}:${token}`).not.toContain(token);
      }
    }
  });
});
