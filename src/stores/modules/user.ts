import { defineStore } from "pinia";
import { SCache } from "@/utils/cache";

import type { IUser } from "@/interface/user";

interface IUserStore {
  token: string,
  userInfo: IUser,
}

const userStore = defineStore("userStore", {
  state(): IUserStore {
    return {
      token: "",
      userInfo: {},
    }
  },

  getters: {},

  actions: {
    saveToken(token: string) {
      this.token = token;
      SCache.set("token", token);
    },

    saveUserInfo(userInfo: IUser) {
      this.userInfo = userInfo;
      SCache.set("userInfo", userInfo);
    },
  }
});

export default userStore;