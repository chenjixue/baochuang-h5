import request from "./request"

export default {

  /**
   * 将 vue 对象传递给 apiHelper
   */
  getVueInstance(vue) {
    request.setVueInstance(vue)
  },

  /**
   * 获取微信授权后的用户信息
   */
  getWxUserInfo(params) {
    return request.post("xxx", {
      ...params
    })
  }

}
