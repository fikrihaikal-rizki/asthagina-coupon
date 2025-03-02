import { ref } from 'vue'

export const modalDiscaimer = ref(false)

export function openModalDisclaimer(open) {
  modalDiscaimer.value = open
}

export function isDisclaimerOpen() {
  return modalDiscaimer.value
}
