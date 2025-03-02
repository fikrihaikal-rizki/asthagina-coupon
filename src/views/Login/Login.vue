<script setup>
import ButtonPrimary from '@/components/ui/button/ButtonPrimary.vue'
import InputDefault from '@/components/ui/input/InputDefault.vue'
import InputLabel from '@/components/ui/input/InputLabel.vue'
import { email, submit, id } from './login'
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { openModalDisclaimer } from './disclaimer'
import Disclaimer from './Disclaimer.vue'
const route = useRoute()

onMounted(() => {
  id.value = route.params.id
})
</script>

<template>
  <Disclaimer />
  <div
    class="flex items-center justify-center h-screen"
  >
    <div
      href="#"
      class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm"
    >
      <img
        class="pb-10 rounded-t-lg"
        src="/banner-asthagina.svg"
        alt=""
      />
      <form
        class="w-[350px] mx-auto p-5"
        @submit.prevent="openModalDisclaimer(true)"
      >
        <div class="mb-5">
          <InputLabel for="emailAddress"
            >Alamat Email Pendaftar</InputLabel
          >
          <InputDefault
            type="email"
            name="emailAddress"
            id="emailAddress"
            placeholder="example@email.com"
            required
            v-model="email"
          />
        </div>
        <div class="float-right">
          <ButtonPrimary type="submit">
            Ambil Kupon
          </ButtonPrimary>
        </div>
      </form>
    </div>
  </div>
</template>
