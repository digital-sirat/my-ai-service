export type WorkspaceCommandPaletteSectionId = 'commands' | 'actions' | 'navigation' | 'recent' | 'favorites' | 'quick-open' | 'settings' | 'developer';
export interface WorkspaceCommandPaletteSection { readonly id: WorkspaceCommandPaletteSectionId; readonly title: string; readonly commands: readonly never[]; }
export const WORKSPACE_COMMAND_PALETTE: readonly WorkspaceCommandPaletteSection[] = Object.freeze([
  ['commands','Commands'],['actions','Actions'],['navigation','Navigation'],['recent','Recent'],['favorites','Favorites'],['quick-open','Quick Open'],['settings','Settings'],['developer','Developer']
].map(([id,title]) => Object.freeze({ id:id as WorkspaceCommandPaletteSectionId,title,commands:Object.freeze([]) })));
