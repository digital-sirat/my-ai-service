export type WorkspacePlanIdentifier = string;
export type WorkspaceProductIdentifier = string;
export type WorkspaceFeatureIdentifier = string;
export type WorkspaceEntitlementIdentifier = string;
export type WorkspacePlanStatus = 'active' | 'inactive' | 'expired';
export type WorkspacePlanTier = 'free' | 'standard' | 'professional' | 'enterprise';
export type WorkspaceFeatureStatus = 'enabled' | 'disabled';
export type WorkspaceEntitlementType = 'feature' | 'quota' | 'region';
export interface WorkspacePlanContract { readonly identifier: WorkspacePlanIdentifier; readonly productIdentifier: WorkspaceProductIdentifier; readonly status: WorkspacePlanStatus; readonly tier: WorkspacePlanTier; readonly expiresAt: string | null; }
export interface WorkspaceFeatureContract { readonly identifier: WorkspaceFeatureIdentifier; readonly status: WorkspaceFeatureStatus; }
export interface WorkspaceEntitlementLimit { readonly amount: string; readonly period: 'request' | 'daily' | 'monthly' | 'annual' | 'lifetime'; }
export interface WorkspaceEntitlement { readonly identifier: WorkspaceEntitlementIdentifier; readonly featureIdentifier: WorkspaceFeatureIdentifier; readonly type: WorkspaceEntitlementType; readonly enabled: boolean; readonly limit: WorkspaceEntitlementLimit | null; readonly regions: readonly string[]; }
export interface WorkspaceEntitlementSet { readonly items: readonly WorkspaceEntitlement[]; }
export type WorkspaceFeatureAccessStatus = 'allowed' | 'denied';
export type WorkspaceFeatureDenialReason = 'feature-disabled' | 'plan-not-entitled' | 'quota-exceeded' | 'plan-expired' | 'region-not-supported';
export interface WorkspaceFeatureAccessRequest { readonly featureIdentifier: WorkspaceFeatureIdentifier; readonly currentTime: string; readonly region: string; readonly usage: string; }
export type WorkspaceFeatureAccessDecision = Readonly<{ readonly status: 'allowed'; readonly reason: null }> | Readonly<{ readonly status: 'denied'; readonly reason: WorkspaceFeatureDenialReason }>;
export interface WorkspaceFeatureAccessCapability { readonly featureIdentifier: WorkspaceFeatureIdentifier; readonly available: boolean; }
export interface WorkspacePlanSnapshot { readonly schemaVersion: 1; readonly plan: WorkspacePlanContract; readonly features: readonly WorkspaceFeatureContract[]; readonly entitlements: WorkspaceEntitlementSet; readonly accessCapabilities: readonly WorkspaceFeatureAccessCapability[]; }
