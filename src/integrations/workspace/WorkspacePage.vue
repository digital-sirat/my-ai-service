<template>
  <component :is="foundation.shell" v-if="foundation">
    <template #header><component :is="foundation.header" /></template>
    <template #left-sidebar><component :is="foundation.leftSidebar" /></template>
    <component :is="foundation.mainArea"><component :is="foundation.routerView" /><component :is="foundation.hosts.composer" /></component>
    <template #right-sidebar><component :is="foundation.rightSidebar" /></template>
    <template #notifications><component :is="foundation.notificationLayer" /></template>
    <template #modals><component :is="foundation.modalLayer" /></template>
    <template #overlays><component :is="foundation.overlayLayer" /></template>
  </component>
  <section v-else class="workspace-integration-unavailable" aria-label="Unified AI Workspace" />
</template>
<script setup lang="ts">
import { onBeforeMount, shallowRef } from 'vue';
import type { WorkspaceFoundation } from '@/workspace';
import { loadWorkspaceFoundation } from './index';
const foundation = shallowRef<WorkspaceFoundation | null>(null);
onBeforeMount(async () => { foundation.value = await loadWorkspaceFoundation(); });
</script>
<style scoped>.workspace-integration-unavailable{width:100%;height:100%}</style>
