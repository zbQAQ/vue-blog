import request from "@/plugins/request";
import url from "../url";

export default {
  async fetchCategoriesList() {
    try {
      const res = await request({
        url: url.dev + "rest/categories",
        method: "get"
      });
      console.log("fetch categoriesList res:", res);
      // debugger;
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
        url: url.dev + "rest/categories/" + id,
        method: "get"
      });
      console.log("fetch categoriesDetail res:", res);
      // debugger;
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
        url: url.dev + "rest/categories/" + id,
        method: "put",
        data
      });
      console.log("update categoriesOne res:", res);
      // debugger;
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
        url: url.dev + "rest/categories/",
        method: "post",
        data
      });
      console.log("create categories res:", res);
      // debugger;
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
        url: url.dev + "rest/categories/" + id,
        method: "delete"
      });
      console.log("delete categories res:", res);
      // debugger;
      if (res.status === 200 && res.statusText === "OK") {
        return res.data;
      }
      return null;
    } catch {
      return null;
    }
  }
};
