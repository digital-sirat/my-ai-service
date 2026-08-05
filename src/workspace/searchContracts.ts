export type WorkspaceSearchScopeId = 'global-search' | 'model-search' | 'conversation-search' | 'prompt-search' | 'knowledge-search' | 'marketplace-search' | 'gallery-search' | 'history-search' | 'project-search';
export interface WorkspaceSearchScope { readonly id: WorkspaceSearchScopeId; readonly title: string; readonly kind: 'placeholder'; }
export const WORKSPACE_SEARCH_SCOPES: readonly WorkspaceSearchScope[] = Object.freeze([
  ['global-search','Global Search'],['model-search','Model Search'],['conversation-search','Conversation Search'],['prompt-search','Prompt Search'],['knowledge-search','Knowledge Search'],['marketplace-search','Marketplace Search'],['gallery-search','Gallery Search'],['history-search','History Search'],['project-search','Project Search']
].map(([id,title]) => Object.freeze({ id:id as WorkspaceSearchScopeId,title,kind:'placeholder' as const })));
