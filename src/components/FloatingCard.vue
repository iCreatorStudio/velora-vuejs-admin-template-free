<script setup lang="ts">
interface Props {
  image?: object
  title?: string
  subtitle?: string
}
const props = defineProps<Props>()
</script>

<template>
  <VCard class="floating-card">
    <!-- image name slot -->
    <template v-if="$slots.floatingContent || props.image">
      <!-- always use html img tag instead of vuetify v-img component -->

      <div class="floating-content">
        <slot name="floatingContent">
          <img
            v-bind="props.image"
            alt="floating img"
            class="w-100"
          >
        </slot>
      </div>
    </template>

    <!-- header -->
    <template v-if="$slots.header || props.title || props.subtitle">
      <slot name="header">
        <VCardItem>
          <VCardTitle v-if="props.title">
            {{ props.title }}
          </VCardTitle>
          <VCardSubtitle v-if="props.subtitle">
            {{ props.subtitle }}
          </VCardSubtitle>

          <template
            v-if="$slots.append"
            #append
          >
            <slot name="append" />
          </template>

          <template
            v-if="$slots.prepend"
            #prepend
          >
            <slot name="prepend" />
          </template>
        </VCardItem>
      </slot>
    </template>

    <!-- default slot -->
    <slot />
  </VCard>
</template>

<style lang="scss">
@use "@styles/vuetify/variables.scss" as vuetify;
@use "vuetify/lib/styles/tools/_elevation" as mixins_elevation;

.floating-card {
  overflow: visible;
  margin-block-start: 1.5625rem;

  .floating-content {
    position: relative;
    margin-inline: vuetify.$card-text-padding;
    transform: translate3d(0, -1.5625rem, 0);
    transition: all 0.5s ease-in-out;

    >  :first-child {
      border-radius: vuetify.$card-border-radius;

      @include mixins_elevation.elevation(10);
    }

    + div {
      margin-block-start: -1.5rem;
    }
  }

  &:hover {
    .floating-content {
      transform: translate3d(0, -3.125rem, 0);

      > :first-child {
        @include mixins_elevation.elevation(15);
      }
    }
  }

  &.no-transition {
    &:hover {
      .floating-content {
        transform: translate3d(0, -1.5625rem, 0);
      }
    }
  }
}
</style>
