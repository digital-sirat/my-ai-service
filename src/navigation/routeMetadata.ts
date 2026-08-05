import type { ProductSection, ProductSectionAccess } from './productSections';
export interface ProductRouteMetadata {
  productSection?: ProductSection;
  productAccess?: ProductSectionAccess;
  legacyCapability?: string;
  legacyRoute?: boolean;
  navigationV2Eligible?: boolean;
}
declare module 'vue-router' { interface RouteMeta extends ProductRouteMetadata {} }
