import type { Component } from 'vue';

export type WorkspaceModality = 'text' | 'image' | 'video' | 'audio' | 'tools';

export type WorkspaceSectionId =
  | WorkspaceModality
  | 'gallery'
  | 'community'
  | 'learning'
  | 'blog'
  | 'projects'
  | 'marketplace'
  | 'files'
  | 'assets'
  | 'settings'
  | 'profile'
  | 'billing'
  | 'search'
  | 'history'
  | 'favorites'
  | 'notifications';

export type WorkspaceSectionVisibility = 'primary' | 'future';

export interface WorkspaceSectionDefinition {
  readonly id: WorkspaceSectionId;
  readonly title: string;
  readonly iconPlaceholder: string;
  readonly children: readonly WorkspaceSectionDefinition[];
  readonly visibility: WorkspaceSectionVisibility;
  readonly futureCapability: readonly string[];
  readonly routePlaceholder: null;
  readonly description: string;
}

export interface WorkspaceFeatureFlagProvider {
  isFeatureEnabled(name: string): boolean;
}

export interface WorkspaceFoundation {
  readonly shell: Component;
  readonly header: Component;
  readonly leftSidebar: Component;
  readonly mainArea: Component;
  readonly rightSidebar: Component;
  readonly routerView: Component;
  readonly notificationLayer: Component;
  readonly modalLayer: Component;
  readonly overlayLayer: Component;
  readonly hosts: Readonly<{
    composer: Component;
    modelSwitcher: Component;
    context: Component;
    tool: Component;
  }>;
  readonly slots: Readonly<Record<WorkspaceModality, Component>>;
}

export interface WorkspaceEntry {
  readonly featureFlag: typeof UNIFIED_AI_WORKSPACE_FEATURE_FLAG;
  isEnabled(): boolean;
  load(): Promise<WorkspaceFoundation | null>;
}

export const UNIFIED_AI_WORKSPACE_FEATURE_FLAG = 'unified-ai-workspace' as const;
