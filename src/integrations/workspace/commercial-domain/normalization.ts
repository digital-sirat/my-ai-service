import type { WorkspaceBillingContract, WorkspaceInvoiceContract, WorkspaceOrderContract, WorkspaceSubscriptionContract, WorkspaceTokenBalanceContract, WorkspaceTransactionContract, WorkspaceWalletContract } from '../contracts';
export interface MonetaryAmountReadModel { readonly amountMinor: string; readonly currency: string; }
export interface TokenBalanceReadModel { readonly available: string; readonly reserved: string; }
export interface BillingAccountReadModel { readonly accountReference: string; readonly status: WorkspaceBillingContract['status']; }
export interface OrderReadModel { readonly reference: string; readonly total: MonetaryAmountReadModel; readonly status: WorkspaceOrderContract['status']; }
export interface TransactionReadModel { readonly reference: string; readonly amount: MonetaryAmountReadModel; readonly direction: WorkspaceTransactionContract['direction']; readonly occurredAt: string; }
export interface InvoiceReadModel { readonly reference: string; readonly total: MonetaryAmountReadModel; readonly status: WorkspaceInvoiceContract['status']; readonly issuedAt: string; }
export interface SubscriptionReadModel { readonly reference: string; readonly status: WorkspaceSubscriptionContract['status']; readonly renewsAt: string | null; }
const normalizeAmount = (model: MonetaryAmountReadModel) => Object.freeze({ amountMinor: model.amountMinor, currency: model.currency });
export const normalizeTokenBalance = (model: TokenBalanceReadModel): WorkspaceTokenBalanceContract => Object.freeze({ available: model.available, reserved: model.reserved, unit: 'token' });
export const normalizeBillingAccount = (model: BillingAccountReadModel): WorkspaceBillingContract => Object.freeze({ accountReference: model.accountReference, status: model.status });
export const normalizeOrder = (model: OrderReadModel): WorkspaceOrderContract => Object.freeze({ reference: model.reference, total: normalizeAmount(model.total), status: model.status });
export const normalizeTransaction = (model: TransactionReadModel): WorkspaceTransactionContract => Object.freeze({ reference: model.reference, amount: normalizeAmount(model.amount), direction: model.direction, occurredAt: model.occurredAt });
export const normalizeInvoice = (model: InvoiceReadModel): WorkspaceInvoiceContract => Object.freeze({ reference: model.reference, total: normalizeAmount(model.total), status: model.status, issuedAt: model.issuedAt });
export const normalizeSubscription = (model: SubscriptionReadModel): WorkspaceSubscriptionContract => Object.freeze({ reference: model.reference, status: model.status, renewsAt: model.renewsAt });
export const normalizeWallet = (reference: string, balance: TokenBalanceReadModel): WorkspaceWalletContract => Object.freeze({ reference, tokenBalance: normalizeTokenBalance(balance) });
