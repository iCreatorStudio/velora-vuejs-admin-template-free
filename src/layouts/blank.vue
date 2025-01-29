<template>
  <RouterView v-slot="{ Component }">
    <Component :is="Component" />
  </RouterView>

  <!-- buy now button -->
</template>
