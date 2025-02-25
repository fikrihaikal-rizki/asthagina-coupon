<script setup>
import ButtonPrimary from '@/components/ui/button/ButtonPrimary.vue'
import InputDefault from '@/components/ui/input/InputDefault.vue'
import InputLabel from '@/components/ui/input/InputLabel.vue'
import { phoneNumber, submit, id } from './login'
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
const route = useRoute()

onMounted(() => {
  id.value = route.params.id
})
</script>

<template>
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
        @submit.prevent="submit()"
      >
        <div class="mb-5">
          <InputLabel for="telephone"
            >Nomor Telepon Pendaftar</InputLabel
          >
          <InputDefault
            type="text"
            name="telephone"
            id="telephone"
            placeholder="085xxxxxxxx"
            required
            v-model="phoneNumber"
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
