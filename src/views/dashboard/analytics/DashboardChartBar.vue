<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'

interface Props {
  title: string
  value: string | number
  percentage: number
  timeRange: string
  chartData: number[]
  subtitle?: string
  footerIcon?: string
  footerMainText?: string
  footerSubText?: string
}

const props = withDefaults(defineProps<Props>(), {
  subtitle: '',
  footerIcon: '',
  footerMainText: '',
  footerSubText: '',
})

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
  name: props.title,
  data: props.chartData,
}])

const percentageColor = computed(() =>
  props.percentage > 0 ? 'success' : props.percentage < 0 ? 'error' : 'grey',
)

const percentageIcon = computed(() =>
  props.percentage > 0 ? 'bx-up-arrow-alt' : props.percentage < 0 ? 'bx-down-arrow-alt' : 'bx-minus',
)
</script>

<template>
  <VCard
    class="dashboard-card"
    elevation="2"
  >
    <VCardItem class="pb-0">
      <div class="d-flex justify-space-between align-start mb-4">
        <div>
          <div class="text-subtitle-2 text-medium-emphasis">
            {{ title }}
          </div>
          <div class="d-flex align-center">
            <span class="text-h4 font-weight-bold me-3">{{ value }}</span>
            <VChip
              :color="percentageColor"
              size="small"
              class="me-2"
              variant="tonal"
            >
              <VIcon
                size="small"
                :icon="percentageIcon"
              />
              {{ Math.abs(percentage) }}%
            </VChip>
          </div>
          <div
            v-if="subtitle"
            class="text-caption text-medium-emphasis"
          >
            {{ subtitle }}
          </div>
        </div>
        <VBtn
          variant="text"
          density="comfortable"
          class="text-caption"
        >
          {{ timeRange }} <VIcon
            size="small"
            icon="bx-chevron-down"
          />
        </VBtn>
      </div>

      <div class="chart-wrapper">
        <VueApexCharts
          :options="chartOptions"
          :series="series"
          height="80"
        />
      </div>
    </VCardItem>
  </VCard>
</template>
