import request from "@/utils/request";

// 获取邮箱验证码
export function getEmialVerifyCode(email: string) {
  return request({
    method: "GET",
    url: "/email",
    params: { "email": email }
  });
}


// 校验邮箱验证码
export function checkEmialVerfofyCode(email: string, code: string) {
  return request({
    method: "POST",
    url: "/email",
    data: { "email": email, "code": code }
  });
}


// 校验图灵验证码
export function checkCaptchaVerfofyCode(code: string) {
  return request({
    method: "POST",
    url: "/captcha",
    data: { "code": code }
  });
}
