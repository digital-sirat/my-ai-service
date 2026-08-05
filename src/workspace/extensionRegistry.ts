export type WorkspaceExtensionGroupId = 'ai-extensions' | 'user-extensions' | 'content-extensions' | 'developer-extensions' | 'marketplace-extensions';
export interface WorkspaceExtensionGroup { readonly id: WorkspaceExtensionGroupId; readonly title: string; readonly extensions: readonly never[]; }
export const FUTURE_WORKSPACE_EXTENSION_REGISTRY: readonly WorkspaceExtensionGroup[] = Object.freeze([
  ['ai-extensions','AI Extensions'],['user-extensions','User Extensions'],['content-extensions','Content Extensions'],['developer-extensions','Developer Extensions'],['marketplace-extensions','Marketplace Extensions']
].map(([id,title]) => Object.freeze({ id:id as WorkspaceExtensionGroupId,title,extensions:Object.freeze([]) })));
