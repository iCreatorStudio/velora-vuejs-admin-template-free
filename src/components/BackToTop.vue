<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

function onClick() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const { y } = useWindowScroll()
</script>

<template>
  <div class="pointer-events-initial">
    <VFabTransition>
      <VBtn
        v-show="y > 200"
        color="primary"
        elevation="8"
        icon="bx-chevron-up"
        @click="onClick"
      />
    </VFabTransition>
  </div>
</template>

<style scoped lang="scss">
.pointer-events-initial {
  position: fixed;
  z-index: 99999;
  inset-block-end: 3rem;
  inset-inline-end: 2.2rem;
}
</style>
