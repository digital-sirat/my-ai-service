export const MODEL_CAPABILITIES = ['chat','text-generation','reasoning','web-search','deep-search','image-input','file-input','image-generation','image-editing','video-generation','music-generation','speech-generation'] as const;
export type ModelCapability = (typeof MODEL_CAPABILITIES)[number];
export const MODEL_CATEGORIES = ['chat','images','video','music','voice'] as const;
export type ModelCategory = (typeof MODEL_CATEGORIES)[number];
export type ModelProvider = string;
export interface ModelRegistryItem { id:string; legacyId:string; name:string; description?:string; provider:ModelProvider; category:ModelCategory; capabilities:readonly ModelCapability[]; enabled:boolean; isDefault:boolean; sortOrder:number; source:'legacy'; legacySource:string; legacyConfig?:unknown; }
export interface ModelRegistryFilter { capability?:ModelCapability; provider?:ModelProvider; category?:ModelCategory; enabled?:boolean; }
export interface ModelRegistrySort { by?:'sortOrder'|'name'|'provider'|'category'; direction?:'asc'|'desc'; }
