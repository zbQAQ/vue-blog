import request from "@/plugins/request";
import { url } from "../url";

export default {
  async signIn(data) {
    try {
      const res = await request({
        url: url + "user/login",
        method: "post",
        data
      });
      if (res.status === 200 && res.statusText === "OK") {
        return res.data;
      }
      return null;
    } catch {
      return null;
    }
  },
  async fetchUserList() {
    try {
      const res = await request({
        url: url + "rest/users",
        method: "get"
      });
      if (res.status === 200 && res.statusText === "OK") {
        return res.data.data;
      }
      return null;
    } catch {
      return null;
    }
  },
  async fetchUserDetail(id) {
    try {
      const res = await request({
        url: url + "rest/users/" + id,
        method: "get"
      });
      if (res.status === 200 && res.statusText === "OK") {
        return res.data.data;
      }
      return null;
    } catch {
      return null;
    }
  },
  async updateUserOne(id, data) {
    try {
      const res = await request({
        url: url + "rest/users/" + id,
        method: "put",
        data
      });
      if (res.status === 200 && res.statusText === "OK") {
        return res.data;
      }
      return null;
    } catch {
      return null;
    }
  },
  async createUser(data) {
    try {
      const res = await request({
        url: url + "rest/users/",
        method: "post",
        data
      });
      if (res.status === 200 && res.statusText === "OK") {
        return res.data;
      }
      return null;
    } catch {
      return null;
    }
  },
  async deleteUser(id) {
    try {
      const res = await request({
        url: url + "rest/users/" + id,
        method: "delete"
      });
      if (res.status === 200 && res.statusText === "OK") {
        return res.data;
      }
      return null;
    } catch {
      return null;
    }
  }
};
