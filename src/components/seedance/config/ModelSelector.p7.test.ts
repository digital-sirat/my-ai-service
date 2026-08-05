import { describe, expect, it, vi } from 'vitest';
import { adaptLegacySelectorOptions, createCatalogUiProvider } from '@/modelCatalogUi';
import { createUnifiedModelCatalog } from '@/modelCatalog';
import { modelRegistry } from '@/modelRegistry';
import {
  SEEDANCE_DEFAULT_MODEL,
  SEEDANCE_MODEL_1_0_LITE_I2V,
  SEEDANCE_MODEL_1_0_LITE_T2V,
  SEEDANCE_MODEL_1_0_PRO,
  SEEDANCE_MODEL_1_0_PRO_FAST,
  SEEDANCE_MODEL_1_5_PRO,
  SEEDANCE_MODEL_2_0,
  SEEDANCE_MODEL_2_0_FAST,
  SEEDANCE_MODEL_2_0_MINI
} from '@/constants';
const options = Object.freeze([
  { value: SEEDANCE_MODEL_2_0, label: 'Seedance 2.0' },
  { value: SEEDANCE_MODEL_2_0_FAST, label: 'Seedance 2.0 Fast' },
  { value: SEEDANCE_MODEL_2_0_MINI, label: 'Seedance 2.0 Mini' },
  { value: SEEDANCE_MODEL_1_5_PRO, label: 'Seedance 1.5 Pro' },
  { value: SEEDANCE_MODEL_1_0_PRO, label: 'Seedance 1.0 Pro' },
  { value: SEEDANCE_MODEL_1_0_PRO_FAST, label: 'Seedance 1.0 Pro Fast' },
  { value: SEEDANCE_MODEL_1_0_LITE_T2V, label: 'Seedance 1.0 Lite T2V' },
  { value: SEEDANCE_MODEL_1_0_LITE_I2V, label: 'Seedance 1.0 Lite I2V' }
]);
describe('P7 Seedance selector', () => {
  it('preserves exact options identity and skips catalog loading when disabled', async () => {
    const loadCatalog = vi.fn();
    const provider = createCatalogUiProvider({ isEnabled: () => false, loadCatalog });
    expect(adaptLegacySelectorOptions(options, { enabled: provider.isEnabled() })).toBe(options);
    expect(await provider.load()).toBeNull();
    expect(loadCatalog).not.toHaveBeenCalled();
  });
  it('only enriches read-only catalog metadata when enabled', () => {
    const adapted = adaptLegacySelectorOptions(options, { enabled: true, catalog: createUnifiedModelCatalog(modelRegistry) });
    expect(adapted.map(({ value, label }) => ({ value, label }))).toEqual(options);
    expect(adapted.some((option) => option.catalog?.legacyId === SEEDANCE_DEFAULT_MODEL)).toBe(true);
    expect(adapted.every((option) => !('commit' in option) && !('onSelect' in option))).toBe(true);
  });
});
