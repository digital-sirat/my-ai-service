import type { CatalogUiSurface } from './types';

/** Read-only inventory of current model UI surfaces; no component imports. */
export const CATALOG_UI_SURFACES: readonly CatalogUiSurface[] = Object.freeze([
  { id: 'chat', kind: 'chat', component: 'components/chat/ModelSelector.vue', mode: 'legacy-selector-adapter', category: 'chat', storeNamespace: 'chat' },
  { id: 'fish-tts', kind: 'voice', component: 'components/fish/config/ModelSelector.vue', mode: 'legacy-selector-adapter', category: 'voice', storeNamespace: 'fish' },
  ...['flux','midjourney','nanobanana','openaiimage','seedream'].map((id) => ({ id, kind: 'image' as const, component: `components/${id}/config/ModelSelector.vue`, mode: 'legacy-selector-adapter' as const, category: 'images' as const, storeNamespace: id })),
  ...['grokvideo','hailuo','kling','pika','pixverse','seedance','sora','veo','wan'].map((id) => ({ id, kind: 'video' as const, component: `components/${id}/config/ModelSelector.vue`, mode: 'legacy-selector-adapter' as const, category: 'video' as const, storeNamespace: id })),
  { id: 'kling-motion', kind: 'video', component: 'components/kling/motion/MotionModelSelector.vue', mode: 'legacy-selector-adapter', category: 'video', storeNamespace: 'kling' },
  { id: 'kling-talking-photo', kind: 'video', component: 'components/kling/talking-photo/ModelSelector.vue', mode: 'legacy-selector-adapter', category: 'video', storeNamespace: 'kling' },
  { id: 'pika-ingredients', kind: 'video', component: 'components/pika/config/IngredientsModelSelector.vue', mode: 'legacy-selector-adapter', category: 'video', storeNamespace: 'pika' },
  { id: 'music-suno', kind: 'music', component: 'components/suno/ConfigPanel.vue', mode: 'catalog-readonly', category: 'music', storeNamespace: 'suno' },
  { id: 'music-producer', kind: 'music', component: 'components/producer/ConfigPanel.vue', mode: 'catalog-readonly', category: 'music', storeNamespace: 'producer' },
  { id: 'documents', kind: 'document', component: 'components/chat/Composer.vue', mode: 'not-applicable', capabilities: ['file-input'], storeNamespace: 'chat' },
  { id: 'internet-chat', kind: 'internet', component: 'components/chat/Composer.vue', mode: 'catalog-readonly', capabilities: ['web-search','deep-search'], storeNamespace: 'chat' },
  { id: 'internet-serp', kind: 'internet', component: 'components/serp/SearchPanel.vue', mode: 'not-applicable', storeNamespace: 'serp' },
  { id: 'internet-extractor', kind: 'internet', component: 'components/webextrator/ConfigPanel.vue', mode: 'not-applicable', storeNamespace: 'webextrator' }
]);
