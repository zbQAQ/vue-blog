import request from "@/plugins/request";
import { url } from "../url";

export default {
  async fetchArticlesList() {
    try {
      const res = await request({
        url: url + "articles",
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

  async fetchArticlesDetail(id) {
    try {
      const res = await request({
        url: url + "articles/" + id,
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
  async updateArticlesOne(id, data) {
    try {
      const res = await request({
        url: url + "rest/articles/" + id,
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
  async createArticles(data) {
    try {
      const res = await request({
        url: url + "rest/articles/",
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
  async deleteArticles(id) {
    try {
      const res = await request({
        url: url + "rest/articles/" + id,
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
