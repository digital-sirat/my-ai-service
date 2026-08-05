import type { RouteRecordRaw } from 'vue-router';
import { isWorkspaceIntegrationEnabled, WORKSPACE_ROUTE_PATH } from '@/integrations/workspace';
const workspaceRoute: RouteRecordRaw = { path: WORKSPACE_ROUTE_PATH, component: () => import('@/layouts/Main.vue'), beforeEnter: () => isWorkspaceIntegrationEnabled() || '/', meta: { auth: false, skipApplicationBootstrap: true }, children: [{ path: '', component: () => import('@/integrations/workspace/WorkspacePage.vue') }] };
export default workspaceRoute;
