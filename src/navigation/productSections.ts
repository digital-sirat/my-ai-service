/** Stable, provider-agnostic product taxonomy for the product foundation. */
export const PRODUCT_SECTIONS = [
  'home', 'chat', 'images', 'video', 'music', 'voice', 'documents',
  'internet', 'models', 'library', 'account', 'developers', 'admin'
] as const;
export type ProductSection = (typeof PRODUCT_SECTIONS)[number];
export const PRODUCT_SECTION_GROUPS = ['primary', 'create', 'discover', 'account', 'system'] as const;
export type ProductSectionGroup = (typeof PRODUCT_SECTION_GROUPS)[number];
export const PRODUCT_SECTION_ACCESS = ['public', 'authenticated', 'developer', 'admin'] as const;
export type ProductSectionAccess = (typeof PRODUCT_SECTION_ACCESS)[number];
