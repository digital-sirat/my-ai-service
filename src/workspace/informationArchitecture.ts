import type { WorkspaceModality } from './types';
export interface WorkspaceProviderDefinition { readonly id: string; readonly label: string; }
export interface WorkspaceModalityDefinition { readonly id: WorkspaceModality; readonly label: string; readonly providers: readonly WorkspaceProviderDefinition[]; }
const providers = (items: readonly (readonly [string, string])[]) => Object.freeze(items.map(([id, label]) => Object.freeze({ id, label })));
export const WORKSPACE_INFORMATION_ARCHITECTURE: readonly WorkspaceModalityDefinition[] = Object.freeze([
  Object.freeze({ id: 'text', label: 'Text', providers: providers([['chatgpt','ChatGPT'],['claude','Claude'],['gemini','Gemini'],['grok','Grok'],['deepseek','DeepSeek'],['kimi','Kimi']]) }),
  Object.freeze({ id: 'image', label: 'Image', providers: providers([['flux','Flux'],['nano-banana','Nano Banana'],['openai-image','OpenAI Image'],['midjourney','Midjourney'],['seedream','Seedream'],['qr-art','QR Art']]) }),
  Object.freeze({ id: 'video', label: 'Video', providers: providers([['kling','Kling'],['veo','Veo'],['sora','Sora'],['pika','Pika'],['pixverse','PixVerse'],['hailuo','Hailuo'],['wan','Wan'],['seedance','Seedance'],['grok-video','Grok Video'],['luma','Luma'],['maestro','Maestro'],['omni','Omni'],['digital-human','Digital Human']]) }),
  Object.freeze({ id: 'audio', label: 'Audio', providers: providers([['fish-tts','Fish TTS'],['suno','Suno'],['producer','Producer']]) }),
  Object.freeze({ id: 'tools', label: 'Tools', providers: providers([['agents','Agents'],['mcp','MCP'],['plugins','Plugins'],['coding-bridge','Coding Bridge'],['serp','SERP'],['web-extractor','Web Extractor'],['projects','Projects'],['artifacts','Artifacts']]) })
]);
export const WORKSPACE_MODALITIES: readonly WorkspaceModality[] = Object.freeze(WORKSPACE_INFORMATION_ARCHITECTURE.map(({ id }) => id));
