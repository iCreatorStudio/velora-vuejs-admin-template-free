<script setup lang="ts">
const messages = [
  {
    from: 'You',
    message: 'Sure, I\'ll see you later.',
    time: '10:42am',
    color: 'primary',
  },
  {
    from: 'John Doe',
    message: 'Yeah, sure. Does 1:00pm work?',
    time: '10:37am',
    color: 'success',
  },
  {
    from: 'You',
    message: 'Did you still want to grab lunch today?',
    time: '9:47am',
    color: 'warning',
  },
]
</script>

<template>
  <VCard title="Today">
    <VCardText>
      <VTimeline
        density="compact"
        align="start"
      >
        <VTimelineItem
          v-for="message in messages"
          :key="message.time"
          :dot-color="message.color"
          size="x-small"
        >
          <div class="mb-4">
            <div class="font-weight-normal">
              <strong>{{ message.from }}</strong> @{{ message.time }}
            </div>
            <div>{{ message.message }}</div>
          </div>
        </VTimelineItem>
      </VTimeline>
    </VCardText>
  </VCard>
</template>
