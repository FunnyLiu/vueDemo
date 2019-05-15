import Vue from 'vue'
import API_URL from './config'
const Api = {
  init () {
    Vue.axios.defaults.baseURL = API_URL
    this.initInterceptors()
  },
  /**
   * Init axios interceptors
   */
  initInterceptors () {
    Vue.axios.interceptors.request.use(config => {
      // do something before request is sent
      return config
    }, error => {
      return Promise.reject(error)
    })
    Vue.axios.interceptors.response.use(response => {
      // do something after response is accepted
      const { code, message, result } = response.data
      switch (code) {
        // show modal
        case -3:
          Vue.prototype.$alert(message, '发生错误', {
            type: 'error'
          })
          break
          // show message
        case -2:
          Vue.prototype.$message.error(message)
          break
          // do not handle
        case -1:
          break
        case 0:
          return result
        default:
          break
      }
      return response
    }, error => {
      return Promise.reject(error)
    })
  },
  async query (resource:string, params:object) {
    try {
      return Vue.axios.get(resource, params)
    } catch (error) {
      throw new Error(`Api query error: ${error}`)
    }
  },
  async get (resource:string, slug:string = '') {
    try {
      return Vue.axios.get(`${resource}/${slug}`)
    } catch (error) {
      throw new Error(`Api get error: ${error}`)
    }
  },
  async post (resource:string, params:object) {
    try {
      return Vue.axios.post(`${resource}`, params)
    } catch (error) {
      throw new Error(`Api post error: ${error}`)
    }
  },
  async update (resource:string, slug:string = '', params:object) {
    try {
      return Vue.axios.put(`${resource}/${slug}`, params)
    } catch (error) {
      throw new Error(`Api update error: ${error}`)
    }
  },
  async put (resource:string, params:object) {
    try {
      return Vue.axios.put(`${resource}`, params)
    } catch (error) {
      throw new Error(`Api put error: ${error}`)
    }
  },
  async delete (resource:string) {
    try {
      return Vue.axios.delete(`${resource}`)
    } catch (error) {
      throw new Error(`Api delete error: ${error}`)
    }
  }
}

export default Api
