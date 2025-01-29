<script setup lang="ts">
import BackToTop from '@/components/BackToTop.vue'
import Footer from '@/layouts/components/footer/index.vue'
import Navbar from '@/layouts/components/navbar/index.vue'
import VerticalNav from '@/layouts/components/vertical-nav/index.vue'

const isVerticalNavExpand = ref<boolean>(false)
</script>

<template>
  <VerticalNav
    v-model:is-drawer-open="isVerticalNavExpand"
    class="d-print-none"
  />

  <!-- buy now button -->

  <!-- back to top -->
  <BackToTop />

  <!-- navbar -->
  <Navbar
    v-model:is-drawer-open="isVerticalNavExpand"
    class="d-print-none"
  />

  <!-- main content -->
  <VMain class="layout-page-content with-vertical-nav">
    <VContainer class="layout-page-content-wrapper">
      <RouterView v-slot="{ Component }">
        <Transition
          name="fade"
          mode="out-in"
        >
          <Component :is="Component" />
        </Transition>
      </RouterView>
    </VContainer>

    <Footer class="d-print-none" />
  </VMain>
</template>
