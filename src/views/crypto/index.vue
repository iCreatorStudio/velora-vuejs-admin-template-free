<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import VueApexCharts from 'vue3-apexcharts'
import binance from '@images/svg/binance.svg'
import bitcoin from '@images/svg/bitcoin.svg'
import bnb from '@images/svg/bnb.svg'
import cardano from '@images/svg/cardano.svg'
import doge from '@images/svg/doge.svg'
import ethereum from '@images/svg/ethereum.svg'
import tether from '@images/svg/tether.svg'
import usdc from '@images/svg/usdc.svg'

const pinedHoldings = [
  {
    currencyName: 'Bitcoin',
    icon: bitcoin,
    totalHold: 0.541231,
    abbr: 'BTC',
    price: '41,258.36',
    profitLoss: 10.5,
  },
  {
    currencyName: 'Tether',
    icon: tether,
    totalHold: 1.255,
    abbr: 'USDT',
    price: '1,032.24',
    profitLoss: -1.5,
  },
  {
    currencyName: 'Cardano',
    icon: cardano,
    totalHold: 1.2370,
    abbr: 'BTC',
    price: '325.2',
    profitLoss: 25.5,
  },
  {
    currencyName: 'Binance',
    icon: binance,
    totalHold: 240.54,
    abbr: 'BTC',
    price: '12,345',
    profitLoss: -5.5,
  },
]

const series = [{
  data: [{
    x: new Date(1538778600000),
    y: [6629.81, 6650.5, 6623.04, 6633.33],
  },
  {
    x: new Date(1538780400000),
    y: [6632.01, 6643.59, 6620, 6630.11],
  },
  {
    x: new Date(1538782200000),
    y: [6630.71, 6648.95, 6623.34, 6635.65],
  },
  {
    x: new Date(1538784000000),
    y: [6635.65, 6651, 6629.67, 6638.24],
  },
  {
    x: new Date(1538785800000),
    y: [6638.24, 6640, 6620, 6624.47],
  },
  {
    x: new Date(1538787600000),
    y: [6624.53, 6636.03, 6621.68, 6624.31],
  },
  {
    x: new Date(1538789400000),
    y: [6624.61, 6632.2, 6617, 6626.02],
  }],
}]

const chartOptions = computed(() => {
  return {
    chart: {
      type: 'candlestick',
      parentHeightOffset: 0,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    grid: {
      show: false,
      padding: {
        top: -50,
        right: 0,
        bottom: -20,
        left: -20,
      },
    },
    xaxis: {
      type: 'datetime',
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  }
})

const cryptocurrencyPrices = [
  {
    date: '2023-07-28',
    currency: 'Bitcoin',
    icon: bitcoin,
    priceUSD: 41258.36,
    marketCapUSD: 776985678923.15,
    volume24h: 3215987586.42,
    circulatingSupply: '18,796,293 BTC',
    percentChange24h: -1.25,
  },
  {
    date: '2023-07-28',
    currency: 'Ethereum',
    icon: ethereum,
    priceUSD: 2943.21,
    marketCapUSD: 345698732198.77,
    volume24h: 1567845321.67,
    circulatingSupply: '117,643,789 ETH',
    percentChange24h: 0.87,
  },
  {
    date: '2023-07-28',
    currency: 'Cardano',
    icon: cardano,
    priceUSD: 1.04,
    marketCapUSD: 104321876543.12,
    volume24h: 478925623.12,
    circulatingSupply: '100,000,000,000 XRP',
    percentChange24h: -0.32,
  },
  {
    date: '2023-07-28',
    currency: 'Doge',
    icon: doge,
    priceUSD: 171.89,
    marketCapUSD: 11567987654.32,
    volume24h: 23987654.98,
    circulatingSupply: '67,321,876 LTC',
    percentChange24h: -2.15,
  },
  {
    date: '2023-07-28',
    currency: 'BNB',
    icon: bnb,
    priceUSD: 1.45,
    marketCapUSD: 46789543210.98,
    volume24h: 19876543.21,
    circulatingSupply: '32,345,678,900 ADA',
    percentChange24h: 1.10,
  },
  {
    date: '2023-07-28',
    currency: 'Tether',
    icon: tether,
    priceUSD: 39.87,
    marketCapUSD: 3210987654.67,
    volume24h: 9567321.53,
    circulatingSupply: '80,456,789 DOT',
    percentChange24h: -0.75,
  },
  {
    date: '2023-07-28',
    currency: 'USDC',
    icon: usdc,
    priceUSD: 20.09,
    marketCapUSD: 1678765432.10,
    volume24h: 5678321.78,
    circulatingSupply: '350,000,000 LINK',
    percentChange24h: 1.80,
  },
  {
    date: '2023-07-28',
    currency: 'Bitcoin',
    icon: bitcoin,
    priceUSD: 0.68,
    marketCapUSD: 14567890987.43,
    volume24h: 3456789.43,
    circulatingSupply: '21,467,890,987 XLM',
    percentChange24h: -1.90,
  },
  {
    date: '2023-07-28',
    currency: 'VeChain',
    icon: binance,
    priceUSD: 0.15,
    marketCapUSD: 9876543210.87,
    volume24h: 1234567.87,
    circulatingSupply: '64,567,890,123 VET',
    percentChange24h: 0.25,
  },
  {
    date: '2023-07-28',
    currency: 'Dogecoin',
    icon: doge,
    priceUSD: 0.235,
    marketCapUSD: 30987654321.76,
    volume24h: 876543.12,
    circulatingSupply: '131,232,654,321 DOGE',
    percentChange24h: -0.50,
  },
  {
    date: '2023-07-28',
    currency: 'Binance',
    icon: binance,
    priceUSD: 1.00,
    marketCapUSD: 87432109876.54,
    volume24h: 2109876543.21,
    circulatingSupply: '87,432,109,876 USDT',
    percentChange24h: 0.05,
  },
]

const headers = [
  {
    title: 'Date',
    key: 'date',
  },
  {
    title: 'Currency',
    key: 'currency',
  },
  {
    title: 'Price (USD)',
    key: 'priceUSD',
  },
  {
    title: 'Market Cap (USD)',
    key: 'marketCapUSD',
  },
  {
    title: 'Volume (24h)',
    key: 'volume24h',
  },
  {
    title: 'Circulating Supply',
    key: 'circulatingSupply',
  },
  {
    title: 'Change (24h)',
    key: 'percentChange24h',
    width: '3.125rem',
  },
]

const searchCrypto = ref('')

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
    title: 'Crypto',
    disabled: true,
  },
]

