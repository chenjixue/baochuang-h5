import request from "./request"

export default {
  /**
   * 获取微信授权后的用户信息
   */
  getWxUserInfo(params) {
    return request.post("xxx", {
      ...params
    })
  }

}
