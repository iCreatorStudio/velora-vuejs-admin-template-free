<script setup lang="ts">
import { useTheme } from 'vuetify'
import { VForm } from 'vuetify/components/VForm'
import Logo from '@/components/Logo.vue'
import authBgDark from '@images/pages/auth-bg-dark.svg'
import authBgLight from '@images/pages/auth-bg-light.svg'
import authForgotPasswordImg from '@images/pages/girl-forgot-something.png'

const forgetPasswordForm = ref<VForm>()
const theme = useTheme()
const email = ref('')

const authBgThemeVariant = computed(() => {
  return theme.current.value.dark ? authBgDark : authBgLight
})
</script>

<template>
  <div class="auth-wrapper">
    <VCard
      max-width="900"
      :width="$vuetify.display.smAndDown ? '500' : 'auto'"
    >
      <VRow no-gutters>
        <VCol
          md="6"
          cols="12"
          class="pa-sm-8 pa-4"
        >
          <VCardText class="d-flex align-center gap-2 pt-0 pb-1 text-primary">
            <Logo />
            <h4 class="text-h4 text-primary">
              PrimeDash
            </h4>
          </VCardText>

          <VCardItem>
            <VCardTitle>Forgot Password?</VCardTitle>
          </VCardItem>

          <VCardText>
            <p>Enter your registered email address to change your mail account password.</p>

            <VForm ref="forgetPasswordForm">
              <VRow>
                <VCol cols="12">
                  <VTextField
                    v-model="email"
                    label="Email"
                    :rules="[v => !!v || 'Email is required']"
                  />
                </VCol>

                <VCol cols="12">
                  <VBtn
                    block
                    type="submit"
                    color="primary"
                    class="mb-3"
                  >
                    Send Reset Link
                  </VBtn>

                  <VBtn
                    block
                    variant="text"
                    color="secondary"
                    size="small"
                    prepend-icon="bx-chevrons-left"
                    :to="{ name: 'login' }"
                  >
                    Back to login
                  </VBtn>
                </VCol>
              </VRow>
            </VForm>
          </VCardText>
        </VCol>

        <VCol
          cols="6"
          class="pa-8 text-center border-s d-none d-md-block"
          :style="`background-image:url(${authBgThemeVariant});`"
        >
          <div class="d-flex align-center justify-center">
            <img
              width="280"
              :src="authForgotPasswordImg"
            >
          </div>
        </VCol>
      </VRow>
    </VCard>
  </div>
</template>

<style lang="scss">
@use "@styles/pages/auth.scss";
</style>
