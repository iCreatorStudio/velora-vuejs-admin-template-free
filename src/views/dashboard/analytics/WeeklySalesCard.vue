<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'

const salesData = [42, 47, 45, 43, 42, 43, 44]

const chartOptions = computed(() => ({
  chart: {
    parentHeightOffset: 0,
    type: 'bar',
    toolbar: { show: false },
  },
  tooltip: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '18%',
      borderRadius: 4,
    },
  },
  colors: [
    'rgba(var(--v-theme-primary), 1)',
    'rgba(var(--v-theme-secondary), 1)',
  ],
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
    padding: {
      top: -40,
      bottom: 0,
      left: -10,
      right: -2,
    },
  },
  xaxis: {
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
    labels: {
      show: false,
    },
  },
  states: {
    hover: {
      filter: {
        type: 'none',
      },
    },
    active: {
      filter: {
        type: 'none',
      },
    },
  },
}))

const series = computed(() => [{
  name: 'Sales',
  data: salesData,
}])
</script>

<template>
  <VCard
    class="dashboard-card"
    elevation="2"
  >
    <VCardItem>
      <div class="d-flex flex-column">
        <div class="d-flex align-center justify-space-between mb-4">
          <div class="text-subtitle-1">
            Weekly Sales
          </div>
          <VIcon
            icon="bx-help-circle"
            color="grey"
          />
        </div>

        <div class="text-h4 mb-2">
          $47K
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
          3.5%
        </VChip>

        <div class="chart-wrapper">
          <VueApexCharts
            :options="chartOptions"
            :series="series"
            height="160"
          />
        </div>
      </div>
    </VCardItem>
  </VCard>
</template>
