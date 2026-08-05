import type { RouteRecordRaw } from 'vue-router';
import type { ProductRouteMetadata } from './routeMetadata';
import { LEGACY_ROUTE_CONTRACT } from './routeContract';
export const LEGACY_ROUTE_METADATA = Object.freeze(Object.fromEntries(LEGACY_ROUTE_CONTRACT.map(entry => [entry.name, {
  productSection: entry.section, productAccess: entry.access, legacyCapability: entry.capability,
  legacyRoute: true, navigationV2Eligible: Boolean(entry.section)
} satisfies ProductRouteMetadata])) as Readonly<Record<string, ProductRouteMetadata>>);
/** Decorates existing records without changing names, paths, components, redirects or current metadata. */
export function applyLegacyRouteMetadata(records: readonly RouteRecordRaw[]): void {
  for (const record of records) {
    const name = typeof record.name === 'string' ? record.name : undefined;
    const metadata = name ? LEGACY_ROUTE_METADATA[name] : undefined;
    if (metadata) record.meta = { ...record.meta, ...metadata };
    if (record.children) applyLegacyRouteMetadata(record.children);
  }
}
