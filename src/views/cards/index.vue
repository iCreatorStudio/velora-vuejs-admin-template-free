<script setup lang="ts">
import CardBanner from './CardBanner.vue'
import CardBasic from './CardBasic.vue'
import CardFloating from './CardFloating.vue'
import CardImg from './CardImg.vue'
import CardPost from './CardPost.vue'
import CardStatistics from './CardStatistics.vue'
import CardTask from './CardTask.vue'
import CardTimeline from './CardTimeline.vue'
import CardUser from './CardUser.vue'

const breadcrumbs = [
  {
    title: 'Home',
    disabled: false,
    to: { path: '/' },
  },
  {
    title: 'Pages',
    disabled: true,
  },
  {
    title: 'Cards',
    disabled: true,
  },
]
</script>

<template>
  <VRow>
    <!-- Breadcrumbs -->
    <VCol cols="12">
      <VBreadcrumbs
        :items="breadcrumbs"
        class="border rounded"
      />
    </VCol>

    <VCol cols="12">
      <h6 class="text-h6">
        Basic Card
      </h6>
    </VCol>

    <!-- statics -->
    <VCol cols="12">
      <CardStatistics />
    </VCol>

    <!-- Card  Basic -->
    <VCol
      cols="12"
      sm="6"
      md="4"
    >
      <CardBasic />
    </VCol>

    <!-- card img -->
    <VCol
      cols="12"
      sm="6"
      md="4"
    >
      <CardImg />
    </VCol>

    <!-- card user -->
    <VCol
      cols="12"
      sm="6"
      md="4"
    >
      <CardUser />
    </VCol>

    <!-- card post -->
    <VCol
      cols="12"
      sm="6"
      md="4"
    >
      <CardPost />
    </VCol>

    <!-- card timeline -->
    <VCol
      cols="12"
      sm="6"
      md="4"
    >
      <CardTimeline />
    </VCol>

    <!-- card Task -->
    <VCol
      cols="12"
      sm="6"
      md="4"
    >
      <CardTask />
    </VCol>

    <!-- Banner -->
    <VCol cols="12">
      <CardBanner />
    </VCol>

    <!-- Floating Card -->
    <VCol cols="12">
      <h6 class="text-h6">
        Floating Card
      </h6>
    </VCol>
    <VCol cols="12">
      <CardFloating />
    </VCol>
  </VRow>
</template>
