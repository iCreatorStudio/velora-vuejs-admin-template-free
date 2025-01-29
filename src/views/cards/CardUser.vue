<script setup lang="ts">
import avatar3 from '@images/avatars/avatar-3.png'
import cactus from '@images/pages/cactus.png'
</script>

<template>
  <VCard>
    <VImg
      cover
      :src="cactus"
      height="145"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
    />
    <VCardText class="text-center pb-0">
      <div class=" mt-n12">
        <VAvatar
          variant="elevated"
          size="64"
          :image="avatar3"
          class="elevation-12"
        />
      </div>

      <VCardTitle class="pb-0">
        Cortez Herring
      </VCardTitle>
      <VCardSubtitle>ui/ux designer</VCardSubtitle>
    </VCardText>

    <VList density="compact">
      <VListItem
        prepend-icon="bx-user"
        title="Project Manager"
      />
      <VListItem
        prepend-icon="bx-phone"
        title="+1 (612) 222 8989"
      />
    </VList>
  </VCard>
</template>
