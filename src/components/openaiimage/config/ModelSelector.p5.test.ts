import { describe, expect, it, vi } from 'vitest';
import { adaptLegacySelectorOptions, createCatalogUiProvider } from '@/modelCatalogUi';
import { createUnifiedModelCatalog } from '@/modelCatalog';
import { modelRegistry } from '@/modelRegistry';

const legacyOptions = Object.freeze([
  { value: 'gpt-image-1', label: 'GPT Image 1' },
  { value: 'gpt-image-1.5', label: 'GPT Image 1.5' },
  { value: 'gpt-image-2', label: 'GPT Image 2' },
  { value: 'gpt-image-2:official', label: 'GPT Image 2 Official' }
]);

describe('P5 OpenAI Image progressive migration', () => {
  it('keeps the exact legacy options and avoids loading P3 while disabled', async () => {
    const loadCatalog = vi.fn();
    const provider = createCatalogUiProvider({ isEnabled: () => false, loadCatalog });
    expect(await provider.load()).toBeNull();
    expect(loadCatalog).not.toHaveBeenCalled();
    expect(adaptLegacySelectorOptions(legacyOptions, { enabled: provider.isEnabled() })).toBe(legacyOptions);
  });

  it('preserves values labels and ordering while enabled', () => {
    const catalog = createUnifiedModelCatalog(modelRegistry);
    const adapted = adaptLegacySelectorOptions(legacyOptions, { enabled: true, catalog });
    expect(adapted.map(({ value, label }) => ({ value, label }))).toEqual(legacyOptions);
    expect(adapted[2].catalog?.legacyId).toBe('gpt-image-2');
  });

  it('does not introduce selection or write callbacks', () => {
    const catalog = createUnifiedModelCatalog(modelRegistry);
    const adapted = adaptLegacySelectorOptions(legacyOptions, { enabled: true, catalog });
    expect(adapted.every((option) => !('onSelect' in option) && !('commit' in option))).toBe(true);
  });
});
