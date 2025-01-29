<script setup lang="ts">
import { useTheme } from 'vuetify'
import { VForm } from 'vuetify/components/VForm'
import Logo from '@/components/Logo.vue'
import authBgDark from '@images/pages/auth-bg-dark.svg'
import authBgLight from '@images/pages/auth-bg-light.svg'
import authLoginImg from '@images/pages/working-desk-with-laptop.png'

const loginForm = ref<VForm>()
const isPasswordVisible = ref(true)
const isContentExpand = ref(true)
const theme = useTheme()

const loginData = ref({
  email: '',
  password: '',
})

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
          style="block-size: 33rem;"
        >
          <VCardText class="d-flex align-center gap-2 pt-0 pb-1 text-primary">
            <Logo />
            <h4 class="text-h4 text-primary">
              PrimeDash
            </h4>
          </VCardText>

          <VCardItem>
            <VCardTitle>
              Sign in
            </VCardTitle>
            <VCardSubtitle>To access template</VCardSubtitle>

            <template #append>
              <RouterLink
                :to="{ name: 'auth-register' }"
                class="text-body-2 text-medium-emphasis d-block d-md-none"
              >
                Register
              </RouterLink>
            </template>
          </VCardItem>

          <VCardText>
            <VAlert
              color="info"
              variant="tonal"
              class="mb-6"
            >
              <p class="mb-1">
                <strong>Email:</strong> <span>your@email.com</span>
              </p>
              <p class="mb-0">
                <strong>Password:</strong> <span>your_password</span>
              </p>
            </VAlert>

            <VForm
              ref="loginForm"
              @submit.prevent="() => { }"
            >
              <VExpandTransition>
                <div v-show="isContentExpand">
                  <VTextField
                    v-model="loginData.email"
                    label="Email"
                    :rules="[v => !!v || 'Email is required']"
                    class="mb-6"
                  />

                  <VBtn
                    block
                    color="primary"
                    @click="isContentExpand = !isContentExpand"
                  >
                    Next
                  </VBtn>
                </div>
              </VExpandTransition>

              <VExpandTransition>
                <div v-show="!isContentExpand">
                  <div
                    class="d-flex align-center border rounded py-1 px-2 mb-6"
                    :style="!loginData.email ? 'border-color:rgb(var(--v-theme-error)) !important' : ''"
                  >
                    <span class="text-caption">{{ loginData.email }}</span>

                    <VSpacer />

                    <VBtn
                      size="small"
                      color="primary"
                      variant="text"
                      @click="isContentExpand = !isContentExpand"
                    >
                      change
                    </VBtn>
                  </div>

                  <VTextField
                    v-model="loginData.password"
                    :type="isPasswordVisible ? 'password' : 'text'"
                    label="Password"
                    :rules="[v => !!v || 'User Name is required']"
                    :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
                    class="mb-6"
                    @click:append-inner="isPasswordVisible = !isPasswordVisible"
                  />

                  <div class="text-center mb-6">
                    <RouterLink :to="{ name: 'auth-forgot-password' }">
                      Forgot Password?
                    </RouterLink>
                  </div>

                  <VBtn
                    block
                    type="submit"
                    color="primary"
                  >
                    Login
                  </VBtn>
                </div>
              </VExpandTransition>
            </VForm>

            <div v-show="isContentExpand">
              <div class="d-flex align-center my-6">
                <VDivider />
                <span class="mx-3">OR</span>
                <VDivider />
              </div>

              <div class="d-flex justify-center gap-4">
                <VBtn
                  icon
                  variant="text"
                  color="primary"
                  size="small"
                >
                  <VIcon
                    size="24"
                    icon="mdi-facebook"
                  />
                </VBtn>

                <VBtn
                  icon
                  variant="text"
                  color="info"
                  size="small"
                >
                  <VIcon
                    size="24"
                    icon="mdi-twitter"
                  />
                </VBtn>

                <VBtn
                  icon
                  variant="text"
                  size="small"
                >
                  <VIcon
                    size="24"
                    icon="mdi-github"
                  />
                </VBtn>

                <VBtn
                  icon
                  variant="text"
                  color="error"
                  size="small"
                >
                  <VIcon
                    size="24"
                    icon="mdi-google"
                  />
                </VBtn>
              </div>
            </div>
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
              :src="authLoginImg"
            >
          </div>

          <h6 class="text-body-1 font-weight-semibold mb-3">
            Not Register yet?
          </h6>
          <p class="text-body-2">
            Lost access to OneAuth? Worry not. Set up passphrase and backup number to recover OneAuth easily.
          </p>
          <VBtn
            :to="{ name: 'auth-register' }"
            variant="outlined"
            color="primary"
            append-icon="bx-user"
          >
            Register
          </VBtn>
        </VCol>
      </VRow>
    </VCard>
  </div>
</template>

<style lang="scss">
@use "@styles/pages/auth.scss";
</style>
