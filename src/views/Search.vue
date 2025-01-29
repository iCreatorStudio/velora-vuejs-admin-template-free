<script setup lang="ts">
import cover from '@images/pages/cover.jpg'
import camera from '@images/product/camera.png'
import grinder from '@images/product/grinder.png'
import headphone from '@images/product/headphone.png'
import iphone from '@images/product/iphone.png'
import laptop from '@images/product/laptop.png'
import monitor from '@images/product/monitor.png'
import printer from '@images/product/printer.png'
import smartWatch from '@images/product/smart-watch.png'

interface Filter {
  text: string
  value: string
  prependIcon: string
}

const tags = ref(['low-to-high-price', 'high-to-low-price', 'categories', 'colors', 'sizes'])

const filters = ref<Filter[]>([
  {
    text: 'Low to high price',
    value: 'low-to-high-price',
    prependIcon: 'bx-trending-up',
  },
  {
    text: 'High to low price',
    value: 'high-to-low-price',
    prependIcon: 'bx-trending-down',
  },
  {
    text: 'Categories',
    value: 'categories',
    prependIcon: 'bxs-shapes',
  },
  {
    text: 'Colors',
    value: 'colors',
    prependIcon: 'bx-palette',
  },
  {
    text: 'Sizes',
    value: 'sizes',
    prependIcon: 'bx-expand',
  },
])

