export type WorkspaceCommercialReference = string;
export type WorkspaceAmountMinor = string;
export type WorkspaceCurrencyCode = string;
export type WorkspaceLocaleCode = string;
export type WorkspaceCountryCode = string;
export type WorkspaceTimeZone = string;
export interface WorkspaceMonetaryAmount { readonly amountMinor: WorkspaceAmountMinor; readonly currency: WorkspaceCurrencyCode; }
export interface WorkspaceTokenBalanceContract { readonly available: string; readonly reserved: string; readonly unit: 'token'; }
export interface WorkspaceBillingContract { readonly accountReference: WorkspaceCommercialReference; readonly status: 'active' | 'restricted' | 'closed'; }
export interface WorkspacePaymentContract { readonly reference: WorkspaceCommercialReference; readonly amount: WorkspaceMonetaryAmount; readonly status: 'pending' | 'completed' | 'failed' | 'cancelled'; }
export interface WorkspaceOrderContract { readonly reference: WorkspaceCommercialReference; readonly total: WorkspaceMonetaryAmount; readonly status: 'draft' | 'pending' | 'completed' | 'cancelled'; }
export interface WorkspaceTransactionContract { readonly reference: WorkspaceCommercialReference; readonly amount: WorkspaceMonetaryAmount; readonly direction: 'credit' | 'debit'; readonly occurredAt: string; }
export interface WorkspaceInvoiceContract { readonly reference: WorkspaceCommercialReference; readonly total: WorkspaceMonetaryAmount; readonly status: 'open' | 'paid' | 'void'; readonly issuedAt: string; }
export interface WorkspaceSubscriptionContract { readonly reference: WorkspaceCommercialReference; readonly status: 'active' | 'paused' | 'cancelled'; readonly renewsAt: string | null; }
export interface WorkspacePurchaseHistoryContract { readonly orders: readonly WorkspaceOrderContract[]; readonly transactions: readonly WorkspaceTransactionContract[]; }
export interface WorkspaceWalletContract { readonly reference: WorkspaceCommercialReference; readonly tokenBalance: WorkspaceTokenBalanceContract; }
export interface WorkspaceRegionContract { readonly country: WorkspaceCountryCode; readonly locale: WorkspaceLocaleCode; readonly currency: WorkspaceCurrencyCode; readonly timeZone: WorkspaceTimeZone; }
export interface WorkspaceLanguageContract { readonly locale: WorkspaceLocaleCode; readonly fallbackLocale: WorkspaceLocaleCode | null; }
export interface WorkspacePaymentAvailabilityContract { readonly country: WorkspaceCountryCode; readonly currency: WorkspaceCurrencyCode; readonly available: boolean; }
export interface WorkspaceInternationalReadinessContract { readonly region: WorkspaceRegionContract; readonly language: WorkspaceLanguageContract; readonly paymentAvailability: readonly WorkspacePaymentAvailabilityContract[]; }
