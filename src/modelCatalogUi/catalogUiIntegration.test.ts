import { describe, expect, it, vi } from 'vitest';
import { createUnifiedModelCatalog } from '@/modelCatalog';
import { modelRegistry } from '@/modelRegistry';
import { adaptChatModelGroups } from './chatSelectorAdapter';
import { adaptLegacySelectorOptions } from './legacySelectorAdapter';
import { createCatalogUiProvider } from './provider';
import { CATALOG_UI_SURFACES } from './surfaces';

const catalog = createUnifiedModelCatalog(modelRegistry);

describe('P4 catalog UI integration', () => {
  it('does not load P3 while the flag is disabled', async () => {
    const loadCatalog = vi.fn();
    const provider = createCatalogUiProvider({ isEnabled: () => false, loadCatalog });
    expect(await provider.load()).toBeNull();
    expect(loadCatalog).not.toHaveBeenCalled();
  });

  it('returns legacy selector options by reference while disabled', () => {
    const options = [{ value: 'gpt-image-2', label: 'GPT Image 2' }] as const;
    expect(adaptLegacySelectorOptions(options, { enabled: false, catalog })).toBe(options);
  });

  it('preserves value label order and disabled state when enriching metadata', () => {
    const options = [
      { value: 'gpt-image-2', label: 'GPT Image 2', disabled: true },
      { value: 'gpt-image-1.5', label: 'GPT Image 1.5' }
    ] as const;
    const adapted = adaptLegacySelectorOptions(options, { enabled: true, catalog });
    expect(adapted.map(({ value, label, disabled }) => ({ value, label, disabled }))).toEqual(options);
    expect(adapted[0].catalog?.legacyId).toBe('gpt-image-2');
    expect(Object.isFrozen(adapted)).toBe(true);
  });

  it('keeps chat groups untouched while disabled', () => {
    const groups = [{ name: 'test', models: [{ name: 'gpt-5.6-sol', enabled: true }] }] as never;
    expect(adaptChatModelGroups(groups, false, catalog)).toBe(groups);
  });

  it('keeps the integration inventory read-only and store/router free', () => {
    expect(Object.isFrozen(CATALOG_UI_SURFACES)).toBe(true);
    expect(CATALOG_UI_SURFACES.some((surface) => surface.kind === 'chat')).toBe(true);
    expect(CATALOG_UI_SURFACES.some((surface) => surface.kind === 'document')).toBe(true);
    expect(CATALOG_UI_SURFACES.some((surface) => surface.kind === 'internet')).toBe(true);
  });
});