const products = ref([
  {
    id: 1,
    image: iphone,
    name: 'iPhone 14',
    rating: 4,
    totalRating: 10,
    totalReview: 9,
    price: 432,
    discount: 10,
    details: [
      '3 GB RAM | 32 GB ROM | Expandable Upto 512 GB',
      '13MP Rear Camera | 5MP Front Camera',
      '5000 mAh Li-Polymer Battery',
      '1 Year Warranty for Mobile and 6 Months for Accessories',
    ],
  },
  {
    id: 2,
    image: camera,
    name: 'Nick Camera',
    rating: 4.2,
    totalRating: 25,
    totalReview: 22,
    price: 99,
    discount: 15,
    details: [
      '3 GB RAM | 32 GB ROM | Expandable Upto 256 GB',
      '13MP + 2MP + 2MP Rear Camera | 5MP Front Camera',
      '5000 mAh Battery',
      '1 Year Warranty for Mobile and 6 Months for Accessories',
    ],
  },
  {
    id: 3,
    image: laptop,
    name: 'Laptop',
    rating: 4.1,
    totalRating: 15,
    totalReview: 13,
    price: 69,
    discount: 12,
    details: [
      '2 GB RAM | 32 GB ROM | Expandable Upto 256 GB',
      '8MP + AI Lens Dual Rear Camera | 8MP Front Camera',
      '5000 mAh Battery',
      '1 Year Warranty for Mobile and 6 Months for Accessories',
    ],
  },
  {
    id: 4,
    image: smartWatch,
    name: 'SmartWatch',
    rating: 4.3,
    totalRating: 45,
    totalReview: 40,
    price: 99,
    discount: 18,
    details: [
      '4 GB RAM | 64 GB ROM | Expandable Upto 256 GB',
      '13MP + 2MP Dual Rear Camera | 8MP Front Camera',
      '6000 mAh Battery',
      '1 Year Warranty for Mobile and 6 Months for Accessories',
    ],
  },
  {
    id: 5,
    image: monitor,
    name: 'Monitor',
    rating: 4.2,
    totalRating: 50,
    totalReview: 50,
    price: 199,
    discount: 15,
    details: [
      '4 GB RAM | 64 GB ROM | Expandable Upto 1 TB',
      '48MP + 5MP + 2MP + 2MP Quad Rear Camera | 8MP Front Camera',
      '6000 mAh Battery',
      '1 Year Warranty for Mobile and 6 Months for Accessories',
    ],
  },
  {
    id: 5,
    image: headphone,
    name: 'Beat Headphone',
    rating: 4.5,
    totalRating: 5,
    totalReview: 4,
    price: 84,
    discount: 15,
    details: [
      'Intel Core i7-10750H Processor',
      'NVIDIA GeForce GTX 1650 Graphics',
      '16 GB RAM | 512 GB SSD',
      '15.6-inch FHD IPS Display',
      'Windows 10 Home | Backlit Keyboard | B&O Play Audio',
      '1 Year Warranty',
    ],
  },
  {
    id: 6,
    image: printer,
    name: 'Laser Printer',
    rating: 4.2,
    totalRating: 12,
    totalReview: 20,
    price: 40,
    discount: 10,
    details: [
      'AMD Ryzen 5 Quad Core 3500U Processor',
      '8 GB DDR4 RAM | 1 TB HDD',
      '15.6 inch HD LED Backlit BrightView Display',
      'Windows 10 Home | MS Office',
      '1 Year Onsite Warranty',
    ],
  },
  {
    id: 7,
    image: grinder,
    name: 'Grinder 25 W',
    rating: 4.1,
    totalRating: 10,
    totalReview: 9,
    price: 39,
    discount: 20,
    details: [
      '750 W Power Consumption',
      '3 Stainless Steel Jars',
      '3 Speed Control with Incher',
      'Overload Protection',
      '2 Years Warranty on Product and 5 Years on Motor',
    ],
  },
  {
    id: 8,
    image: iphone,
    name: 'iPhone 14',
    rating: 4,
    totalRating: 10,
    totalReview: 9,
    price: 432,
    discount: 10,
    details: [
      '3 GB RAM | 32 GB ROM | Expandable Upto 512 GB',
      '13MP Rear Camera | 5MP Front Camera',
      '5000 mAh Li-Polymer Battery',
      '1 Year Warranty for Mobile and 6 Months for Accessories',
    ],
  },
  {
    id: 9,
    image: camera,
    name: 'Nick Camera',
    rating: 4.2,
    totalRating: 25,
    totalReview: 22,
    price: 99,
    discount: 15,
    details: [
      '3 GB RAM | 32 GB ROM | Expandable Upto 256 GB',
      '13MP + 2MP + 2MP Rear Camera | 5MP Front Camera',
      '5000 mAh Battery',
      '1 Year Warranty for Mobile and 6 Months for Accessories',
    ],
  },
  {
    id: 10,
    image: laptop,
    name: 'Laptop',
    rating: 4.1,
    totalRating: 15,
    totalReview: 13,
    price: 69,
    discount: 12,
    details: [
      '2 GB RAM | 32 GB ROM | Expandable Upto 256 GB',
      '8MP + AI Lens Dual Rear Camera | 8MP Front Camera',
      '5000 mAh Battery',
      '1 Year Warranty for Mobile and 6 Months for Accessories',
    ],
  },
  {
    id: 11,
    image: smartWatch,
    name: 'SmartWatch',
    rating: 4.3,
    totalRating: 45,
    totalReview: 40,
    price: 99,
    discount: 18,
    details: [
      '4 GB RAM | 64 GB ROM | Expandable Upto 256 GB',
      '13MP + 2MP Dual Rear Camera | 8MP Front Camera',
      '6000 mAh Battery',
      '1 Year Warranty for Mobile and 6 Months for Accessories',
    ],
  },
  {
    id: 12,
    image: monitor,
    name: 'Monitor',
    rating: 4.2,
    totalRating: 50,
    totalReview: 50,
    price: 199,
    discount: 15,
    details: [
      '4 GB RAM | 64 GB ROM | Expandable Upto 1 TB',
      '48MP + 5MP + 2MP + 2MP Quad Rear Camera | 8MP Front Camera',
      '6000 mAh Battery',
      '1 Year Warranty for Mobile and 6 Months for Accessories',
    ],
  },
  {
    id: 13,
    image: headphone,
    name: 'Beat Headphone',
    rating: 4.5,
    totalRating: 5,
    totalReview: 4,
    price: 84,
    discount: 15,
    details: [
      'Intel Core i7-10750H Processor',
      'NVIDIA GeForce GTX 1650 Graphics',
      '16 GB RAM | 512 GB SSD',
      '15.6-inch FHD IPS Display',
      'Windows 10 Home | Backlit Keyboard | B&O Play Audio',
      '1 Year Warranty',
    ],
  },
  {
    id: 14,
    image: printer,
    name: 'Laser Printer',
    rating: 4.2,
    totalRating: 12,
    totalReview: 20,
    price: 40,
    discount: 10,
    details: [
      'AMD Ryzen 5 Quad Core 3500U Processor',
      '8 GB DDR4 RAM | 1 TB HDD',
      '15.6 inch HD LED Backlit BrightView Display',
      'Windows 10 Home | MS Office',
      '1 Year Onsite Warranty',
    ],
  },
  {
    id: 15,
    image: grinder,
    name: 'Grinder 25 W',
    rating: 4.1,
    totalRating: 10,
    totalReview: 9,
    price: 39,
    discount: 20,
    details: [
      '750 W Power Consumption',
      '3 Stainless Steel Jars',
      '3 Speed Control with Incher',
      'Overload Protection',
      '2 Years Warranty on Product and 5 Years on Motor',
    ],
  },
])

const search = ref('')
const page = ref(1)
const rowPerPage = ref(6)

const removeTag = (tag: string) => {
  const index = tags.value.findIndex(i => i === tag)

  tags.value.splice(index, 1)
}

