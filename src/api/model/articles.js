import request from "@/plugins/request";
import url from "../url";

export default {
  async fetchArticlesList() {
    try {
      const res = await request({
        url: url.dev + "articles",
        method: "get"
      });
      console.log("fetch articlesList res:", res);
      // debugger;
      if (res.status === 200 && res.statusText === "OK") {
        return res.data.data;
      }
      return null;
    } catch {
      return null;
    }
  },

  async fetchArticlesDetail(id) {
    try {
      const res = await request({
        url: url.dev + "rest/articles/" + id,
        method: "get"
      });
      console.log("fetch articlesDetail res:", res);
      // debugger;
      if (res.status === 200 && res.statusText === "OK") {
        return res.data.data;
      }
      return null;
    } catch {
      return null;
    }
  },
  async updateArticlesOne(id, data) {
    try {
      const res = await request({
        url: url.dev + "rest/articles/" + id,
        method: "put",
        data
      });
      console.log("update articlesOne res:", res);
      // debugger;
      if (res.status === 200 && res.statusText === "OK") {
        return res.data;
      }
      return null;
    } catch {
      return null;
    }
  },
  async createArticles(data) {
    try {
      const res = await request({
        url: url.dev + "rest/articles/",
        method: "post",
        data
      });
      console.log("create articles res:", res);
      // debugger;
      if (res.status === 200 && res.statusText === "OK") {
        return res.data;
      }
      return null;
    } catch {
      return null;
    }
  },
  async deleteArticles(id) {
    try {
      const res = await request({
        url: url.dev + "rest/articles/" + id,
        method: "delete"
      });
      console.log("delete articles res:", res);
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
