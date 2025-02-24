import axios from 'axios'

const baseUrl = import.meta.env.VITE_WEB_SERVICE

function getUrlRequest(url) {
  return baseUrl + url
}

export async function sendRequest(
  url,
  body,
  auth = null
) {
  var result = null

  if (auth != null) {
    axios.defaults.headers.common = auth
  }

  await axios
    .post(getUrlRequest(url), body)
    .then((response) => {
      result = response.data
    })
    .catch((err) => {
      result = err.response.data
    })

  return result
}
