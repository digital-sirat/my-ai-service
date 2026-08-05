import { adaptLegacyModels,legacyChatModelSource,legacyConfigModelSource,type LegacyModelSource } from './legacyAdapter';
import { createModelRegistry } from './registry';
export const createLegacyModelRegistry=(additionalSources:readonly LegacyModelSource[]=[])=>createModelRegistry(adaptLegacyModels([legacyChatModelSource,legacyConfigModelSource,...additionalSources]));
/** Infrastructure-only snapshot. Existing pages and stores intentionally do not consume it in P1. */
export const modelRegistry=createLegacyModelRegistry();
export * from './legacyAdapter';export * from './mappings';export * from './registry';export * from './types';
