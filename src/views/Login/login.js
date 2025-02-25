import { sendRequest } from '@/helpers/requestHelper'
import router from '@/router'
import {
  setErrorMessage,
  setInfoMessage
} from '@/state/alertState'
import { setLoading } from '@/state/loadingState'
import { ref } from 'vue'

export const phoneNumber = ref('')
export const id = ref('')

function checkPhone() {
  const phoneRegex =
    /^(?:\+62|62|0)[2-9]\d{7,11}$/

  if (phoneRegex.test(phoneNumber.value)) {
    return true
  }

  return false
}

export async function submit() {
  if (!checkPhone()) {
    setErrorMessage(
      'Please enter valid phone number.'
    )
    return
  }

  setLoading(true)

  var body = {
    id: id.value,
    phone: phoneNumber.value
  }

  const result = await sendRequest(
    'attendances/generate-id',
    body
  )

  if (!result.status) {
    setErrorMessage(result.message)
    return;
  }

  router.push(
    '/c/' + id.value + '/coupon/' + result.data
  )

  setLoading(false)
}
