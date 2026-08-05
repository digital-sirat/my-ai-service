import type { WorkspaceCalculatedCost, WorkspacePricingCurrency } from './pricing';
import { validateBillableAmount, validateUsageQuantity } from './pricingValidation';
export type WorkspaceCostCalculationResult = Readonly<{ readonly valid: true; readonly value: WorkspaceCalculatedCost }> | Readonly<{ readonly valid: false; readonly code: 'invalid-quantity' | 'invalid-unit-price' }>;
export const calculateUsageCost = (quantity: string, unitPriceMinor: string, currency: WorkspacePricingCurrency): WorkspaceCostCalculationResult => {
  if (!validateUsageQuantity(quantity).valid) return Object.freeze({ valid: false, code: 'invalid-quantity' });
  if (!validateBillableAmount(unitPriceMinor).valid) return Object.freeze({ valid: false, code: 'invalid-unit-price' });
  return Object.freeze({ valid: true, value: Object.freeze({ amountMinor: (BigInt(quantity) * BigInt(unitPriceMinor)).toString(), currency }) });
};
