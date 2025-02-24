import { ref } from 'vue'

const isLoading = ref(false)

export function setLoading(status) {
  isLoading.value = status
}

export function getLoading() {
  return isLoading.value
}
