export interface IUserSingUpDto {
  "email": string,
  "password": string,
  "registerFrom": number,
  "salt": string,
  "username": string,
  "verifyCode": string
}


export interface IUserSingInDto {
  "username": string,
  "password": string,
}


export interface IUser {
  id?: string,
  user_info_id?: string,
  username?: string,
  email?: string,
  salt?: string,
  deleted?: number,
  status?: number,
  userInfo?: IUserInfo,
  create_time?: string,
  update_time?: string,
}

export interface IUserInfo {
  id?: string,
  sex?: number,
  birthday?: string,
  avatar?: string,
  email?: string,
  good_at?: string,
  phone_num?: string,
  company?: string,
  position?: string,
  cover?: string,
  sing?: string,
  location?: string,
  level?: number,
  deleted?: number,
  status?: number,
  create_time?: string,
  update_time?: string,
}

