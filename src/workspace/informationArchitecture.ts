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
  section({ id: 'tools', title: 'AI Tools', description: 'AI utilities, integrations, and developer capabilities.', visibility: 'primary', children: [['serp','SERP'],['web-extractor','Web Extractor'],['coding-bridge','Coding Bridge'],['console','Console'],['mcp','MCP'],['plugins','Plugins'],['agents','Agents'],['automation','Automation'],['api-hub','API Hub'],['sdk','SDK'],['integrations','Integrations'],['developer-tools','Developer Tools']], futureCapability: ['future-ai-services'] }),
  section({ id: 'agents', title: 'AI Agents', description: 'Future autonomous and assisted agent systems.', visibility: 'future', children: [['openai-agents','OpenAI Agents'],['claude-agents','Claude Agents'],['deep-research','Deep Research'],['computer-use','Computer Use'],['autogpt','AutoGPT'],['custom-agents','Custom Agents']], futureCapability: ['future-agent-systems'] }),
  section({ id: 'workflows', title: 'AI Workflows', description: 'Future orchestration for repeatable AI processes.', visibility: 'future', children: [['pipelines','Pipelines'],['automations','Automations'],['chains','Chains'],['multi-model-workflows','Multi-model Workflows'],['scheduled-flows','Scheduled Flows']], futureCapability: ['future-workflows'] }),
  section({ id: 'gallery', title: 'Gallery', description: 'Future gallery for generated AI content.', visibility: 'future', children: [], futureCapability: ['images','video','music','audio','text','code','3d','other-ai-content'] }),
  section({ id: 'community', title: 'Community', description: 'Future social space for creators and audiences.', visibility: 'future', children: [], futureCapability: ['likes','comments','follows','public-profiles','collections','authors'] }),
  section({ id: 'blog', title: 'AI Blog', description: 'Future editorial and AI knowledge content.', visibility: 'future', children: [], futureCapability: ['news','model-analysis','reviews','guides','education','case-studies','ai-articles'] }),
  section({ id: 'learning', title: 'Learning Center', description: 'Future AI learning center.', visibility: 'future', children: [], futureCapability: ['courses','tutorials','academy'] }),
  section({ id: 'marketplace', title: 'Marketplace', description: 'Future marketplace for AI resources.', visibility: 'future', children: [['models','Models'],['prompts','Prompts'],['agents','Agents'],['templates','Templates'],['plugins','Plugins']], futureCapability: ['products','creator-economy','extensions'] }),
  section({ id: 'templates', title: 'Templates', description: 'Future reusable templates for AI creation.', visibility: 'future', children: [], futureCapability: ['workflow-templates','prompt-templates','content-templates'] }),
  section({ id: 'projects', title: 'Projects', description: 'Future project workspace.', visibility: 'future', children: [], futureCapability: ['project-management'] }),
  section({ id: 'files', title: 'Files', description: 'Future file management space.', visibility: 'future', children: [], futureCapability: ['file-management'] }),
  section({ id: 'assets', title: 'Assets', description: 'Future reusable asset library.', visibility: 'future', children: [], futureCapability: ['asset-library'] }),
  section({ id: 'knowledge-base', title: 'Knowledge Base', description: 'Future retrieval-ready knowledge collections.', visibility: 'future', children: [['pdf','PDF'],['docx','DOCX'],['txt','TXT'],['markdown','Markdown'],['url','URL']], futureCapability: ['embeddings','vector-storage','retrieval','semantic-search'] }),
  section({ id: 'prompt-library', title: 'Prompt Library', description: 'Future personal and collaborative prompt management.', visibility: 'future', children: [['personal-prompts','Personal Prompts'],['team-prompts','Team Prompts'],['prompt-versions','Prompt Versions'],['variables','Variables'],['categories','Categories'],['favorites','Favorites']], futureCapability: ['prompt-management','prompt-collaboration'] }),
  section({ id: 'history', title: 'History', description: 'Future workspace activity history.', visibility: 'future', children: [], futureCapability: ['activity-history'] }),
  section({ id: 'favorites', title: 'Favorites', description: 'Future saved content collection.', visibility: 'future', children: [], futureCapability: ['saved-content'] }),
  section({ id: 'shared', title: 'Shared', description: 'Future shared workspace content.', visibility: 'future', children: [], futureCapability: ['sharing','collaboration'] }),
  section({ id: 'trash', title: 'Trash', description: 'Future recoverable deleted content.', visibility: 'future', children: [], futureCapability: ['soft-delete','restore'] }),
  section({ id: 'search', title: 'Search', description: 'Future unified workspace search.', visibility: 'future', children: [], futureCapability: ['unified-search'] }),
  section({ id: 'notifications', title: 'Notifications', description: 'Future workspace notification center.', visibility: 'future', children: [], futureCapability: ['notification-center'] }),
  section({ id: 'settings', title: 'Settings', description: 'Future workspace preferences.', visibility: 'future', children: [], futureCapability: ['workspace-preferences'] }),
  section({ id: 'billing', title: 'Billing', description: 'Future billing and usage space.', visibility: 'future', children: [], futureCapability: ['billing','usage'] }),
  section({ id: 'profile', title: 'Profile', description: 'Future user profile space.', visibility: 'future', children: [], futureCapability: ['user-profile'] }),
  section({ id: 'integrations', title: 'Integrations', description: 'Future external service connections.', visibility: 'future', children: [['google-drive','Google Drive'],['dropbox','Dropbox'],['github','GitHub'],['slack','Slack'],['telegram','Telegram'],['discord','Discord'],['notion','Notion']], futureCapability: ['future-integrations'] })
]);
export const WORKSPACE_SECTION_IDS: readonly WorkspaceSectionId[] = Object.freeze(WORKSPACE_INFORMATION_ARCHITECTURE.map(({ id }) => id));
export const WORKSPACE_MODALITIES: readonly WorkspaceModality[] = Object.freeze(['text','image','video','audio','tools']);
export const FUTURE_WORKSPACE_EXTENSIONS: readonly WorkspaceSpaceDefinition[] = Object.freeze([
  Object.freeze({ id: 'ai-space', title: 'AI Space', sectionIds: Object.freeze<WorkspaceSectionId[]>(['text','image','video','audio','tools','agents','workflows']), visibility: 'architectural-placeholder' as const, description: 'Future unified AI creation and orchestration space.' }),
  Object.freeze({ id: 'user-space', title: 'User Space', sectionIds: Object.freeze<WorkspaceSectionId[]>(['projects','files','assets','knowledge-base','prompt-library','history','favorites','gallery','shared','trash','notifications','settings','billing','profile']), visibility: 'architectural-placeholder' as const, description: 'Future personal workspace and account space.' }),
  Object.freeze({ id: 'content-space', title: 'Content Space', sectionIds: Object.freeze<WorkspaceSectionId[]>(['blog','learning','community','marketplace','templates','search']), visibility: 'architectural-placeholder' as const, description: 'Future editorial, learning, discovery, and community space.' })
]);
