<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'

const customerData = {
  current: [310, 300, 320, 290, 340, 330, 350, 356],
  previous: [290, 285, 295, 280, 300, 290, 305, 310],
}

const chartOptions = computed(() => ({
  chart: {
    type: 'line',
    toolbar: { show: false },
  },
  stroke: {
    curve: 'smooth',
    width: [2, 2],
    dashArray: [0, 3],
  },
  colors: ['rgba(var(--v-theme-primary), 1)', 'rgba(var(--v-theme-secondary), 0.4)'],
  grid: {
    borderColor: 'rgba(var(--v-border-color), var(--v-border-opacity))',
    padding: { left: 10, right: 10 },
  },
  legend: { show: false },
  xaxis: {
    categories: ['01 May', '02 May', '03 May', '04 May', '05 May', '06 May', '07 May'],
    labels: {
      style: { colors: 'rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity))', fontSize: '12px' },
    },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: { show: false },
}))

const series = computed(() => [
  { name: 'Current', data: customerData.current },
  { name: 'Previous', data: customerData.previous },
])
</script>

<template>
  <VCard
    class="dashboard-card"
    elevation="2"
  >
    <VCardItem>
      <div class="d-flex flex-column">
        <div class="d-flex justify-space-between align-center mb-4">
          <div>
            <div class="text-h4 font-weight-bold">
              356
            </div>
            <div class="text-subtitle-2 text-medium-emphasis">
              New customers
            </div>
          </div>
          <VChip
            color="success"
            size="small"
            variant="tonal"
          >
            <VIcon
              size="small"
              icon="bx-up-arrow-alt"
            />
            26.5%
          </VChip>
        </div>

        <div class="chart-wrapper">
          <VueApexCharts
            :options="chartOptions"
            :series="series"
            height="200"
          />
        </div>
      </div>
    </VCardItem>
  </VCard>
</template>
