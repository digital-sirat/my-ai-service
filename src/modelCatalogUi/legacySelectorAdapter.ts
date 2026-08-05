import type { UnifiedModelCatalog } from '@/modelCatalog';
import type { CatalogSelectorOption, LegacySelectorOption } from './types';

export interface LegacySelectorAdapterOptions<Value> {
  enabled: boolean;
  catalog?: UnifiedModelCatalog;
  resolveModelId?: (option: LegacySelectorOption<Value>) => string;
}

/**
 * Preserves the legacy option contract. When disabled it returns the original
 * array by reference. When enabled it only adds read-only catalog metadata.
 */
export const adaptLegacySelectorOptions = <Value>(
  options: readonly LegacySelectorOption<Value>[],
  config: LegacySelectorAdapterOptions<Value>
): readonly CatalogSelectorOption<Value>[] => {
  if (!config.enabled || !config.catalog) return options;
  const resolve = config.resolveModelId ?? ((option) => String(option.value));
  return Object.freeze(
    options.map((option) =>
      Object.freeze({
        ...option,
        catalog: config.catalog?.getById(resolve(option))
      })
    )
  );
};
