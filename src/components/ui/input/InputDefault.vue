<script setup>
import { useVModel } from '@vueuse/core'

const props = defineProps({
  defaultValue: {
    type: [String, Number],
    required: false
  },
  modelValue: {
    type: [String, Number],
    required: false
  }
})

const emits = defineEmits(['update:modelValue'])

const modelValue = useVModel(
  props,
  'modelValue',
  emits,
  {
    passive: true,
    defaultValue: props.defaultValue
  }
)
</script>

<template>
  <input
    v-model="modelValue"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
  />
</template>
