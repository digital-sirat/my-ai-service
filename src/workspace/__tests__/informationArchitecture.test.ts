import { describe, expect, it } from 'vitest';
import {
  WORKSPACE_INFORMATION_ARCHITECTURE,
  WORKSPACE_MODALITIES,
  WORKSPACE_SECTION_IDS
} from '../informationArchitecture';

const byId = new Map(WORKSPACE_INFORMATION_ARCHITECTURE.map((item) => [item.id, item]));

describe('Unified AI Workspace information architecture', () => {
  it('contains all five primary modalities', () => {
    expect(WORKSPACE_MODALITIES).toEqual(['text', 'image', 'video', 'audio', 'tools']);
    for (const id of WORKSPACE_MODALITIES) {
      expect(byId.get(id)?.visibility).toBe('primary');
    }
  });

  it('contains every future platform placeholder', () => {
    expect(WORKSPACE_SECTION_IDS).toEqual(expect.arrayContaining([
      'gallery', 'community', 'learning', 'blog', 'projects', 'marketplace',
      'files', 'assets', 'settings', 'profile', 'billing', 'search', 'history',
      'favorites', 'notifications'
    ]));
  });

  it('contains required future capabilities', () => {
    expect(byId.get('text')?.futureCapability).toContain('Qwen');
    expect(byId.get('tools')?.futureCapability).toEqual(expect.arrayContaining([
      'SERP', 'Web Extractor', 'Coding Bridge', 'MCP', 'Plugins', 'Agents',
      'Automation', 'Developer Tools', 'API Tools', 'Console'
    ]));
    expect(byId.has('gallery')).toBe(true);
    expect(byId.has('community')).toBe(true);
    expect(byId.has('blog')).toBe(true);
    expect(byId.has('learning')).toBe(true);
    expect(byId.has('marketplace')).toBe(true);
  });

  it('is recursively immutable and route-free', () => {
    expect(Object.isFrozen(WORKSPACE_INFORMATION_ARCHITECTURE)).toBe(true);
    for (const item of WORKSPACE_INFORMATION_ARCHITECTURE) {
      expect(Object.isFrozen(item)).toBe(true);
      expect(Object.isFrozen(item.children)).toBe(true);
      expect(Object.isFrozen(item.futureCapability)).toBe(true);
      expect(item.iconPlaceholder).toBeTruthy();
      expect(item.routePlaceholder).toBeNull();
      expect(item.description).toBeTruthy();
    }
  });
});
