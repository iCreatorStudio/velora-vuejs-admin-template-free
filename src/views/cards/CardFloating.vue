<script setup lang="ts">
import FloatingCard from '@/components/FloatingCard.vue'
import lights from '@images/pages/lights.jpg'
import sunset from '@images/pages/sunset.jpg'
import sunshine from '@images/pages/sunshine.jpg'
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="4"
      sm="6"
    >
      <FloatingCard
        title="Lights make your happy"
        subtitle="It is costume card"
        :image="{ src: lights }"
      >
        <template #append>
          <VIcon
            icon="bx-heart"
            color="error"
          />
        </template>
        <VCardText>
          Shortbread chocolate danish soufflé pudding biscuit croissant. Jelly wafer carrot cake icing candy canes. Gummies halvah chocolate marshmallow halvah caramels.
        </VCardText>
      </FloatingCard>
    </VCol>

    <VCol
      cols="12"
      md="4"
      sm="6"
    >
      <FloatingCard
        title="Life of docks"
        subtitle="It is costume card"
        :image="{ src: sunset }"
      >
        <template #append>
          <VIcon
            icon="bx-smile"
            color="success"
          />
        </template>
        <VCardText>
          Sesame snaps jelly icing jujubes candy canes chocolate. Jujubes tiramisu tart jelly beans wafer danish. Jelly jujubes oat cake tart powder tiramisu.
        </VCardText>
      </FloatingCard>
    </VCol>

    <VCol
      cols="12"
      md="4"
      sm="6"
    >
      <FloatingCard
        title="Mirror of life"
        subtitle="It is costume card"
        :image="{ src: sunshine }"
      >
        <template #append>
          <VIcon
            icon="bx-tired"
            color="info"
          />
        </template>
        <VCardText>
          Pudding pudding tiramisu candy chocolate sesame snaps dragée. Marshmallow bonbon sesame snaps wafer sweet roll chupa chups. Gummies pudding tootsie roll.
        </VCardText>
      </FloatingCard>
    </VCol>
  </VRow>
</template>
