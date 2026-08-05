import type { WorkspaceChildPlaceholder, WorkspaceModality, WorkspaceSectionDefinition, WorkspaceSectionId, WorkspaceSectionVisibility, WorkspaceSpaceDefinition } from './types';

type SectionInput = Readonly<{ id: WorkspaceSectionId; title: string; description: string; visibility: WorkspaceSectionVisibility; children?: readonly (readonly [string, string])[]; futureCapability?: readonly string[] }>;
const strings = (items: readonly string[]) => Object.freeze([...items]);
const children = (items: readonly (readonly [string, string])[]): readonly WorkspaceChildPlaceholder[] => Object.freeze(items.map(([id, title]) => Object.freeze({ id, title })));
const section = ({ id, title, description, visibility, children: items = [], futureCapability = [] }: SectionInput): WorkspaceSectionDefinition => Object.freeze({
  id, title,
  icon: Object.freeze({ kind: 'placeholder' as const, key: `workspace-${id}` }),
  children: children(items), visibility,
  futureCapability: strings(futureCapability),
  route: Object.freeze({ kind: 'placeholder' as const, routeId: `workspace.${id}`, path: null }),
  description
});

export const WORKSPACE_INFORMATION_ARCHITECTURE: readonly WorkspaceSectionDefinition[] = Object.freeze([
  section({ id: 'text', title: 'Text AI', description: 'Text models and conversational AI.', visibility: 'primary', children: [['chatgpt','ChatGPT'],['claude','Claude'],['gemini','Gemini'],['grok','Grok'],['deepseek','DeepSeek'],['kimi','Kimi'],['qwen','Qwen'],['openai-compatible','OpenAI Compatible'],['byok','BYOK']], futureCapability: ['future-text-models'] }),
  section({ id: 'image', title: 'Image AI', description: 'Image generation and visual AI.', visibility: 'primary', children: [['flux','Flux'],['midjourney','Midjourney'],['nano-banana','Nano Banana'],['openai-image','OpenAI Image'],['seedream','Seedream'],['qr-art','QR Art']], futureCapability: ['future-image-models'] }),
  section({ id: 'video', title: 'Video AI', description: 'Video generation and cinematic AI.', visibility: 'primary', children: [['kling','Kling'],['veo','Veo'],['sora','Sora'],['seedance','Seedance'],['luma','Luma'],['pika','Pika'],['pixverse','PixVerse'],['wan','Wan'],['hailuo','Hailuo'],['maestro','Maestro'],['digital-human','Digital Human'],['omni','Omni']], futureCapability: ['future-video-models'] }),
  section({ id: 'audio', title: 'Audio AI', description: 'Voice, speech, music, and audio AI.', visibility: 'primary', children: [['fish','Fish'],['suno','Suno'],['producer','Producer'],['tts','TTS'],['voice','Voice'],['music','Music'],['speech','Speech']], futureCapability: ['future-audio-models'] }),
  section({ id: 'tools', title: 'AI Tools', description: 'AI utilities and developer capabilities.', visibility: 'primary', children: [['serp','SERP'],['web-extractor','Web Extractor'],['coding-bridge','Coding Bridge'],['mcp','MCP'],['plugins','Plugins'],['agents','Agents'],['automation','Automation'],['developer-tools','Developer Tools'],['api-tools','API Tools'],['console','Console']], futureCapability: ['future-ai-services'] }),
  section({ id: 'gallery', title: 'Gallery', description: 'Future gallery for generated AI content.', visibility: 'future', futureCapability: ['images','video','music','audio','text','code','3d','other-ai-content'] }),
  section({ id: 'community', title: 'Community', description: 'Future social space for creators and audiences.', visibility: 'future', futureCapability: ['likes','comments','follows','public-profiles','collections','authors'] }),
  section({ id: 'blog', title: 'AI Blog', description: 'Future editorial and AI knowledge content.', visibility: 'future', futureCapability: ['news','model-analysis','reviews','guides','education','case-studies','ai-articles'] }),
  section({ id: 'learning', title: 'Learning Center', description: 'Future AI learning center.', visibility: 'future', futureCapability: ['courses','tutorials','academy'] }),
  section({ id: 'marketplace', title: 'Marketplace', description: 'Future marketplace for AI resources.', visibility: 'future', futureCapability: ['products','templates','extensions'] }),
  section({ id: 'projects', title: 'Projects', description: 'Future project workspace.', visibility: 'future', futureCapability: ['project-management'] }),
  section({ id: 'files', title: 'Files', description: 'Future file management space.', visibility: 'future', futureCapability: ['file-management'] }),
  section({ id: 'assets', title: 'Assets', description: 'Future reusable asset library.', visibility: 'future', futureCapability: ['asset-library'] }),
  section({ id: 'history', title: 'History', description: 'Future workspace activity history.', visibility: 'future', futureCapability: ['activity-history'] }),
  section({ id: 'favorites', title: 'Favorites', description: 'Future saved content collection.', visibility: 'future', futureCapability: ['saved-content'] }),
  section({ id: 'search', title: 'Search', description: 'Future unified workspace search.', visibility: 'future', futureCapability: ['unified-search'] }),
  section({ id: 'notifications', title: 'Notifications', description: 'Future workspace notification center.', visibility: 'future', futureCapability: ['notification-center'] }),
  section({ id: 'settings', title: 'Settings', description: 'Future workspace preferences.', visibility: 'future', futureCapability: ['workspace-preferences'] }),
  section({ id: 'billing', title: 'Billing', description: 'Future billing and usage space.', visibility: 'future', futureCapability: ['billing','usage'] }),
  section({ id: 'profile', title: 'Profile', description: 'Future user profile space.', visibility: 'future', futureCapability: ['user-profile'] })
]);
export const WORKSPACE_SECTION_IDS: readonly WorkspaceSectionId[] = Object.freeze(WORKSPACE_INFORMATION_ARCHITECTURE.map(({ id }) => id));
export const WORKSPACE_MODALITIES: readonly WorkspaceModality[] = Object.freeze(['text','image','video','audio','tools']);
export const FUTURE_WORKSPACE_EXTENSIONS: readonly WorkspaceSpaceDefinition[] = Object.freeze([
  Object.freeze({ id: 'ai-space', title: 'AI Space', sectionIds: Object.freeze<WorkspaceSectionId[]>(['text','image','video','audio','tools']), visibility: 'architectural-placeholder' as const, description: 'Future unified AI creation space.' }),
  Object.freeze({ id: 'user-space', title: 'User Space', sectionIds: Object.freeze<WorkspaceSectionId[]>(['projects','files','assets','history','favorites','gallery','notifications','settings','billing','profile']), visibility: 'architectural-placeholder' as const, description: 'Future personal workspace and account space.' }),
  Object.freeze({ id: 'content-space', title: 'Content Space', sectionIds: Object.freeze<WorkspaceSectionId[]>(['blog','learning','community','marketplace','search']), visibility: 'architectural-placeholder' as const, description: 'Future editorial, learning, discovery, and community space.' })
]);
