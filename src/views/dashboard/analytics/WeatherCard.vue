<script setup lang="ts">
interface WeatherData {
  city: string
  temperature: number
  low: number
  high: number
  condition: string
  precipitation: number
  humidity: number
  windSpeed: number
}

const weatherData: WeatherData = {
  city: 'New York City',
  temperature: 31,
  low: 25,
  high: 32,
  condition: 'Sunny',
  precipitation: 50,
  humidity: 65,
  windSpeed: 12,
}

const getWeatherIcon = (condition: string): string => {
  const icons = {
    Sunny: 'bx-sun',
    Cloudy: 'bx-cloud',
    Rainy: 'bx-cloud-rain',
    Stormy: 'bx-cloud-lightning',
    Snowy: 'bx-cloud-snow',
  }

  return icons[condition as keyof typeof icons] || 'bx-sun'
}

const getWeatherColor = (condition: string): string => {
  const colors = {
    Sunny: 'warning',
    Cloudy: 'grey',
    Rainy: 'info',
    Stormy: 'error',
    Snowy: 'primary',
  }

  return colors[condition as keyof typeof colors] || 'warning'
}
</script>

<template>
  <VCard elevation="2">
    <VCardItem>
      <VCardTitle class="d-flex justify-space-between align-center">
        <span>Weather</span>
        <VBtn
          icon="bx-refresh"
          variant="text"
          density="comfortable"
          size="small"
        />
      </VCardTitle>

      <VCardText>
        <div class="d-flex flex-column">
          <!-- Main Weather Info -->
          <div class="d-flex justify-space-between flex-wrap align-center mb-6">
            <VIcon
              :icon="getWeatherIcon(weatherData.condition)"
              :color="getWeatherColor(weatherData.condition)"
              size="64"
              class="me-6"
            />
            <div>
              <div class="text-h2 font-weight-bold">
                {{ weatherData.temperature }}°
              </div>
              <div class="text-h6 text-medium-emphasis">
                {{ weatherData.condition }}
              </div>
            </div>
          </div>

          <!-- Location -->
          <div class="text-h6 mb-4">
            {{ weatherData.city }}
          </div>

          <!-- Weather Details -->
          <VRow>
            <VCol cols="6">
              <div class="d-flex align-center mb-2">
                <VIcon
                  icon="bxs-thermometer"
                  size="20"
                  class="me-2"
                />
                <span class="text-body-1">High/Low</span>
              </div>
              <div class="text-body-2 text-medium-emphasis">
                {{ weatherData.high }}° / {{ weatherData.low }}°
              </div>
            </VCol>

            <VCol cols="6">
              <div class="d-flex align-center mb-2">
                <VIcon
                  icon="bx-droplet"
                  size="20"
                  class="me-2"
                />
                <span class="text-body-1">Precipitation</span>
              </div>
              <div class="text-body-2 text-medium-emphasis">
                {{ weatherData.precipitation }}%
              </div>
            </VCol>
          </VRow>
        </div>
      </VCardText>
    </VCardItem>
  </VCard>
</template>
