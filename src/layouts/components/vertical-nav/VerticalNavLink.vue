<script setup lang="ts">
import type { HorizontalMenuItem } from '@/layouts/components/types'
import { isNavLinkActive } from '@/layouts/components/utils'

interface Props {
  navItem: HorizontalMenuItem
}
interface Emit {
  (e: 'closeGroup'): void
}

const props = defineProps<Props>()

const emit = defineEmits<Emit>()
</script>

<template>
  <template v-if="props.navItem">
    <!-- navigation for same app routes -->
    <VListItem
      v-if="props.navItem.to"
      :prepend-icon="props.navItem.icon"
      :title="props.navItem.name"
      :to="props.navItem.to"
      :active="isNavLinkActive(props.navItem)"
      :target="props.navItem.target ? props.navItem.target : ''"
      @click="emit('closeGroup')"
    />

    <!-- navigation for external site link -->
    <VListItem
      v-else
      :prepend-icon="props.navItem.icon"
      :title="props.navItem.name"
      :href="props.navItem.href"
      :active="isNavLinkActive(props.navItem)"
      :target="props.navItem.target ? props.navItem.target : ''"
    >
      <template #append>
        <VChip
          color="primary"
          size="small"
        >
          Pro
        </VChip>
      </template>
    </VListItem>
  </template>
</template>
