<script lang="ts" setup>
import { useTheme } from 'vuetify'

const vuetifyTheme = useTheme()
const currentTheme = ref<['light' | 'dark']>(['light'])

const themeSwitcherIcon = computed(() => {
  return currentTheme.value[0] === 'light' ? 'bx-sun' : 'bx-moon'
})

watch(currentTheme, ([theme]) => {
  vuetifyTheme.global.name.value = theme
})
</script>

<template>
  <!-- theme Switcher -->
  <VBtn icon>
    <VIcon :icon="themeSwitcherIcon" />

    <VMenu
      activator="parent"
      offset="10px"
    >
      <VList
        v-model:selected="currentTheme"
        :items="[
          { name: 'Light', value: 'light', props: { prependIcon: 'bx-sun' } },
          { name: 'Dark', value: 'dark', props: { prependIcon: 'bx-moon' } },
        ]"
        item-title="name"
        item-value="value"
        mandatory
      />
    </VMenu>
  </VBtn>
</template>
