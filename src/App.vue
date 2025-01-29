<script setup lang="ts">
import { useRouter } from 'vue-router'
import Blank from '@/layouts/blank.vue'
import Default from '@/layouts/default.vue'

const route = useRouter()

const resolveLayoutVariant = computed(() => {
  if (route.currentRoute.value.meta.layout === 'content')
    return Default

  if (route.currentRoute.value.meta.layout === 'blank')
    return Blank

  return false
})
</script>

<template>
  <VLocaleProvider>
    <VApp class="v-theme-skins-default v-application-box-layout v-theme-vertical-nav">
      <Component
        :is="resolveLayoutVariant"
        v-if="resolveLayoutVariant"
      />
    </VApp>
  </VLocaleProvider>
</template>
