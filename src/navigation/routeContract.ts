import * as r from '@/router/constants';
import type { ProductSection, ProductSectionAccess } from './productSections';
export interface LegacyRouteContractEntry {
  name: string; path: string; section?: ProductSection; access: ProductSectionAccess;
  capability?: string; availability?: 'computer-use';
}
const x = (name:string,path:string,section:ProductSection|undefined,access:ProductSectionAccess,capability?:string,availability?:'computer-use'):LegacyRouteContractEntry => ({name,path,section,access,capability,availability});
/** Baseline for every existing named route. Names and paths are compatibility guarantees. */
export const LEGACY_ROUTE_CONTRACT = [
 x(r.ROUTE_INDEX,'/home','home','public'), x(r.ROUTE_DOWNLOAD,'/download','home','public'),
 x(r.ROUTE_SHARE_CONVERSATION,'/share/:id','library','public'), x(r.ROUTE_AUTH_LOGIN,'/auth/login','account','public'), x(r.ROUTE_AUTH_CALLBACK,'/auth/callback','account','public'),
 x(r.ROUTE_SETTINGS_INDEX,'/settings','account','authenticated'), x(r.ROUTE_SETTINGS_LOCAL_TOOLS,'/settings/local-tools','developers','developer','local-tools','computer-use'),
 x(r.ROUTE_CHATGPT_CONVERSATION_NEW,'/chatgpt/conversations','chat','public','chatgpt'), x(r.ROUTE_CHATGPT_CONVERSATION,'/chatgpt/conversations/:id','chat','public','chatgpt'),
 x(r.ROUTE_CHATGPT_CALL,'/chatgpt/call','voice','public','realtime'), x(r.ROUTE_CHAT_SCHEDULED_TASKS,'/chatgpt/scheduled','chat','public','chatgpt'), x(r.ROUTE_CHAT_ARTIFACTS,'/chatgpt/artifacts','library','public','chatgpt'),
 x(r.ROUTE_CLAUDE_CONVERSATION_NEW,'/claude/conversations','chat','public','claude'), x(r.ROUTE_CLAUDE_CONVERSATION,'/claude/conversations/:id','chat','public','claude'),
 x(r.ROUTE_GEMINI_CONVERSATION_NEW,'/gemini/conversations','chat','public','gemini'), x(r.ROUTE_GEMINI_CONVERSATION,'/gemini/conversations/:id','chat','public','gemini'),
 x(r.ROUTE_GROK_CONVERSATION_NEW,'/grok/conversations','chat','public','grok'), x(r.ROUTE_GROK_CONVERSATION,'/grok/conversations/:id','chat','public','grok'),
 x(r.ROUTE_DEEPSEEK_CONVERSATION_NEW,'/deepseek/conversations','chat','public','deepseek'), x(r.ROUTE_DEEPSEEK_CONVERSATION,'/deepseek/conversations/:id','chat','public','deepseek'),
 x(r.ROUTE_KIMI_CONVERSATION_NEW,'/kimi/conversations','chat','public','kimi'), x(r.ROUTE_KIMI_CONVERSATION,'/kimi/conversations/:id','chat','public','kimi'),
 x(r.ROUTE_MIDJOURNEY_INDEX,'/midjourney','images','public','midjourney'), x(r.ROUTE_QRART_INDEX,'/qrart','images','authenticated','qrart'), x(r.ROUTE_FLUX_INDEX,'/flux','images','authenticated','flux'),
 x(r.ROUTE_NANOBANANA_INDEX,'/nanobanana','images','authenticated','nanobanana'), x(r.ROUTE_OPENAIIMAGE_INDEX,'/openai-image','images','authenticated','openaiimage'), x(r.ROUTE_SEEDREAM_INDEX,'/seedream','images','authenticated','seedream'),
 x(r.ROUTE_LUMA_INDEX,'/luma','video','authenticated','luma'), x(r.ROUTE_PIKA_INDEX,'/pika','video','authenticated','pika'), x(r.ROUTE_KLING_INDEX,'/kling','video','authenticated','kling'),
 x(r.ROUTE_VEO_INDEX,'/veo','video','authenticated','veo'), x(r.ROUTE_SORA_INDEX,'/sora','video','authenticated','sora'), x(r.ROUTE_MAESTRO_INDEX,'/maestro','video','authenticated','maestro'),
 x(r.ROUTE_POIVELLE_INDEX,'/poivelle','video','authenticated','poivelle'), x(r.ROUTE_DIGITALHUMAN_INDEX,'/digital-human','video','authenticated','digitalhuman'), x(r.ROUTE_PIXVERSE_INDEX,'/pixverse','video','authenticated','pixverse'),
 x(r.ROUTE_HAILUO_INDEX,'/hailuo','video','authenticated','hailuo'), x(r.ROUTE_SEEDANCE_INDEX,'/seedance','video','authenticated','seedance'), x(r.ROUTE_GROKVIDEO_INDEX,'/grok-video','video','authenticated','grokvideo'),
 x(r.ROUTE_OMNI_INDEX,'/omni','video','authenticated','omni'), x(r.ROUTE_WAN_INDEX,'/wan','video','authenticated','wan'),
 x(r.ROUTE_SUNO_INDEX,'/suno','music','authenticated','suno'), x(r.ROUTE_PRODUCER_INDEX,'/producer','music','authenticated','producer'),
 x(r.ROUTE_FISH_TTS_INDEX,'/fish/tts','voice','authenticated','fish'), x(r.ROUTE_FISH_MODEL_INDEX,'/fish/model','voice','authenticated','fish'),
 x(r.ROUTE_SERP_INDEX,'/serp','internet','authenticated','serp'), x(r.ROUTE_WEBEXTRATOR_INDEX,'/webextrator','internet','authenticated','webextrator'), x(r.ROUTE_CODING_BRIDGE_INDEX,'/coding-bridge','developers','developer','codingBridge'),
 x(r.ROUTE_ORDER_PUBLIC_PAY,'/orders/:id','account','public'), x(r.ROUTE_CONSOLE_ROOT,'/console','developers','developer'),
 x(r.ROUTE_CONSOLE_ORDER_LIST,'/console/orders','account','authenticated'), x(r.ROUTE_CONSOLE_ORDER_DETAIL,'/console/orders/:id','account','authenticated'),
 x(r.ROUTE_CONSOLE_APPLICATION_LIST,'/console/applications','developers','developer'), x(r.ROUTE_CONSOLE_APPLICATION_EXTRA,'/console/applications/:id/extra','developers','developer'),
 x(r.ROUTE_CONSOLE_APPLICATION_SUBSCRIBE,'/console/applications/:id/subscribe','developers','developer'), x(r.ROUTE_CONSOLE_USAGE_LIST,'/console/usages','developers','developer'),
 x(r.ROUTE_CONSOLE_CONNECTORS,'/console/connectors','developers','developer'), x(r.ROUTE_CONSOLE_SKILLS,'/console/skills','developers','developer'),
 x(r.ROUTE_DISTRIBUTION_INDEX,'/distribution','account','authenticated'), x(r.ROUTE_DISTRIBUTION_HISTORY,'/distribution/history','account','authenticated'), x(r.ROUTE_DISTRIBUTION_INVITEES,'/distribution/invitees','account','authenticated'),
 x(r.ROUTE_NOT_FOUND,'/:pathMatch(.*)*',undefined,'public')
] as const satisfies readonly LegacyRouteContractEntry[];
export const LEGACY_UNNAMED_PATH_CONTRACT = ['/'] as const;
