<template>
  <VContainer>
    <VCard title="This is blank page that use blank layout.">
      <VCardText class="bg-black">
        <pre>
{
  path: '/blank',
  name: 'blank',
  component: () => import('@/views/Blank.vue'),
  meta: {
    layout: 'blank',
  },
},
</pre>
      </VCardText>
      <VCardActions>
        <VBtn
          :to="{ name: 'home' }"
          color="primary"
        >
          Home
        </VBtn>
      </VCardActions>
    </VCard>
  </VContainer>
</template>