register()
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
      <div class="border rounded px-4">
        <swiper-container
          events-prefix="swiper-"
          slides-per-view="1"
          navigation="true"
          :breakpoints="{
            1880: {
              slidesPerView: 3.5,
              spaceBetween: 30,
            },
            1500: {
              slidesPerView: 3.2,
              spaceBetween: 30,
            },
            950: {
              slidesPerView: 2.8,
              spaceBetween: 30,
            },
            770: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            600: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            },
            510: {
              slidesPerView: 1.3,
              spaceBetween: 30,
            },
            400: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
          }"
        >
          <swiper-slide
            v-for="hold in pinedHoldings"
            :key="hold.currencyName"
          >
            <VCard
              class="my-4"
              :ripple="false"
              max-width="350"
            >
              <VCardText>
                <VRow class="ms-0 me-4">
                  <VCol
                    cols="12"
                    class="border-b"
                  >
                    <div class="d-flex align-center flex-wrap gap-2 mb-1">
                      <div class="d-flex align-center gap-2">
                        <component
                          :is="hold.icon"
                          style="inline-size: 24px;"
                        />
                        <h6 class="text-h6">
                          {{ hold.currencyName }}
                        </h6>
                      </div>

                      <VSpacer />

                      <span
                        class="d-flex align-center gap-1"
                        :class="hold.profitLoss > 0 ? 'text-success' : 'text-error'"
                      >
                        <VIcon
                          size="16"
                          icon="bx-up-arrow-alt"
                        />
                        <span>{{ hold.profitLoss }}%</span>
                      </span>
                    </div>

                    <div class="d-flex align-center font-weight-medium flex-wrap">
                      <h4 class="text-h4 mb-1">
                        {{ hold.totalHold }} {{ hold.abbr }}
                      </h4>
                      <VSpacer />
                      <span>$ {{ hold.price }}</span>
                    </div>
                  </VCol>
                  <VCol cols="12">
                    <VueApexCharts
                      :options="chartOptions"
                      :series="series"
                      :height="60"
                    />
                  </VCol>
                </VRow>
              </VCardText>
            </VCard>
          </swiper-slide>
        </swiper-container>
      </div>
    </VCol>

    <VCol cols="12">
      <VCard title="Crypto Currency Prices">
        <template #append>
          <VTextField
            v-model="searchCrypto"
            placeholder="Search Crypto"
            style="min-inline-size: 200px;"
          />
        </template>

        <VDataTable
          :search="searchCrypto"
          :headers="headers"
          :items="cryptocurrencyPrices"
          :items-per-page="8"
          class="text-no-wrap rounded-0"
        >
          <template #item.percentChange24h="{ item }">
            <VChip
              size="small"
              :color="item.percentChange24h > 0 ? 'success' : 'error'"
            >
              {{ item.percentChange24h }}%
            </VChip>
          </template>

          <template #item.currency="{ item }">
            <div class="d-flex align-center gap-3">
              <component :is="item.icon" />
              <span class="font-weight-semibold">{{ item.currency }}</span>
            </div>
          </template>

          <template #item.priceUSD="{ item }">
            <span class="font-weight-semibold">${{ item.priceUSD }}</span>
          </template>

          <template #item.marketCapUSD="{ item }">
            <span class="font-weight-semibold">${{ item.marketCapUSD }}</span>
          </template>

          <template #item.volume24h="{ item }">
            <span class="font-weight-semibold">${{ item.volume24h }}</span>
          </template>

          <template #item.circulatingSupply="{ item }">
            <span class="font-weight-semibold">${{ item.circulatingSupply }}</span>
          </template>
        </VDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@styles/libs/swiper";
</style>
