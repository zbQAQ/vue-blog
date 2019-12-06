import request from "@/plugins/request";
import { url } from "../url";

export default {
  async fetchBannerList() {
    try {
      const res = await request({
        url: url + "rest/banner",
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

  async fetchBannerDetail(id) {
    try {
      const res = await request({
        url: url + "rest/banner/" + id,
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
  async updateBannerOne(id, data) {
    try {
      const res = await request({
        url: url + "rest/banner/" + id,
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
  async createBanner(data) {
    try {
      const res = await request({
        url: url + "rest/banner/",
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
  async deleteBanner(id) {
    try {
      const res = await request({
        url: url + "rest/banner/" + id,
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
