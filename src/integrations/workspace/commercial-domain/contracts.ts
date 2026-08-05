import type { WorkspaceBillingContract, WorkspaceInvoiceContract, WorkspaceInternationalReadinessContract, WorkspaceOrderContract, WorkspacePaymentAvailabilityContract, WorkspacePurchaseHistoryContract, WorkspaceSubscriptionContract, WorkspaceTokenBalanceContract, WorkspaceTransactionContract, WorkspaceWalletContract } from '../contracts';
export interface WorkspaceProfileContract { readonly reference: string; readonly locale: string; readonly country: string; readonly timeZone: string; }
export interface TokenBalanceSource { readTokenBalance(): Promise<WorkspaceTokenBalanceContract | null>; }
export interface BillingAccountSource { readBillingAccount(): Promise<WorkspaceBillingContract | null>; }
export interface WorkspaceProfileSource { readWorkspaceProfile(): Promise<WorkspaceProfileContract | null>; }
export interface PurchaseHistorySource { readPurchaseHistory(): Promise<WorkspacePurchaseHistoryContract>; }
export interface OrderHistorySource { readOrders(): Promise<readonly WorkspaceOrderContract[]>; }
export interface TransactionHistorySource { readTransactions(): Promise<readonly WorkspaceTransactionContract[]>; }
export interface InvoiceSource { readInvoices(): Promise<readonly WorkspaceInvoiceContract[]>; }
export interface SubscriptionSource { readSubscription(): Promise<WorkspaceSubscriptionContract | null>; }
export interface WalletSource { readWallet(): Promise<WorkspaceWalletContract | null>; }
export interface PaymentAvailabilitySource { readPaymentAvailability(): Promise<readonly WorkspacePaymentAvailabilityContract[]>; }
export type WorkspacePaymentCategory = 'bank-card' | 'digital-wallet' | 'crypto-payment' | 'local-payment-method' | 'internal-balance';
export interface WorkspacePaymentCapabilityContract { readonly category: WorkspacePaymentCategory; readonly available: boolean; readonly currencies: readonly string[]; readonly regions: readonly string[]; }
export type WorkspaceTaxationModel = 'inclusive' | 'exclusive' | 'exempt' | 'not-applicable';
export type WorkspaceInvoiceFormat = 'structured' | 'document' | 'electronic';
export interface WorkspaceInternationalCommercialContract { readonly markets: readonly WorkspaceInternationalReadinessContract[]; readonly currencies: readonly string[]; readonly locales: readonly string[]; readonly paymentCapabilities: readonly WorkspacePaymentCapabilityContract[]; readonly taxationModels: readonly WorkspaceTaxationModel[]; readonly invoiceFormats: readonly WorkspaceInvoiceFormat[]; }
