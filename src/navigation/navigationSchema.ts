import type { ProductSection, ProductSectionAccess, ProductSectionGroup } from './productSections';

/** Presentation-neutral contract for the future Navigation V2. P0 does not render it. */
export interface NavigationSchemaItem {
  id: ProductSection;
  /** Reserved canonical destination. P0 does not register this path. */
  path: string;
  labelKey: string;
  iconKey: ProductSection;
  group: ProductSectionGroup;
  access: ProductSectionAccess;
  order: number;
}
export const NAVIGATION_SCHEMA = [
  { id: 'home', path: '/', labelKey: 'navigation.home', iconKey: 'home', group: 'primary', access: 'public', order: 10 },
  { id: 'chat', path: '/chat', labelKey: 'navigation.chat', iconKey: 'chat', group: 'create', access: 'public', order: 20 },
  { id: 'images', path: '/images', labelKey: 'navigation.images', iconKey: 'images', group: 'create', access: 'public', order: 30 },
  { id: 'video', path: '/video', labelKey: 'navigation.video', iconKey: 'video', group: 'create', access: 'public', order: 40 },
  { id: 'music', path: '/music', labelKey: 'navigation.music', iconKey: 'music', group: 'create', access: 'public', order: 50 },
  { id: 'voice', path: '/voice', labelKey: 'navigation.voice', iconKey: 'voice', group: 'create', access: 'public', order: 60 },
  { id: 'documents', path: '/documents', labelKey: 'navigation.documents', iconKey: 'documents', group: 'create', access: 'public', order: 70 },
  { id: 'internet', path: '/internet', labelKey: 'navigation.internet', iconKey: 'internet', group: 'create', access: 'public', order: 80 },
  { id: 'models', path: '/models', labelKey: 'navigation.models', iconKey: 'models', group: 'discover', access: 'public', order: 90 },
  { id: 'library', path: '/library', labelKey: 'navigation.library', iconKey: 'library', group: 'discover', access: 'authenticated', order: 100 },
  { id: 'account', path: '/account', labelKey: 'navigation.account', iconKey: 'account', group: 'account', access: 'authenticated', order: 110 },
  { id: 'developers', path: '/developers', labelKey: 'navigation.developers', iconKey: 'developers', group: 'account', access: 'developer', order: 120 },
  { id: 'admin', path: '/admin', labelKey: 'navigation.admin', iconKey: 'admin', group: 'system', access: 'admin', order: 130 }
] as const satisfies readonly NavigationSchemaItem[];
