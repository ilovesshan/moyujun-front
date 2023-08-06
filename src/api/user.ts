import request from "@/utils/request";

// 获取用户密码加密的盐
export function getUserSalt() {
  return request({
    method: "GET",
    url: "/user/salt",
  });
}

// 用户注册
export function singIn(data: Map<string, any>) {
  return request({
    method: "POST",
    url: "/user/singIn",
    data: data
  });
}

// 用户登录
export function singUp(username: string, password: string) {
  return request({
    method: "POST",
    url: "/user/singUp",
    data: { "username": username, "password": password }
  });
}