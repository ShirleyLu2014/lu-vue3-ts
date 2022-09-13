//
const accountRules = {
  userName: [{ required: true, message: "账号不可为空", trigger: "blur" }],
  password: [{ required: true, message: "密码不可为空", trigger: "blur" }]
}
const phoneRules = {
  num: [{ required: true, message: "请输入手机号", trigger: "blur" }],
  code: [{ required: true, message: "验证码不可为空", trigger: "blur" }]
}
export { accountRules, phoneRules }
