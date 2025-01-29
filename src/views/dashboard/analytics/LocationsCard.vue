<script setup lang="ts">
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

interface Location {
  id: number
  name: string
  coordinates: [number, number]
  value: number
}

const locations: Location[] = [
  { id: 1, name: 'United States', coordinates: [37.0902, -95.7129], value: 75 },
  { id: 2, name: 'China', coordinates: [35.8617, 104.1954], value: 100 },
  { id: 3, name: 'Canada', coordinates: [56.1304, -106.3468], value: 50 },
  { id: 4, name: 'Alaska', coordinates: [64.2008, -149.4937], value: 25 },
]

const mapContainer = ref<HTMLElement | null>(null)
let map: L.Map

onMounted(() => {
  if (!mapContainer.value)
    return

  // Initialize map
  map = L.map(mapContainer.value, {
    center: [20, 0],
    zoom: 2,
    zoomControl: true,
    attributionControl: false,
  })

  // Add tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 2,
  }).addTo(map)

  // Custom marker icon
  const customIcon = L.divIcon({
    className: 'custom-marker',
    html: '<div class="marker-inner"></div>',
    iconSize: [12, 12],
  })

  // Add markers for each location
  locations.forEach(location => {
    const marker = L.marker(location.coordinates, { icon: customIcon }).addTo(map)

    // Add popup
    marker.bindPopup(`
      <div class="popup-content">
        <strong>${location.name}</strong>
        <br>
        Value: ${location.value}
      </div>
    `)

    // Add pulse effect based on value
    const pulseSize = (location.value / 100) * 30 // Max size 30px

    const pulse = L.divIcon({
      className: 'pulse-marker',
      html: `<div class="pulse" style="width: ${pulseSize}px; height: ${pulseSize}px;"></div>`,
      iconSize: [pulseSize, pulseSize],
    })

    L.marker(location.coordinates, { icon: pulse }).addTo(map)
  })
})
</script>

<template>
  <VCard>
    <VCardTitle class="text-h6 pt-4 pb-2">
      Locations
    </VCardTitle>
    <VCardText>
      <div
        ref="mapContainer"
        style=" border-radius: 8px;block-size: 400px; inline-size: 100%;"
      />
    </VCardText>
  </VCard>
</template>

<style lang="scss">
.custom-marker {
  background: transparent;
}

.marker-inner {
  border: 2px solid white;
  border-radius: 50%;
  background: rgb(var(--v-theme-primary));
  block-size: 12px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 30%);
  inline-size: 12px;
}

.pulse-marker {
  background: transparent;
}

.pulse {
  border-radius: 50%;
  animation: pulse 2s infinite;
  background: rgba(var(--v-theme-primary), 20%);
}

@keyframes pulse {
  0% {
    opacity: 1;
    transform: scale(1);
  }

  100% {
    opacity: 0;
    transform: scale(2);
  }
}

.popup-content {
  padding: 8px;
  text-align: center;
}

.leaflet-container {
  font-family: inherit;
}
</style>
