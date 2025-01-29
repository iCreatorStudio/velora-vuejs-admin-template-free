<template>
  <VRow>
    <VCol
      cols="12"
      md="4"
      sm="6"
    >
      <VCard>
        <VCardText class="d-flex align-center justify-space-between">
          <div>
            <h4 class="text-h4">
              $92
            </h4>
            <span class="font-weight-semibold">Earnings</span>
          </div>

          <VProgressCircular
            size="56"
            color="success"
            model-value="35"
          />
        </VCardText>
      </VCard>
    </VCol>

    <VCol
      cols="12"
      md="4"
      sm="6"
    >
      <VCard>
        <VCardText class="d-flex align-center justify-space-between">
          <div>
            <h4 class="text-h4">
              335
            </h4>
            <span class="font-weight-semibold">New Subscribers</span>
          </div>

          <VProgressCircular
            size="56"
            color="primary"
            model-value="20"
          />
        </VCardText>
      </VCard>
    </VCol>

    <VCol
      cols="12"
      md="4"
      sm="6"
    >
      <VCard>
        <VCardText class="d-flex align-center justify-space-between">
          <div>
            <h4 class="text-h4">
              6369
            </h4>
            <span class="font-weight-semibold">Total Views</span>
          </div>

          <VProgressCircular
            size="56"
            color="info"
            model-value="70"
          />
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
