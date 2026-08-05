import type { IChatModelGroup } from '@/models';
import type { UnifiedModelCatalog } from '@/modelCatalog';
import type { ModelCardContract } from '@/modelCatalog';

export interface CatalogChatModel {
  legacy: IChatModelGroup['models'][number];
  catalog?: ModelCardContract;
}

export interface CatalogChatGroup {
  legacy: IChatModelGroup;
  models: readonly CatalogChatModel[];
}

/** The legacy group remains the source of values, ordering and selection. */
export const adaptChatModelGroups = (
  groups: readonly IChatModelGroup[],
  enabled: boolean,
  catalog?: UnifiedModelCatalog
): readonly IChatModelGroup[] | readonly CatalogChatGroup[] => {
  if (!enabled || !catalog) return groups;
  return Object.freeze(
    groups.map((group) =>
      Object.freeze({
        legacy: group,
        models: Object.freeze(
          group.models.map((model) =>
            Object.freeze({ legacy: model, catalog: catalog.getById(model.name) })
          )
        )
      })
    )
  );
};
