import type { WorkspaceCommercialCapabilities } from './projection';
export type WorkspaceAccountIdentifier = string;
export type WorkspaceAccountStatus = 'active' | 'restricted' | 'suspended' | 'closed';
export interface WorkspaceAccountProfile { readonly displayName: string; readonly locale: string; readonly country: string; readonly timeZone: string; }
export interface WorkspaceAccountLimits { readonly tokenLimit: string | null; readonly reservationLimit: string; }
export interface WorkspaceAccountCapabilities extends WorkspaceCommercialCapabilities { readonly tokenReservationsAvailable: boolean; readonly tokenLedgerAvailable: boolean; }
export interface WorkspaceAccountContract { readonly identifier: WorkspaceAccountIdentifier; readonly status: WorkspaceAccountStatus; readonly profile: WorkspaceAccountProfile; readonly limits: WorkspaceAccountLimits; }
export interface WorkspaceTokenBalance { readonly available: string; readonly reserved: string; readonly unit: 'token'; }
export type WorkspaceTokenLedgerReference = string;
export type WorkspaceTokenLedgerType = 'credit' | 'consumption' | 'reservation' | 'release' | 'adjustment';
export interface WorkspaceTokenReservation { readonly reference: WorkspaceTokenLedgerReference; readonly amount: string; readonly expiresAt: string | null; }
export interface WorkspaceTokenConsumption { readonly reference: WorkspaceTokenLedgerReference; readonly amount: string; readonly occurredAt: string; }
export interface WorkspaceTokenStatistics { readonly credited: string; readonly consumed: string; readonly reserved: string; readonly released: string; }
export interface WorkspaceTokenLedgerEntry { readonly reference: WorkspaceTokenLedgerReference; readonly type: WorkspaceTokenLedgerType; readonly amount: string; readonly occurredAt: string; readonly businessReference: string | null; }
export interface WorkspaceTokenLedgerSummary { readonly openingBalance: string; readonly credits: string; readonly consumptions: string; readonly reservations: string; readonly releases: string; readonly adjustments: string; readonly closingBalance: string; readonly entryCount: string; }
export interface WorkspaceTokenLedger { readonly entries: readonly WorkspaceTokenLedgerEntry[]; readonly summary: WorkspaceTokenLedgerSummary; }
export interface WorkspaceAccountSummary { readonly account: WorkspaceAccountContract; readonly tokenBalance: WorkspaceTokenBalance; readonly ledgerSummary: WorkspaceTokenLedgerSummary; readonly capabilities: WorkspaceAccountCapabilities; }
