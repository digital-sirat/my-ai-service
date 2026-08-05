<template>
  <div class="field">
    <h2 class="title font-bold">{{ $t('flux.name.model') }}</h2>
    <el-select v-model="value" class="value" :placeholder="$t('flux.placeholder.select')">
      <el-option v-for="item in displayOptions" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ElSelect, ElOption } from 'element-plus';
import { FLUX_DEFAULT_MODEL } from '@/constants';
import { adaptLegacySelectorOptions, catalogUiProvider } from '@/modelCatalogUi';
import type { CatalogUiContext } from '@/modelCatalogUi';

export default defineComponent({
  name: 'ModelSelector',
  components: {
    ElSelect,
    ElOption
  },
  props: {
    modelValue: {
      type: String,
      default: undefined
    }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      catalog: undefined as CatalogUiContext['catalog'] | undefined,
      options: [
        {
          value: 'flux-dev',
          label: 'flux-dev'
        },
        {
          value: 'flux-pro',
          label: 'flux-pro'
        },
        {
          value: 'flux-kontext-pro',
          label: 'flux-kontext-pro'
        },
        {
          value: 'flux-kontext-max',
          label: 'flux-kontext-max'
        },
        {
          value: 'flux-2-flex',
          label: 'flux-2-flex'
        },
        {
          value: 'flux-2-pro',
          label: 'flux-2-pro'
        },
        {
          value: 'flux-2-max',
          label: 'flux-2-max'
        }
      ]
    };
  },
  computed: {
    displayOptions() {
      return adaptLegacySelectorOptions(this.options, { enabled: catalogUiProvider.isEnabled(), catalog: this.catalog });
    },
    value: {
      get() {
        return this.$store.state.flux?.config?.model;
      },
      set(val: string) {
        this.$store.commit('flux/setConfig', {
          ...this.$store.state.flux.config,
          model: val
        });
      }
    }
  },
  mounted() {
    if (!this.value) {
      this.value = FLUX_DEFAULT_MODEL;
    }
    if (catalogUiProvider.isEnabled()) {
      void catalogUiProvider.load().then((context) => {
        if (context) this.catalog = context.catalog;
      });
    }
  }
});
</script>

<style lang="scss" scoped>
.field {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .title {
    font-size: 14px;
    margin: 0;
    width: 30%;
  }

  .value {
    width: 160px;
  }
}
</style>
