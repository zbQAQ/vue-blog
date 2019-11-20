import request from "@/plugins/request";
import { url } from "../url";

export default {
  async fetchCategoriesList() {
    try {
      const res = await request({
        url: url + "rest/categories",
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

  async fetchCategoriesDetail(id) {
    try {
      const res = await request({
        url: url + "rest/categories/" + id,
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
  async updateCategoriesOne(id, data) {
    try {
      const res = await request({
        url: url + "rest/categories/" + id,
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
  async createCategories(data) {
    try {
      const res = await request({
        url: url + "rest/categories/",
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
  async deleteCategories(id) {
    try {
      const res = await request({
        url: url + "rest/categories/" + id,
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
