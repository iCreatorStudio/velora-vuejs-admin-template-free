<script setup lang="ts">
import type { VerticalMenuItem } from '@/layouts/components/types'
import VerticalNavGroupItems from '@/layouts/components/vertical-nav/VerticalNavGroupItems.vue'

interface Props {
  navItem: VerticalMenuItem & { children?: VerticalMenuItem[] }
}

const props = defineProps<Props>()
</script>

<template>
  <VListGroup
    v-if="props.navItem"
    :value="props.navItem.name"
  >
    <template #activator="{ props: activatorProps }">
      <VListItem
        v-bind="activatorProps"
        :prepend-icon="props.navItem.icon"
        :title="props.navItem.name"
      >
        <template #append>
          <VIcon
            class="navigation-group-handler scale-rtl me-n2"
            icon="bx-chevron-right"
          />
        </template>
      </VListItem>
    </template>

    <VerticalNavGroupItems :nav-item="props.navItem" />
  </VListGroup>
</template>
