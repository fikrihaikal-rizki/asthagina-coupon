<script setup>
const props = defineProps({
  open: { type: Boolean, required: false }
})

const emits = defineEmits(['update:open'])

function setOpen(openValue) {
  emits('update:open', openValue)
}
</script>

<template>
  <div
    v-if="open"
    class="absolute z-10 flex items-center justify-center max-h-full backdrop-blur-sm inset-1 bg-gray-400/50"
  >
    <div
      class="p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div
        class="relative w-full max-w-md max-h-full"
      >
        <div
          class="relative bg-white rounded-lg shadow-sm"
        >
          <div
            class="flex items-center justify-between p-4 border-b border-gray-200 rounded-t md:p-5"
          >
            <h3
              class="text-xl font-medium text-gray-900"
            >
              <slot name="title" />
            </h3>
            <button
              @click="setOpen(false)"
              type="button"
              class="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto"
              data-modal-hide="small-modal"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only"
                >Close modal</span
              >
            </button>
          </div>
          <div class="p-4 space-y-4 md:p-5">
            <slot name="content" />
          </div>
          <div
            class="flex items-center p-4 border-t border-gray-200 rounded-b md:p-5"
          >
            <slot name="action" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
