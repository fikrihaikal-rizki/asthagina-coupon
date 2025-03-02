<script setup>
import ModalSmall from '@/components/ui/modal/ModalSmall.vue'
import {
  modalDiscaimer,
  openModalDisclaimer
} from './disclaimer.js'
import CheckBoxDefault from '@/components/ui/checkBox/checkBoxDefault.vue'
import { ref } from 'vue'
import ButtonPrimary from '@/components/ui/button/ButtonPrimary.vue'
import { submit } from './login.js'

const approve = ref(false)

function grabCoupon() {
  openModalDisclaimer(false)
  submit()
}
</script>

<template>
  <ModalSmall v-model:open="modalDiscaimer"
    ><template #title>Persetujuan</template>
    <template #content>
      <p
        class="text-base leading-relaxed text-gray-500"
      >
        Perhatian! Kupon hanya bisa diambil jika
        Anda telah menyetujui untuk mengambil
        "KOTAK SAHUR"
      </p>
      <p>
        <CheckBoxDefault v-model="approve"
          >Saya setuju untuk mengambil "KOTAK
          SAHUR"</CheckBoxDefault
        >
      </p>
    </template>
    <template #action v-if="approve">
      <ButtonPrimary
        class="w-full"
        @click="grabCoupon()"
      >
        Ambil Kupon
      </ButtonPrimary>
    </template>
  </ModalSmall>
</template>
