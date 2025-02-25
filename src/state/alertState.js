import { ref } from 'vue'
import { getLoading, setLoading } from './loadingState'

const infoMessage = ref('')
const errorMessage = ref('')

function clear() {
  infoMessage.value = ''
  errorMessage.value = ''
}

export function setInfoMessage(message) {
  setLoading(false)
  clear()
  infoMessage.value = message
}

export function setErrorMessage(message) {
  setLoading(false)
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
