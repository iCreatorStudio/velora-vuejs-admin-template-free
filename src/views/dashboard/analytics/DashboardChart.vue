<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'

const props = withDefaults(defineProps<Props>(), {
  subtitle: '',
  footerIcon: '',
  footerMainText: '',
  footerSubText: '',
})

const vuetifyTheme = useTheme()

const currentTheme = computed(() => vuetifyTheme.current.value.colors)
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
    <VCardItem>
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
          density="compact"
          class="text-caption"
        >
          {{ timeRange }} <VIcon
            size="small"
            icon="bx-chevron-down"
          />
        </VBtn>
      </div>
    </VCardItem>

    <div class="chart-wrapper">
      <VueApexCharts
        :options="chartOptions"
        :series="series"
        height="60"
      />
    </div>
  </VCard>
</template>