// breadcrumbs
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
    title: 'Search',
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
      <VCard>
        <VImg
          :src="cover"
          height="160"
          cover
          gradient="to bottom, rgba(0,0,0,.6), rgba(0,0,0,.5)"
        />
        <VCardText
          class="d-flex flex-column align-center"
          style="margin-block-start: -7rem;"
        >
          <h4
            class="text-h4 text-white mb-6"
            style="z-index: 2;"
          >
            Search Products
          </h4>
          <div class="w-100">
            <VTextField
              v-model="search"
              variant="solo"
              density="default"
              prepend-inner-icon="bx-search"
              placeholder="Type your keywords"
              bg-color="surface"
              style="max-inline-size: 40rem;"
              class="mx-auto"
            >
              <template #append-inner>
                <VBtn
                  color="info"
                  size="small"
                  elevation="0"
                  icon="bx-right-arrow-alt"
                />
              </template>
            </VTextField>
          </div>
        </VCardText>
        <VCardText>
          <div class="d-flex justify-space-between gap-4 mt-10">
            <VTabs>
              <VTab
                v-for="item in ['All Items', 'Women', 'Man', 'Jewels', 'Kids']"
                :key="item"
              >
                {{ item }}
              </VTab>
            </VTabs>
            <div>
              <VBtn
                color="info"
                prepend-icon="bx-filter"
              >
                Filters
                <VMenu activator="parent">
                  <VList
                    v-model:selected="tags"
                    select-strategy="classic"
                    :items="filters"
                    item-title="text"
                  />
                </VMenu>
              </VBtn>
            </div>
          </div>
          <VDivider />
        </VCardText>
        <VCardText class="d-flex flex-wrap gap-2">
          <VChip
            v-for="tag in tags"
            v-show="filters.filter((f) => f.value === tag).length"
            :key="tag"
            v-bind="filters.filter((f) => f.value === tag)[0]"
            closable
            label
            size="small"
            color="primary"
            close-icon="bx-x-circle"
            @click:close="removeTag(tag)"
          />
        </VCardText>
        <VCardText>
          <VDataIterator
            v-if="products && products.length"
            v-model:items-per-page="rowPerPage"
            :items="products"
            :page="page"
            :search="search"
          >
            <template #default="{ items }">
              <VRow>
                <VCol
                  v-for="(item, i) in items"
                  :key="i"
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <VCard variant="outlined">
                    <VCardText class="d-flex justify-space-between">
                      <VChip color="Primary">
                        {{ item.raw.discount }}%
                        Off
                      </VChip>
                      <VBtn
                        icon
                        variant="text"
                        size="small"
                        class="mt-n1"
                      >
                        <VIcon
                          size="24"
                          color="error"
                          icon="bx-heart"
                        />
                      </VBtn>
                    </VCardText>
                    <VCardText class="bg-background">
                      <VImg
                        :src="item.raw.image"
                        height="200"
                      />
                    </VCardText>
                    <VCardText class="d-flex mt-n7 pb-0">
                      <VSpacer />
                      <VBtn
                        icon
                        elevation="10"
                        color="success"
                      >
                        <VIcon
                          size="24"
                          icon="bx-cart-add"
                        />
                      </VBtn>
                    </VCardText>
                    <VCardText class="mt-4">
                      <div class="d-flex align-center justify-space-between mb-4">
                        <div>
                          <h6 class="text-h6">
                            {{ item.raw.name }}
                          </h6>
                          <span class="text-medium-emphasis text-truncate">{{ item.raw.details[0] }}</span>
                        </div>
                      </div>
                      <div class="d-flex justify-space-between">
                        <VBtn
                          variant="tonal"
                          color="primary"
                        >
                          ${{ item.raw.price }}
                        </VBtn>
                        <div class="d-flex align-center gap-2">
                          <VIcon
                            size="24"
                            icon="bx-star"
                            color="warning"
                          />
                          <span class="text-base font-weight-semibold">{{ item.raw.rating }}</span>
                          <span>({{ item.raw.totalReview }} Reviews)</span>
                        </div>
                      </div>
                    </VCardText>
                  </VCard>
                </VCol>
              </VRow>
            </template>

            <template #footer="{ pageCount }">
              <div class="d-flex align-center flex-wrap gap-4 mt-6">
                <div class="d-flex align-center gap-1">
                  <span>
                    Rows Per Page:
                  </span>
                  <VSelect
                    v-model="rowPerPage"
                    :items="[6, 10, 15, 20]"
                    style="inline-size: 5rem;"
                  />
                </div>

                <VSpacer />

                <div>
                  <VPagination
                    v-model="page"
                    active-color="primary"
                    :total-visible="5"
                    :length="pageCount"
                  />
                </div>
              </div>
            </template>
          </VDataIterator>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
