import { WORKSPACE_INFORMATION_ARCHITECTURE, WORKSPACE_SECTION_IDS } from './informationArchitecture';
import type { WorkspaceRoutePlaceholder, WorkspaceSectionId } from './types';

export type WorkspaceNavigationGroupId = 'primary' | 'secondary' | 'quick-actions' | 'pinned' | 'recent' | 'favorites';
export interface WorkspaceNavigationItem { readonly sectionId: WorkspaceSectionId; readonly route: WorkspaceRoutePlaceholder; }
export interface WorkspaceNavigationGroup { readonly id: WorkspaceNavigationGroupId; readonly items: readonly WorkspaceNavigationItem[]; }
export interface WorkspaceBreadcrumbContract { readonly items: readonly WorkspaceSectionId[]; readonly current: WorkspaceSectionId | null; }
export interface WorkspaceContextContract { readonly activeSectionId: WorkspaceSectionId | null; readonly selectedItemId: string | null; readonly metadata: Readonly<Record<string, never>>; }
export interface WorkspaceTabContract { readonly id: string; readonly sectionId: WorkspaceSectionId | null; readonly title: string; readonly closable: boolean; }

const itemById = new Map(WORKSPACE_INFORMATION_ARCHITECTURE.map(item => [item.id, item]));
const navigationItem = (sectionId: WorkspaceSectionId): WorkspaceNavigationItem => {
  const definition = itemById.get(sectionId);
  if (!definition) throw new Error(`Unknown workspace section: ${sectionId}`);
  return Object.freeze({ sectionId, route: definition.route });
};
const group = (id: WorkspaceNavigationGroupId, ids: readonly WorkspaceSectionId[]): WorkspaceNavigationGroup => Object.freeze({ id, items: Object.freeze(ids.map(navigationItem)) });

export const WORKSPACE_NAVIGATION_TREE: readonly WorkspaceNavigationGroup[] = Object.freeze([
  group('primary', ['text','image','video','audio','tools','agents','workflows']),
  group('secondary', ['projects','files','assets','knowledge-base','prompt-library','gallery','blog','learning','community','marketplace']),
  group('quick-actions', ['search','projects','files']),
  group('pinned', []), group('recent', []), group('favorites', ['favorites'])
]);
export const EMPTY_WORKSPACE_BREADCRUMBS: WorkspaceBreadcrumbContract = Object.freeze({ items: Object.freeze([]), current: null });
export const EMPTY_WORKSPACE_CONTEXT: WorkspaceContextContract = Object.freeze({ activeSectionId: null, selectedItemId: null, metadata: Object.freeze({}) });
export const EMPTY_WORKSPACE_TABS: readonly WorkspaceTabContract[] = Object.freeze([]);
export const NAVIGABLE_WORKSPACE_SECTION_IDS: readonly WorkspaceSectionId[] = Object.freeze([...WORKSPACE_SECTION_IDS]);
