import { ref } from 'vue'
import { getLoading } from './loadingState'

const infoMessage = ref('')
const errorMessage = ref('')

function clear() {
  infoMessage.value = ''
  errorMessage.value = ''
}

export function setInfoMessage(message) {
  clear()
  infoMessage.value = message
}

export function setErrorMessage(message) {
  clear()
  errorMessage.value = message
}

export function getInfoMessage() {
  return infoMessage.value
}

export function getErrorMessage() {
  return errorMessage.value
}

export function isView() {
  if (infoMessage.value != '') {
    return true
  }

  if (errorMessage.value != '') {
    return true
  }

  return false
}

export function isViewInfo() {
  if (infoMessage.value != '') {
    return true
  }

  return false
}

export function isViewError() {
  if (errorMessage.value != '') {
    return true
  }

  return false
}

export function close() {
  if (getLoading()) {
    return
  }

  clear()
}
