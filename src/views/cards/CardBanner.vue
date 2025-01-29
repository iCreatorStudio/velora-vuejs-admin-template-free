<script lang="ts" setup>
import avatar from '@images/avatars/avatar-1.png'
import laptop from '@images/pages/working-laptop-while-sitting-chair.png'
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="8"
    >
      <VCard style="background-color: rgba(var(--v-theme-primary), 0.14);">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              sm="7"
              order="2"
              order-sm="1"
            >
              <h5 class="text-h5 font-weight-medium">
                Manage your monthly spends with ease and save more.
              </h5>
              <p class="text-medium-emphasis mt-sm-4 mb-1">
                45% off on all purchases above $199.
              </p>

              <p class="text-medium-emphasis mb-sm-4">
                Use code <strong>SAVE45</strong>.
              </p>

              <VBtn
                color="error"
                class="me-4"
              >
                Checkout
              </VBtn>

              <VBtn
                color="primary"
                variant="tonal"
              >
                Learn More
              </VBtn>
            </VCol>

            <VCol
              cols="12"
              sm="5"
              class="py-0"
              order="1"
              order-sm="2"
            >
              <div class="ms-sm-n6 my-sm-n8 w-100 text-sm-end text-center">
                <img
                  :src="laptop"
                  height="250"
                >
              </div>
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <VCol
      cols="12"
      sm="6"
      md="4"
    >
      <VCard style="background-color: rgba(var(--v-theme-warning), 0.14);">
        <VCardText class="text-center">
          <VBadge
            color="success"
            dot
            location="bottom end"
            offset-y="30"
          >
            <VAvatar
              size="62"
              :image="avatar"
              class="mb-4"
            />
          </VBadge>

          <h6 class="text-h5">
            John Doe
          </h6>
          <p>Software Engineer</p>

          <div>
            <VBtn
              icon
              rounded
              color="blue"
              class="me-3"
              size="x-small"
            >
              <VIcon
                size="22"
                icon="mdi-facebook"
              />
            </VBtn>
            <VBtn
              icon
              rounded
              color="info"
              size="x-small"
              class="me-3"
            >
              <VIcon
                size="22"
                icon="mdi-twitter"
              />
            </VBtn>
            <VBtn
              icon
              rounded
              color="error"
              size="x-small"
            >
              <VIcon
                size="22"
                icon="mdi-instagram"
              />
            </VBtn>
          </div>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
