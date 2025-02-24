import { sendRequest } from '@/helpers/requestHelper'
import router from '@/router'
import { setErrorMessage } from '@/state/alertState'
import { setLoading } from '@/state/loadingState'
import { toString } from 'qrcode'
import { ref } from 'vue'

export const couponQr = ref('')
export const generate = ref('')
export const attendance = ref(null)

export async function getData() {
  setLoading(true)
  const coupon = await sendRequest(
    'attendances/find-coupon',
    {},
    { Authorization: 'Bearer ' + generate.value }
  )

  if (!coupon.status) {
    router.push({ name: 'not-found' })
  }

  attendance.value = coupon.data
  toString(
    attendance.value['QR Code ID'] ?? 'TEST',
    {
      errorCorrectionLevel: 'H',
      type: 'svg'
    },
    function (err, data) {
      if (err) throw err
      couponQr.value = data
    }
  )
  setLoading(false)
}

export function downloadSVG(evt) {
  const svgContent = document.getElementById(
      'generatedQrCode'
    ).outerHTML,
    blob = new Blob([svgContent], {
      type: 'image/svg+xml'
    })
  let url = window.URL.createObjectURL(blob)
  let link = evt.target

  link.target = '_blank'
  link.download = 'Illustration1.svg'
  link.href = url
  let body = document.querySelector('body')
  body.appendChild(link)
  link.click()
  console.log(link)
}
