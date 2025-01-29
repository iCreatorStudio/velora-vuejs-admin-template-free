<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'

const orderData = {
  completed: [120, 150, 110, 140, 130, 145, 135, 160],
  pending: [100, 120, 90, 110, 100, 115, 105, 130],
}

const chartOptions = computed(() => ({
  chart: {
    parentHeightOffset: 0,
    stacked: true,
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
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'all',
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
      bottom: -20,
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
  responsive: [
    {
      breakpoint: 1468,
      options: {
        plotOptions: {
          bar: {
            columnWidth: '22%',
          },
        },
      },
    },
    {
      breakpoint: 1197,
      options: {
        chart: {
          height: 228,
        },
        plotOptions: {
          bar: {
            borderRadius: 8,
            columnWidth: '26%',
          },
        },
      },
    },
    {
      breakpoint: 783,
      options: {
        chart: {
          height: 232,
        },
        plotOptions: {
          bar: {
            borderRadius: 6,
            columnWidth: '28%',
          },
        },
      },
    },
    {
      breakpoint: 589,
      options: {
        plotOptions: {
          bar: {
            columnWidth: '16%',
          },
        },
      },
    },
    {
      breakpoint: 520,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 6,
            columnWidth: '18%',
          },
        },
      },
    },
    {
      breakpoint: 426,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 5,
            columnWidth: '20%',
          },
        },
      },
    },
    {
      breakpoint: 381,
      options: {
        plotOptions: {
          bar: {
            columnWidth: '24%',
          },
        },
      },
    },
  ],
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

const series = computed(() => [
  { name: 'Completed', data: orderData.completed },
  { name: 'Pending', data: orderData.pending },
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
              16,247
            </div>
            <div class="text-subtitle-2 text-medium-emphasis">
              Total orders
            </div>
          </div>
          <VChip
            color="error"
            size="small"
            variant="tonal"
          >
            <VIcon
              size="small"
              icon="bx-down-arrow-alt"
            />
            6.8%
          </VChip>
        </div>

        <div class="chart-wrapper mb-4 border-b">
          <VueApexCharts
            :options="chartOptions"
            :series="series"
            height="120"
          />
        </div>

        <div class="d-flex justify-space-between">
          <div class="d-flex align-center">
            <div class="legend-dot completed me-2" />
            <span class="text-caption">Completed</span>
            <span class="text-caption font-weight-bold ms-2">52%</span>
          </div>
          <div class="d-flex align-center">
            <div class="legend-dot pending me-2" />
            <span class="text-caption">Pending payment</span>
            <span class="text-caption font-weight-bold ms-2">48%</span>
          </div>
        </div>
      </div>
    </VCardItem>
  </VCard>
</template>
