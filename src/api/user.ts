
import request from "@/utils/request";
import type { IUserSingUpDto, IUserSingInDto } from "@/interface/user";

// 获取用户密码加密的盐
export function getUserSalt() {
  return request({
    method: "GET",
    url: "/user/salt",
  });
}

// 用户注册
export function singIn(data: IUserSingUpDto) {
  return request({
    method: "POST",
    url: "/user/singIn",
    data: data
  });
}

// 用户登录
export function singUp(data: IUserSingInDto) {
  return request({
    method: "POST",
    url: "/user/singUp",
    data: data
  });
}


// 获取用户详情信息
export function getUserDetailInfo(id: string) {
  return request({
    method: "GET",
    url: `/user/${id}`,
  });
}