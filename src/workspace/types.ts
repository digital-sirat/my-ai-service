import type { Component } from 'vue';

export type WorkspaceModality = 'text' | 'image' | 'video' | 'audio' | 'tools';
export type WorkspaceSectionId =
  | WorkspaceModality | 'gallery' | 'community' | 'blog' | 'learning' | 'marketplace'
  | 'projects' | 'files' | 'assets' | 'history' | 'favorites' | 'search'
  | 'notifications' | 'settings' | 'billing' | 'profile';
export type WorkspaceSectionVisibility = 'primary' | 'future';
export type WorkspaceSpaceId = 'ai-space' | 'user-space' | 'content-space';

export interface WorkspaceIconPlaceholder { readonly kind: 'placeholder'; readonly key: string; }
export interface WorkspaceRoutePlaceholder { readonly kind: 'placeholder'; readonly routeId: string; readonly path: null; }
export interface WorkspaceChildPlaceholder { readonly id: string; readonly title: string; }
export interface WorkspaceSectionDefinition {
  readonly id: WorkspaceSectionId;
  readonly title: string;
  readonly icon: WorkspaceIconPlaceholder;
  readonly children: readonly WorkspaceChildPlaceholder[];
  readonly visibility: WorkspaceSectionVisibility;
  readonly futureCapability: readonly string[];
  readonly route: WorkspaceRoutePlaceholder;
  readonly description: string;
}
export interface WorkspaceSpaceDefinition {
  readonly id: WorkspaceSpaceId;
  readonly title: string;
  readonly sectionIds: readonly WorkspaceSectionId[];
  readonly visibility: 'architectural-placeholder';
  readonly description: string;
}
export interface WorkspaceFeatureFlagProvider { isFeatureEnabled(name: string): boolean; }
export interface WorkspaceFoundation {
  readonly shell: Component; readonly header: Component; readonly leftSidebar: Component;
  readonly mainArea: Component; readonly rightSidebar: Component; readonly routerView: Component;
  readonly notificationLayer: Component; readonly modalLayer: Component; readonly overlayLayer: Component;
  readonly hosts: Readonly<{ composer: Component; modelSwitcher: Component; context: Component; tool: Component }>;
  readonly slots: Readonly<Record<WorkspaceModality, Component>>;
}
export interface WorkspaceEntry {
  readonly featureFlag: typeof UNIFIED_AI_WORKSPACE_FEATURE_FLAG;
  isEnabled(): boolean;
  load(): Promise<WorkspaceFoundation | null>;
}
export const UNIFIED_AI_WORKSPACE_FEATURE_FLAG = 'unified-ai-workspace' as const;
