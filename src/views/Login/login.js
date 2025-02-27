import { sendRequest } from '@/helpers/requestHelper'
import router from '@/router'
import {
  setErrorMessage
} from '@/state/alertState'
import { setLoading } from '@/state/loadingState'
import { ref } from 'vue'

export const email = ref('')
export const id = ref('')

function checkEmail() {
  const regex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  if (regex.test(email.value)) {
    return true
  }

  return false
}

export async function submit() {
  if (!checkEmail()) {
    setErrorMessage(
      'Please enter valid email address.'
    )
    return
  }

  setLoading(true)

  var body = {
    id: id.value,
    email: email.value
  }

  const result = await sendRequest(
    'attendances/generate-id',
    body
  )

  if (!result.status) {
    setErrorMessage(result.message)
    return
  }

  router.push(
    '/c/' + id.value + '/coupon/' + result.data
  )

  setLoading(false)
}
