<script setup>
const model = defineModel({ type: Boolean })
</script>

<template>
  <div class="flex items-center mb-4">
    <input
      v-bind="$attrs"
      type="checkbox"
      v-model="model"
      class="w-4 h-4 bg-gray-100 border-gray-300 rounded-sm text-slate-600 focus:ring-slate-500 focus:ring-2"
    />
    <label
      for="default-checkbox"
      class="text-sm font-medium text-gray-900 ms-2"
      ><slot
    /></label>
  </div>
</template>
