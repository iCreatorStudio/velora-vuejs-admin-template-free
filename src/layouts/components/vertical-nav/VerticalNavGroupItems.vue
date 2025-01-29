<script setup lang="ts">
import type { VerticalMenuItem } from '@/layouts/components/types'
import VerticalNavGroup from '@/layouts/components/vertical-nav/VerticalNavGroup.vue'
import VerticalNavLink from '@/layouts/components/vertical-nav/VerticalNavLink.vue'

interface Props {
  navItem: VerticalMenuItem
}

const props = defineProps<Props>()

const resolveNavLinkGroup = computed(() => {
  return (navItem: any) => (navItem.children ? VerticalNavGroup : VerticalNavLink)
})
</script>

<template>
  <template
    v-for="item in props.navItem.children"
    :key="item.name"
  >
    <Component
      :is="resolveNavLinkGroup(item)"
      :nav-item="item"
    />
  </template>
</template>
