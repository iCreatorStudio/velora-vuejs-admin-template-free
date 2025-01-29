<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'

const orderData = [80, 42, 55, 48, 50, 60, 55, 58.4]
const vuetifyTheme = useTheme()

const currentTheme = computed(() => vuetifyTheme.current.value.colors)

const chartOptions = computed(() => ({
  chart: {
    type: 'area',
    toolbar: {
      show: false,
    },
    sparkline: {
      enabled: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    type: 'datetime',
    categories: [
      '2018-09-19T00:00:00',
      '2018-09-19T01:30:00',
      '2018-09-19T02:30:00',
      '2018-09-19T03:30:00',
      '2018-09-19T04:30:00',
      '2018-09-19T05:30:00',
      '2018-09-19T06:30:00',
    ],
    labels: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  grid: {
    show: false,
  },
  tooltip: {
    enabled: false,
    x: {
      format: 'dd/MM/yy HH:mm',
    },
  },
  colors: [currentTheme.value.primary],
  stroke: {
    curve: 'smooth',
    width: 1,
  },
}))

const series = computed(() => [{
  name: 'Orders',
  data: orderData,
}])
</script>

<template>
  <VCard
    class="dashboard-card"
    elevation="2"
  >
    <VCardItem>
      <div class="d-flex flex-column">
        <div class="text-subtitle-1 mb-4">
          Total Order
        </div>
        <div class="text-h4 mb-2">
          58.4K
        </div>
        <VChip
          color="success"
          size="small"
          variant="tonal"
          class="mb-4"
          style="inline-size: fit-content;"
        >
          <VIcon
            size="small"
            icon="bx-up-arrow-alt"
          />
          13.6%
        </VChip>
      </div>
    </VCardItem>

    <div class="chart-wrapper">
      <VueApexCharts
        :options="chartOptions"
        :series="series"
        height="100"
      />
    </div>
  </VCard>
</template>

<style scoped>
.chart-wrapper {
  margin-block: 0;
  margin-inline: -16px;
}
</style>
