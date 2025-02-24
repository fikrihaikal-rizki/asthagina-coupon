<script setup>
import AlertDefault from '@/components/ui/alert/AlertDefault.vue'
import AlertError from '@/components/ui/alert/AlertError.vue'
import AlertLoading from '@/components/ui/alert/AlertLoading.vue'
import { getLoading } from '@/state/loadingState.js'

import {
  close,
  getErrorMessage,
  getInfoMessage,
  isViewError,
  isViewInfo
} from '@/state/alertState'
</script>
<template>
  <div
    @click="close()"
    class="absolute z-10 flex items-center justify-center max-h-full bg-white/30 backdrop-blur-sm inset-1"
  >
    <AlertDefault
      v-if="isViewInfo()"
      :message="getInfoMessage()"
    />
    <AlertError
      v-if="isViewError()"
      :message="getErrorMessage()"
    />
    <AlertLoading v-if="getLoading()" />
  </div>
</template>
