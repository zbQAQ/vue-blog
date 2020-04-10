import request from "@/plugins/request";
import { url } from "../url";

export default {
  async fetchCustomNavList() {
    try {
      const res = await request({
        url: url + "customNav/",
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

  async fetchCustomNavDetail(id) {
    try {
      const res = await request({
        url: url + "rest/customNav/" + id,
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
  async updateCustomNavOne(id, data) {
    try {
      const res = await request({
        url: url + "rest/customNav/" + id,
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
  async createCustomNav(data) {
    try {
      const res = await request({
        url: url + "customNav/",
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
  async deleteCustomNav(id) {
    try {
      const res = await request({
        url: url + "rest/customNav/" + id,
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
