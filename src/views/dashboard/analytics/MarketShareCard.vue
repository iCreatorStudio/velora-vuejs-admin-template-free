<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'

const chartOptions = computed(() => ({
  chart: {
    type: 'donut',
  },
  plotOptions: {
    pie: {
      donut: {
        size: '80%',
      },
    },
  },
  colors: ['rgba(var(--v-theme-primary), 1)', 'rgba(var(--v-theme-success), 1)', 'rgba(var(--v-theme-info), 1)'],
  dataLabels: { enabled: false },
  legend: { show: false },
  stroke: { width: 0 },
}))

const series = computed(() => [12, 8, 6])

const companies = [
  { name: 'Samsung', color: 'rgba(var(--v-theme-primary), 1)' },
  { name: 'Huawei', color: 'rgba(var(--v-theme-success), 1)' },
  { name: 'Apple', color: 'rgba(var(--v-theme-info), 1)' },
]
</script>

<template>
  <VCard
    class="dashboard-card"
    elevation="2"
  >
    <VCardItem>
      <div class="d-flex flex-column">
        <div class="text-subtitle-1 mb-4">
          Market Share
        </div>

        <div class="d-flex align-center justify-center position-relative mb-4">
          <div class="text-h4 position-absolute">
            26M
          </div>
          <VueApexCharts
            :options="chartOptions"
            :series="series"
            type="donut"
            height="180"
            width="180"
          />
        </div>

        <div class="companies">
          <div
            v-for="company in companies"
            :key="company.name"
            class="d-flex align-center mb-2"
          >
            <div
              class="legend-dot me-2"
              :style="{ backgroundColor: company.color }"
            />
            <span class="text-caption">{{ company.name }}</span>
          </div>
        </div>
      </div>
    </VCardItem>
  </VCard>
</template>

<style scoped>
.legend-dot {
  border-radius: 50%;
  block-size: 8px;
  inline-size: 8px;
}
</style>
