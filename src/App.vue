<script setup>
import { RouterView, useRoute } from 'vue-router'
import Alert from './views/Alert.vue'
import { isView } from './state/alertState'
import { watch } from 'vue'
import { sendRequest } from './helpers/requestHelper'
import router from './router'
import { getLoading } from './state/loadingState'

const route = useRoute()

async function checkLink() {
  var result = await sendRequest('links/verify', {
    id: route.params.id
  })

  console.log(result);
  if (!result.status) {
    // router.push({name: 'not-found'})
  }
}

watch(
  () => route.params.id,
  (id) => {
    if (id === undefined) {
      return
    }

    checkLink()
  }
)
</script>

<template>
  <div v-if="isView() || getLoading()">
    <Alert></Alert>
  </div>
  <div><RouterView /></div>
</template>
