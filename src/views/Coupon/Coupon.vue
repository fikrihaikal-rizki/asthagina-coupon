<script setup>
import {
  generate,
  couponQr,
  getData,
  downloadSVG
} from './coupon.js'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

onMounted(() => {
  generate.value = route.params.generate
  getData()
})
</script>
<template>
  <div
    @click="downloadSVG(this)"
    class="flex items-center justify-center w-full h-screen"
  >
    <div
      href="#"
      class="block max-w-sm p-6 text-center bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50"
    >
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900"
      >
        Kupon Sahur Puri Asthagina
      </h5>
      <div class="pb-5 font-normal text-gray-700">
        <div
          id="generatedQrCode"
          v-html="couponQr"
        ></div>
      </div>
      <p class="text-sm text-gray-400">
        Tap to Download
      </p>
    </div>
  </div>
</template>
