<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'

const chartOptions = computed(() => ({
  chart: {
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      hollow: {
        size: '70%',
      },
      track: {
        background: 'rgba(var(--v-theme-on-surface), var(--v-hover-opacity))',
        startAngle: -135,
        endAngle: 135,
      },
      dataLabels: {
        name: { show: false },
        value: {
          fontSize: '24px',
          fontWeight: 600,
          color: 'rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity))',
          formatter(val: number) {
            return `${val}%`
          },
        },
      },
    },
  },
  colors: ['rgba(var(--v-theme-primary), 1)'],
  stroke: {
    lineCap: 'round',
  },
}))

const series = computed(() => [30])

const customerTypes = [
  { label: 'Paying customer', value: '30%', color: '#1A73E8' },
  { label: 'Non-paying customer', value: '70%', color: '#E8F0FE' },
]
</script>

<template>
  <VCard
    class="dashboard-card"
    elevation="2"
  >
    <VCardItem>
      <div class="d-flex flex-column">
        <div class="mb-4">
          <div class="text-h6">
            Paying vs non paying
          </div>
          <div class="text-subtitle-2 text-medium-emphasis">
            Last 7 days
          </div>
        </div>

        <div class="chart-wrapper d-flex justify-center mb-4">
          <VueApexCharts
            :options="chartOptions"
            :series="series"
            type="radialBar"
            height="200"
            width="200"
          />
        </div>

        <div class="customer-types">
          <div
            v-for="(type, index) in customerTypes"
            :key="index"
            class="d-flex align-center mb-2"
          >
            <div
              class="legend-dot me-2"
              :style="{ backgroundColor: type.color }"
            />
            <span class="text-caption flex-grow-1">{{ type.label }}</span>
            <span class="text-caption font-weight-bold">{{ type.value }}</span>
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
