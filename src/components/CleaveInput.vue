<script setup lang="ts">
import Cleave from 'cleave.js'

const props = defineProps<{
  modelValue: string | undefined
  options: unknown
  error?: boolean
  placeholder?: string
  errorMessages?: string
  label?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | undefined): void
}>()

const inputRef = ref<HTMLInputElement>()

let cleaveInstance: any = null

onMounted(() => {
  cleaveInstance = new Cleave(inputRef.value, props.options)
})

onUnmounted(() => {
  if (cleaveInstance)
    cleaveInstance.destroy()
})

const updateValue = (value: any) => {
  if (value && !cleaveInstance.isBackward)
    emit('update:modelValue', cleaveInstance.lastInputValue)

  else
    emit('update:modelValue', value)
}
</script>

<template>
  <div
    class="v-custom-input-filed"
    :class="[
      props.modelValue && props.modelValue.length ? 'v-custom-input-dirty' : '',
      props.error ? 'invalid' : '',
    ]"
  >
    <VLabel class="position-relative w-100 pt-2 mt-n2">
      <input
        ref="inputRef"
        :value="props.modelValue"
        :placeholder="props.placeholder"
        class="v-cleave-input rounded"
        @input="updateValue"
      >

      <div
        v-show="props.label"
        class="label-text"
      >
        {{ props.label }}
      </div>
    </VLabel>

    <div
      v-show="props.error && props.errorMessages"
      class="v-messages v-custom-input-message"
    >
      <span>{{ props.errorMessages }}</span>
    </div>
  </div>
</template>

<style lang="scss">
%input-dirty {
  font-size: 0.75rem;
  inset-block-start: 0;
  transform: translateY(2px);
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}

.v-custom-input-filed {
  input::placeholder {
    opacity: 0;
  }

  .v-cleave-input {
    border: 1px solid rgba(var(--v-theme-on-surface), 0.38);
    inline-size: 100%;
    padding-block: 8px;
    padding-inline: 15px;
    transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);

    &:focus,
    &:focus-visible {
      // border-width: 2px;
      border-color: rgb(var(--v-theme-primary));
      outline: none;
    }
  }

  .v-custom-input-message {
    padding-block-start: 6px;
    padding-inline: 16px;
  }

  .label-text {
    position: absolute;
    background-color: rgb(var(--v-theme-surface));
    contain: layout paint;
    font-size: 0.875rem;
    inset-block-start: 58%;
    line-height: 1;
    margin-inline: 16px;
    padding-inline: 4px;
    transform: translateY(-50%);
    transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &.v-custom-input-dirty {
    .label-text {
      @extend %input-dirty;
    }
    input::placeholder { opacity: 1; }
  }

  &.invalid {
    .v-cleave-input {
      border-color: rgb(var(--v-theme-error));
    }

    .label-text,
    .v-custom-input-message {
      color: rgb(var(--v-theme-error));
      opacity: 1;
    }
  }

  .v-cleave-input:focus {
    &::placeholder { opacity: 1; }

    + .label-text {
      @extend %input-dirty;
    }
  }
}
</style>
