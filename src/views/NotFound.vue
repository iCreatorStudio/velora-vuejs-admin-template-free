<script setup lang="ts">
import mics404 from '@images/pages/error-message-404.png'
</script>

<template>
  <div class="misc-wrapper">
    <div class="w-100">
      <VImg
        :src="mics404"
        width="500"
        class="mx-auto"
      />
    </div>
    <h5 class="text-h5 font-weight-semibold mb-3">
      Page not found.
    </h5>
    <p>
      The page you are trying to access doesn't exist. Please check if the URL is correct.
    </p>
    <VBtn
      to="/"
      variant="outlined"
      color="primary"
    >
      Go to home page
    </VBtn>
  </div>
</template>

<style lang="scss">
@use "@styles/pages/misc.scss";
</style>
