import axios from 'axios'

function sendCode(phone) {
  return axios({
    // 配置了代理之后,请求的地址必须使用相对路径.如果使用绝对路径,代理就没有用了
    url: '/regist/digits',
    method: 'post',
    data: {
      phone,
    },
  })
}
export {sendCode}