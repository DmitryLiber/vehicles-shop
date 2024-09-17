const URL_SERVER: string = 'https://api.caiman-app.de/api/cars-test'

class fetchAPI {
  #genUrl(params = '') {
    return `${URL_SERVER}?${params !== '' ? `${params}` : ''}`
  }

  async get(params: string) {
    try {
      const response = await fetch(this.#genUrl(params), {
        referrerPolicy: 'strict-origin-when-cross-origin'
      })

      const json = await response.json()

      if (json) {
        try {
          json.msg = JSON.parse(json.msg)
        } catch (err) {}

        return json
      }
    } catch (err) {
      return err
    }
  }

  async post(data = {}, { upload = false, params = '' }) {
    try {
      type TCfg = {
        method: string
        body: object
        headers: object
      }

      const cfg = <TCfg>{
        method: 'POST',
        body: data
      }

      if (!upload) {
        cfg.headers = {
          'Content-Type': 'application/json'
        }
      }

      const response = await fetch(this.#genUrl(params), cfg as RequestInit)
      const json = await response.json()

      return json
    } catch (err) {
      return err
    }
  }
}
const API = new fetchAPI()

export { API, URL_SERVER }
