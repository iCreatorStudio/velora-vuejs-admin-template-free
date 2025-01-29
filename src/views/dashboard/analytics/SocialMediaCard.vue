<script setup lang="ts">
interface SocialNetwork {
  name: string
  visitors: number
  icon: string
  color: string
}

const socialNetworks: SocialNetwork[] = [
  { name: 'Instagram', visitors: 3550, icon: 'mdi-instagram', color: 'deep-purple' },
  { name: 'Twitter', visitors: 1798, icon: 'mdi-twitter', color: 'light-blue' },
  { name: 'Facebook', visitors: 1245, icon: 'mdi-facebook', color: 'blue' },
  { name: 'TikTok', visitors: 986, icon: 'mdi-music-note', color: 'grey-darken-3' },
  { name: 'Pinterest', visitors: 854, icon: 'mdi-pinterest', color: 'red' },
]

const getProgressValue = (visitors: number): number => {
  const maxVisitors = Math.max(...socialNetworks.map(n => n.visitors))

  return (visitors / maxVisitors) * 100
}
</script>

<template>
  <VCard>
    <VCardTitle class="text-h6 pt-4 pb-2">
      Social Media Traffic
    </VCardTitle>
    <VCardText>
      <VList class="pa-0">
        <VListItem
          v-for="network in socialNetworks"
          :key="network.name + network.visitors"
          class="px-0"
        >
          <template #prepend>
            <VIcon
              :icon="network.icon"
              :color="network.color"
              class="me-3"
            />
          </template>

          <VListItemTitle class="text-body-2">
            {{ network.name }}
          </VListItemTitle>

          <template #append>
            <div class="d-flex align-center">
              <div
                class="flex-grow-1 me-3"
                style=" inline-size: 150px;min-inline-size: 50px;"
              >
                <VProgressLinear
                  :model-value="getProgressValue(network.visitors)"
                  :color="network.color"
                  height="8"
                  rounded
                />
              </div>
              <span class="text-body-2">{{ network.visitors }}</span>
            </div>
          </template>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>
