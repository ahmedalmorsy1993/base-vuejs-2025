<template>
  <section class="grid items-center gap-1.5">
    <label
      class="transition-all text-xs duration-300"
      :class="{
        'text-red-500': hasError,
      }"
      :htmlFor="name"
      >{{ label }}</label
    >
    <div class="mb-2 relative">
      <Input
        :id="name"
        v-model="value"
        v-bind="$attrs"
        class="transition-all !outline-0 !ring-0 duration-300 border"
        :class="{
          'border-red-500': hasError,
        }"
      />
      <transition name="page">
        <ErrorMessage
          v-if="hasError"
          :name="name"
          class="capitalize text-xs text-red-500 absolute bottom-[-20px]"
        />
      </transition>
    </div>
  </section>
</template>

<script setup lang="ts">
interface IProps {
  name: string
  label: string
}
import Input from '@/components/ui/input/Input.vue'
import { ErrorMessage, useField } from 'vee-validate'
import { computed } from 'vue'
const { name = '' } = defineProps<IProps>()
const { value, errors } = useField<string | number>(name)
const hasError = computed(() => errors.value.length > 0)
</script>
