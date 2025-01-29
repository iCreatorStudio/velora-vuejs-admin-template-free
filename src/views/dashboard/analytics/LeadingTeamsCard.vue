<script setup lang="ts">
interface Team {
  id: number
  name: string
  type: string
  icon: string
  iconColor: string
  visitors: number
  trend: {
    value: number
    direction: 'up' | 'down'
  }
}

const teams: Team[] = [
  {
    id: 1,
    name: 'Abstergo Ltd.',
    type: 'Community',
    icon: 'bx-group',
    iconColor: 'deep-purple',
    visitors: 579,
    trend: { value: 2.62, direction: 'up' },
  },
  {
    id: 2,
    name: 'Binford Ltd.',
    type: 'Social Media',
    icon: 'mdi-twitter',
    iconColor: 'light-blue',
    visitors: 2588,
    trend: { value: 0.4, direction: 'down' },
  },
  {
    id: 3,
    name: 'Barone LLC.',
    type: 'Messenger',
    icon: 'bx-message',
    iconColor: 'pink',
    visitors: 794,
    trend: { value: 0.2, direction: 'up' },
  },
  {
    id: 4,
    name: 'Abstergo Ltd.',
    type: 'Video Channel',
    icon: 'mdi-youtube',
    iconColor: 'red',
    visitors: 1578,
    trend: { value: 4.1, direction: 'up' },
  },
  {
    id: 5,
    name: 'Biffco Enterprises',
    type: 'Social Network',
    icon: 'mdi-facebook',
    iconColor: 'blue',
    visitors: 3458,
    trend: { value: 8.3, direction: 'up' },
  },
  {
    id: 6,
    name: 'Big Kahuna Burger',
    type: 'Social Network',
    icon: 'mdi-instagram',
    iconColor: 'purple',
    visitors: 2047,
    trend: { value: 1.9, direction: 'up' },
  },
]
</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle>
        <div class="text-h6">
          Leading Teams
        </div>
        <div class="text-subtitle-2 text-grey">
          8k social visitors
        </div>
      </VCardTitle>
    </VCardItem>

    <VCardText>
      <VList>
        <VListItem
          v-for="team in teams"
          :key="team.id"
          class="py-2"
        >
          <template #prepend>
            <VAvatar
              :color="team.iconColor"
              size="40"
              class="me-3"
            >
              <VIcon
                :icon="team.icon"
                color="white"
                size="24"
              />
            </VAvatar>
          </template>

          <VListItemTitle>{{ team.name }}</VListItemTitle>
          <VListItemSubtitle>{{ team.type }}</VListItemSubtitle>

          <template #append>
            <div class="d-flex align-center">
              <span class="text-body-1 font-weight-medium me-3">
                {{ team.visitors.toLocaleString() }}
              </span>

              <VChip
                :color="team.trend.direction === 'up' ? 'success' : 'error'"
                size="small"
                variant="tonal"
              >
                <VIcon
                  size="small"
                  :icon="team.trend.direction === 'up' ? 'bx-up-arrow-alt' : 'bx-down-arrow-alt'"
                />
                {{ team.trend.value }}%
              </VChip>
            </div>
          </template>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>
