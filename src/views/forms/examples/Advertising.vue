<script setup lang="ts">
const ratings = [
  {
    title: '0',
    value: '0',
  },
  {
    title: '1',
    value: '1',
  },
  {
    title: '2',
    value: '2',
  },
  {
    title: '3',
    value: '3',
  },
  {
    title: '4',
    value: '4',
  },
  {
    title: '5 or more',
    value: '5 or more',
  },
]

const options = [
  {
    title: 'Strongly Agree',
    value: 'Strongly Agree',
  },
  {
    title: 'Neutral Agree',
    value: 'Neutral Agree',
  },
  {
    title: 'Agree',
    value: 'Agree',
  },
  {
    title: 'Neutral Disagree',
    value: 'Neutral Disagree',
  },
  {
    title: 'Strongly Disagree',
    value: 'Strongly Disagree',
  },
]

const formData = ref({
  claimsBelievable: '',
  understoodAdd: '',
  creativeAdd: '',
  originalAdd: '',
  rememberAdd: '',
  leastLikeDescription: '',
  seenTimes: '',
  seenMedium: [],
  seenMediumOther: '',
})

const breadcrumbs = [
  {
    title: 'Home',
    disabled: false,
    to: { path: '/' },
  },
  {
    title: 'Forms',
    disabled: true,
  },
  {
    title: 'Advertising',
    disabled: true,
  },
]
</script>

<template>
  <VRow>
    <!-- Breadcrumbs -->
    <VCol cols="12">
      <VBreadcrumbs
        :items="breadcrumbs"
        class="border rounded"
      />
    </VCol>

    <VCol cols="12">
      <VCard title="Advertising Evaluation Form">
        <VCardText>
          <VForm @submit.prevent="() => {}">
            <VRow>
              <VCol cols="12">
                <p>
                  Please choose the best answer for each of the following.
                </p>

                <div class="multiple-options">
                  <div class="d-flex align-center justify-space-between gap-6 pa-2 bg-background m-item">
                    <p class="mb-0">
                      The claims made in the ads were believable
                    </p>
                    <div>
                      <VRadioGroup
                        v-model="formData.claimsBelievable"
                        inline
                        :rules="[v => !!v || 'Item is required']"
                      >
                        <VRadio
                          v-for="option in options"
                          :key="option.title"
                          :value="option.value"
                          :label="option.title"
                        />
                      </VRadioGroup>
                    </div>
                  </div>

                  <div class="d-flex  align-center justify-space-between gap-6 pa-2 m-item">
                    <p class="mb-0">
                      I understood the product being advertised
                    </p>
                    <div>
                      <VRadioGroup
                        v-model="formData.understoodAdd"
                        inline
                        :rules="[v => !!v || 'Item is required']"
                      >
                        <VRadio
                          v-for="option in options"
                          :key="option.title"
                          :value="option.value"
                          :label="option.title"
                        />
                      </VRadioGroup>
                    </div>
                  </div>

                  <div class="d-flex  align-center justify-space-between gap-6 pa-2 bg-background m-item">
                    <p class="mb-0">
                      The ads were creative
                    </p>
                    <div>
                      <VRadioGroup
                        v-model="formData.creativeAdd"
                        inline
                        :rules="[v => !!v || 'Item is required']"
                      >
                        <VRadio
                          v-for="option in options"
                          :key="option.title"
                          :value="option.value"
                          :label="option.title"
                        />
                      </VRadioGroup>
                    </div>
                  </div>

                  <div class="d-flex  align-center justify-space-between gap-6 pa-2 m-item">
                    <p class="mb-0">
                      The ads were original
                    </p>
                    <div>
                      <VRadioGroup
                        v-model="formData.originalAdd"
                        inline
                        :rules="[v => !!v || 'Item is required']"
                      >
                        <VRadio
                          v-for="option in options"
                          :key="option.title"
                          :value="option.value"
                          :label="option.title"
                        />
                      </VRadioGroup>
                    </div>
                  </div>

                  <div class="d-flex  align-center justify-space-between gap-6 pa-2 bg-background m-item">
                    <p class="mb-0">
                      I will remember the ads for a long time
                    </p>
                    <div>
                      <VRadioGroup
                        v-model="formData.rememberAdd"
                        inline
                        :rules="[v => !!v || 'Item is required']"
                      >
                        <VRadio
                          v-for="option in options"
                          :key="option.title"
                          :value="option.value"
                          :label="option.title"
                        />
                      </VRadioGroup>
                    </div>
                  </div>
                </div>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <p>In the past week, how many times have you seen an advertisement for this product?</p>
                <VRadioGroup
                  v-model="formData.seenTimes"
                  :rules="[v => !!v || 'Please choose any one option']"
                >
                  <VRadio
                    v-for="rating in ratings"
                    :key="rating.title"
                    :label="rating.title"
                    :value="rating.value"
                  />
                </VRadioGroup>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <p>In the past week, how many times have you seen an advertisement for this product?</p>
                <div>
                  <VCheckbox
                    v-model="formData.seenMedium"
                    label="Billboard"
                    value="billboard"
                    density="compact"
                  />
                  <VCheckbox
                    v-model="formData.seenMedium"
                    label="Magazine"
                    value="magazine"
                    density="compact"
                  />
                  <VCheckbox
                    v-model="formData.seenMedium"
                    label="Newspaper"
                    value="newspaper"
                    density="compact"
                  />
                  <VCheckbox
                    v-model="formData.seenMedium"
                    label="TV commercial"
                    value="tv-commercial"
                    density="compact"
                  />

                  <VTextField
                    v-model="formData.seenMediumOther"
                    label="Other"
                    density="compact"
                    class="mt-4"
                    style="max-inline-size: 10rem;"
                    :rules="[v => !!v || !!formData.seenMedium.length || 'Choose any above one option or fill this field']"
                  />
                </div>
              </VCol>

              <VCol cols="12">
                <p>What did you least like about the ads?</p>
                <VTextarea
                  v-model="formData.leastLikeDescription"
                  :rules="[v => !!v || 'This field is required']"
                />
              </VCol>

              <VCol cols="12">
                <VBtn
                  type="submit"
                  color="primary"
                >
                  Submit
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
.m-item {
  min-inline-size: 70.1875rem;
}

.multiple-options {
  overflow-x: scroll;

  .v-selection-control-group--inline {
    flex-wrap: nowrap;
    gap: 0.375rem;

    .v-label {
      white-space: nowrap;
    }
  }
}
</style>
