import type {
  WorkspaceModality,
  WorkspaceSectionDefinition,
  WorkspaceSectionId,
  WorkspaceSectionVisibility
} from './types';

const EMPTY_CHILDREN: readonly WorkspaceSectionDefinition[] = Object.freeze([]);

const section = (
  id: WorkspaceSectionId,
  title: string,
  visibility: WorkspaceSectionVisibility,
  description: string,
  futureCapability: readonly string[]
): WorkspaceSectionDefinition => Object.freeze({
  id,
  title,
  iconPlaceholder: `workspace-${id}`,
  children: EMPTY_CHILDREN,
  visibility,
  futureCapability: Object.freeze([...futureCapability]),
  routePlaceholder: null,
  description
});

export const WORKSPACE_INFORMATION_ARCHITECTURE: readonly WorkspaceSectionDefinition[] = Object.freeze([
  section('text', 'Text AI', 'primary', 'Text conversations and language model workflows.', [
    'ChatGPT', 'Claude', 'Gemini', 'Grok', 'DeepSeek', 'Kimi', 'Qwen',
    'OpenAI Compatible', 'BYOK', 'Future text models'
  ]),
  section('image', 'Image AI', 'primary', 'Image generation and visual creation workflows.', [
    'Flux', 'Midjourney', 'Nano Banana', 'OpenAI Image', 'Seedream', 'QR Art',
    'Future image models'
  ]),
  section('video', 'Video AI', 'primary', 'Video generation and digital human workflows.', [
    'Kling', 'Veo', 'Sora', 'Seedance', 'Luma', 'Pika', 'PixVerse', 'Wan',
    'Hailuo', 'Maestro', 'Digital Human', 'Omni', 'Future video models'
  ]),
  section('audio', 'Audio AI', 'primary', 'Voice, speech, audio, and music workflows.', [
    'Fish', 'Suno', 'Producer', 'TTS', 'Voice', 'Music', 'Speech',
    'Future audio models'
  ]),
  section('tools', 'AI Tools', 'primary', 'AI utilities and developer-oriented workflows.', [
    'SERP', 'Web Extractor', 'Coding Bridge', 'MCP', 'Plugins', 'Agents',
    'Automation', 'Developer Tools', 'API Tools', 'Console', 'Future services'
  ]),
  section('gallery', 'Gallery', 'future', 'Future gallery for generated and curated AI content.', [
    'Images', 'Video', 'Music', 'Audio', 'Text', 'Code', '3D', 'Other AI content'
  ]),
  section('community', 'Community', 'future', 'Future social and creator community space.', [
    'Likes', 'Comments', 'Follows', 'Public profiles', 'Collections', 'Authors'
  ]),
  section('learning', 'Learning Center', 'future', 'Future learning and education center.', []),
  section('blog', 'AI Blog', 'future', 'Future editorial and educational AI content.', [
    'News', 'Model analysis', 'Reviews', 'Guides', 'Learning', 'Case studies', 'AI articles'
  ]),
  section('projects', 'Projects', 'future', 'Future user project organization space.', []),
  section('marketplace', 'Marketplace', 'future', 'Future marketplace for AI resources and services.', []),
  section('files', 'Files', 'future', 'Future user file management space.', []),
  section('assets', 'Assets', 'future', 'Future reusable asset library.', []),
  section('search', 'Search', 'future', 'Future global workspace search.', []),
  section('history', 'History', 'future', 'Future activity and generation history.', []),
  section('favorites', 'Favorites', 'future', 'Future saved content and tools.', []),
  section('notifications', 'Notifications', 'future', 'Future notification center.', []),
  section('settings', 'Settings', 'future', 'Future workspace and account settings.', []),
  section('billing', 'Billing', 'future', 'Future billing and subscription management.', []),
  section('profile', 'Profile', 'future', 'Future personal and public profile space.', [])
]);

export const WORKSPACE_MODALITIES: readonly WorkspaceModality[] = Object.freeze([
  'text', 'image', 'video', 'audio', 'tools'
]);

export const WORKSPACE_SECTION_IDS: readonly WorkspaceSectionId[] = Object.freeze(
  WORKSPACE_INFORMATION_ARCHITECTURE.map(({ id }) => id)
);
