<script lang="ts" setup>
import NavUserProfileMenu from '@/components/NavUserProfileMenu.vue'
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'

interface Emit {
  (e: 'update:isDrawerOpen', value: boolean): void
}

const props = defineProps<{
  isDrawerOpen: boolean
}>()

const emit = defineEmits<Emit>()
</script>

<template>
  <VAppBar class="layout-navbar">
    <div class="navbar-wrapper">
      <!-- small screen navigation drawer toggler -->
      <VAppBarNavIcon
        v-show="$vuetify.display.mdAndDown"
        class="ms-n2"
        @click="emit('update:isDrawerOpen', !props.isDrawerOpen)"
      />

      <VTextField
        placeholder="search"
        style="max-inline-size: 14.375rem;"
      />

      <VSpacer />

      <VBtn icon="bx-bell" />

      <!-- ThemeSwitcher -->
      <ThemeSwitcher />
      <!-- user menu -->
      <NavUserProfileMenu />
    </div>
  </VAppBar>
</template>
