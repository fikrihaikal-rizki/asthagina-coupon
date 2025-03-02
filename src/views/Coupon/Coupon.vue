<script setup>
import InputLabel from '@/components/ui/input/InputLabel.vue'
import {
  generate,
  couponQr,
  getData,
  downloadCoupon,
  attendance
} from './coupon.js'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import InputDefault from '@/components/ui/input/InputDefault.vue'

const route = useRoute()

onMounted(() => {
  generate.value = route.params.generate
  getData()
})
</script>
<template>
  <div
    class="flex items-center justify-center w-full max-h-full"
  >
    <div>
      <p
        class="p-3 text-sm font-bold text-center text-gray-400"
      >
        Tap to Download
      </p>
      <div id="coupon" @click="downloadCoupon()">
        <div
          class="block text-center bg-green-500 border rounded-t-lg shadow-sm hover:bg-green-600 rounded-b-3xl"
        >
          <div
            class="pt-2 pb-1 pl-6 pr-6 text-white rounded-t-lg"
          >
            <h5
              class="text-2xl font-bold tracking-tight"
            >
              Kupon Sahur Puri Asthagina
            </h5>
          </div>
          <div
            class="text-2xl font-normal text-gray-700"
          >
            <div
              id="generatedQrCode"
              v-html="couponQr"
            ></div>
          </div>
          <p
            class="py-2 text-xl font-bold tracking-tight text-white"
          >
            {{ attendance.linkDate }}
          </p>
        </div>
        <div
          class="block px-1 py-6 bg-green-500 border-t-4 border-black border-dashed rounded-b-lg shadow-sm rounded-t-3xl hover:bg-green-600"
        >
          <div
            class="block p-4 text-black bg-white rounded-lg"
          >
            <InputLabel for="nama" class="mt-1"
              >Nama Lengkap</InputLabel
            >
            <InputDefault
              readonly
              type="text"
              name="nama"
              id="nama"
              v-model="attendance['Nama Lengkap']"
            />
            <InputLabel for="alamat" class="mt-1"
              >Alamat Kos</InputLabel
            >
            <InputDefault
              readonly
              type="text"
              name="alamat"
              id="alamat"
              v-model="attendance['Alamat Kos']"
            />
            <InputLabel for="phone" class="mt-1"
              >Nomor Telepon</InputLabel
            >
            <InputDefault
              readonly
              type="text"
              name="phone"
              id="phone"
              v-model="
                attendance['Nomor telepon']
              "
            />
            <InputLabel for="email" class="mt-1"
              >Email</InputLabel
            >
            <InputDefault
              readonly
              type="text"
              name="email"
              id="email"
              v-model="attendance['Email']"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
