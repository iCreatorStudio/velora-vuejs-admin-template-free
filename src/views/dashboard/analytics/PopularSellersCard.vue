<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'

interface Seller {
  id: number
  name: string
  avatar: string
  area: string
  deliveries: number
  earnings: number
  rating: number
}

const sellers: Seller[] = [
  {
    id: 1,
    name: 'Brooklyn Simmons',
    avatar: avatar1,
    area: 'Zuid Area',
    deliveries: 1240,
    earnings: 5400,
    rating: 5,
  },
  {
    id: 2,
    name: 'Annette Black',
    avatar: avatar2,
    area: 'Zuid Area',
    deliveries: 6074,
    earnings: 174074,
    rating: 5,
  },
  {
    id: 3,
    name: 'Esther Howard',
    avatar: avatar3,
    area: 'Zuid Area',
    deliveries: 357,
    earnings: 2737,
    rating: 5,
  },
  {
    id: 4,
    name: 'Guy Hawkins',
    avatar: avatar4,
    area: 'Zuid Area',
    deliveries: 2954,
    earnings: 59634,
    rating: 4.5,
  },
  {
    id: 5,
    name: 'Marvin McKinney',
    avatar: avatar5,
    area: 'Zuid Area',
    deliveries: 822,
    earnings: 19842,
    rating: 5,
  },
]

const dateRange = '12 Oct 2024 - 10 Nov 2024'
const totalDeliveries = 424567

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

const formatNumber = (value: number) => {
  return new Intl.NumberFormat('en-US').format(value)
}
</script>

<template>
  <VCard>
    <VCardItem>
      <template #prepend>
        <div>
          <div class="text-h6">
            Most Popular Sellers
          </div>
          <div class="text-subtitle-2 text-grey">
            Total {{ formatNumber(totalDeliveries) }} deliveries
          </div>
        </div>
      </template>
      <template #append>
        <div class="d-flex align-center">
          <span class="text-caption text-grey me-2">{{ dateRange }}</span>
          <VIcon
            icon="bx-calendar"
            size="small"
            color="grey"
          />
        </div>
      </template>
    </VCardItem>

    <VCardText>
      <VList>
        <VListItem
          v-for="seller in sellers"
          :key="seller.id"
          class="py-2"
        >
          <template #prepend>
            <VAvatar
              size="40"
              class="me-3"
            >
              <VImg
                :src="seller.avatar"
                :alt="seller.name"
              />
            </VAvatar>
          </template>

          <VListItemTitle>{{ seller.name }}</VListItemTitle>
          <VListItemSubtitle>{{ seller.area }}</VListItemSubtitle>

          <template #append>
            <div class="d-flex align-center gap-6">
              <div class="text-right">
                <div class="text-body-2 font-weight-medium">
                  {{ formatNumber(seller.deliveries) }}
                </div>
                <div class="text-caption text-grey">
                  Deliveries
                </div>
              </div>
              <div class="text-right">
                <div class="text-body-2 font-weight-medium">
                  {{ formatCurrency(seller.earnings) }}
                </div>
                <div class="text-caption text-grey">
                  Earnings
                </div>
              </div>
              <div
                class="text-right"
                style="min-inline-size: 100px;"
              >
                <VRating
                  :model-value="seller.rating"
                  color="warning"
                  density="compact"
                  size="small"
                  readonly
                />
                <div class="text-caption text-grey">
                  Rating
                </div>
              </div>
            </div>
          </template>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>

<style scoped>
.gap-6 {
  gap: 24px;
}
</style>
