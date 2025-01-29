<script setup lang="ts">
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import avatar2 from '@images/avatars/avatar-2.png'
import umbrella from '@images/pages/umbrella.jpg'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

const showComments = ref(false)
</script>

<template>
  <VCard
    title="Alice Lee"
    subtitle="2 weeks ago"
  >
    <template #prepend>
      <VAvatar :image="avatar2" />
    </template>

    <template #append>
      <VBtn
        icon
        size="30"
        variant="text"
        color="disabled"
      >
        <VIcon icon="bx-dots-vertical-rounded" />
      </VBtn>
    </template>

    <VImg
      :src="umbrella"
      height="130"
      cover
    />

    <VCardText>
      Chocolate jujubes lollipop bear claw tart toffee. Fruitcake cookie tart shortbread cake bonbon.
    </VCardText>

    <VDivider />

    <VCardActions>
      <VBtn color="error">
        <VIcon
          icon="bx-heart"
          class="me-2"
        />
        <span>30</span>
      </VBtn>

      <VSpacer />

      <VBtn
        size="small"
        @click="showComments = !showComments"
      >
        show comments
      </VBtn>
    </VCardActions>

    <VExpandTransition>
      <VCard
        v-show="showComments"
        subtitle="Comments"
        class="v-card--reveal"
        style="block-size: 100%;"
      >
        <template #append>
          <div>
            <VBtn
              icon
              variant="text"
              size="x-small"
              @click="showComments = false"
            >
              <VIcon
                size="20"
                icon="bx-x"
              />
            </VBtn>
          </div>
        </template>

        <VCardText class="comment-wrapper">
          <PerfectScrollbar
            :options="{ wheelPropagation: false, suppressScrollX: true }"
            class="h-100 mb-4"
          >
            <VList class="comment-list">
              <VListItem>
                <template #prepend>
                  <VAvatar
                    size="36"
                    :image="avatar2"
                  />
                </template>

                <VListItemTitle>
                  John Doe
                </VListItemTitle>
                <VListItemSubtitle>
                  2 weeks ago
                </VListItemSubtitle>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>

                <template #append>
                  <VBtn
                    icon
                    size="x-small"
                    variant="text"
                  >
                    <VIcon
                      size="24"
                      icon="bx-dots-vertical-rounded"
                    />
                  </VBtn>
                </template>
              </VListItem>
            </VList>
          </PerfectScrollbar>

          <VForm @submit.prevent="() => {}">
            <VTextarea
              rows="1"
              hide-details="auto"
              placeholder="Write a comment..."
            />

            <VBtn
              block
              type="submit"
              color="primary"
              variant="tonal"
              class="mt-2"
            >
              Comment
            </VBtn>
          </VForm>
        </VCardText>
      </VCard>
    </VExpandTransition>
  </VCard>
</template>

<style lang="scss">
.v-card--reveal {
  position: absolute;
  inline-size: 100%;
  inset-block-end: 0;
  opacity: 1 !important;
}

.comment-wrapper {
  block-size: calc(100% - 11rem);

  .comment-list {
    padding-block-start: 0;

    .v-list-item {
      padding-inline: 0;
    }

    .v-list-item-subtitle {
      margin-block-end: 1rem;
    }

    .v-list-item__prepend,
    .v-list-item__append {
      align-self: flex-start;
    }
  }
}
</style>
