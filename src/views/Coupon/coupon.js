import { sendRequest } from '@/helpers/requestHelper'
import router from '@/router'
import * as htmlToImage from 'html-to-image'
import { setLoading } from '@/state/loadingState'
import { toString } from 'qrcode'
import { ref } from 'vue'

export const couponQr = ref('')
export const generate = ref('')
export const attendance = ref({
  Email: null,
  'Nama Lengkap': null,
  'Nomor telepon': null,
  'Alamat Kos': null
})

export async function getData() {
  setLoading(true)
  const coupon = await sendRequest(
    'attendances/find-coupon',
    {},
    { Authorization: 'Bearer ' + generate.value }
  )

  if (coupon == null) {
    router.push({ name: 'not-found' })
  }

  if (!coupon.status) {
    router.push({ name: 'not-found' })
  }

  attendance.value = coupon.data
  var date = coupon.date.toString().split(' ')
  date = date[0]
  attendance.value['date'] = date
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

export function downloadCoupon() {
  htmlToImage
    .toBlob(document.getElementById('coupon'))
    .then(function (blob) {
      const a = document.createElement('a')
      a.href = URL.createObjectURL(blob)
      a.download =
        attendance.value['Nama Lengkap']
          .toString()
          .trim() +
        '(' +
        attendance.value['date'] +
        ').png'
      a.click()
    })
}
