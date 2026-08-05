export type WorkspacePricingIdentifier = string;
export type WorkspacePricingCurrency = string;
export type WorkspacePricingStatus = 'active' | 'inactive' | 'archived';
export type WorkspacePricingUnit = 'request' | 'token' | 'second' | 'image' | 'character' | 'megabyte';
export type WorkspaceBillableUnit = WorkspacePricingUnit;
export interface WorkspacePricingTier { readonly minimumQuantity: string; readonly maximumQuantity: string | null; readonly unitPriceMinor: string; }
export interface WorkspacePricingContract { readonly identifier: WorkspacePricingIdentifier; readonly status: WorkspacePricingStatus; readonly currency: WorkspacePricingCurrency; readonly unit: WorkspacePricingUnit; readonly tiers: readonly WorkspacePricingTier[]; }
export interface WorkspaceUsageQuantity { readonly value: string; readonly unit: WorkspaceBillableUnit; }
export interface WorkspaceUsageRecord { readonly reference: string; readonly quantity: WorkspaceUsageQuantity; readonly occurredAt: string; }
export interface WorkspaceUsageSummary { readonly totalQuantity: string; readonly billableQuantity: string; readonly unit: WorkspaceBillableUnit; readonly recordCount: string; }
export interface WorkspaceCalculatedCost { readonly amountMinor: string; readonly currency: WorkspacePricingCurrency; }
export interface WorkspaceCostBreakdown { readonly pricingIdentifier: WorkspacePricingIdentifier; readonly quantity: string; readonly unitPriceMinor: string; readonly cost: WorkspaceCalculatedCost; }
export interface WorkspaceCostSummary { readonly subtotal: WorkspaceCalculatedCost; readonly adjustments: WorkspaceCalculatedCost; readonly total: WorkspaceCalculatedCost; }
export type WorkspaceQuotaPeriod = 'daily' | 'monthly' | 'annual' | 'lifetime';
export interface WorkspaceQuota { readonly identifier: string; readonly limit: string; readonly unit: WorkspaceBillableUnit; readonly period: WorkspaceQuotaPeriod; }
export interface WorkspaceQuotaUsage { readonly consumed: string; readonly reserved: string; readonly remaining: string; }
export interface WorkspaceAllowance { readonly identifier: string; readonly amount: string; readonly unit: WorkspaceBillableUnit; }
export interface WorkspaceQuotaSummary { readonly quota: WorkspaceQuota; readonly usage: WorkspaceQuotaUsage; readonly allowances: readonly WorkspaceAllowance[]; }
export interface WorkspacePricingSnapshot { readonly pricing: WorkspacePricingContract; readonly usageSummary: WorkspaceUsageSummary; readonly costSummary: WorkspaceCostSummary; readonly quotaSummary: WorkspaceQuotaSummary; }
