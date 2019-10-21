import request from "@/plugins/request";
import url from "../url";

export default {
  async fetchFavoritesList() {
    try {
      const res = await request({
        url: url.dev + "rest/favorites",
        method: "get"
      });
      console.log("fetchFavoritesList res:", res);
      // debugger;
      if (res.status === 200 && res.statusText === "OK") {
        return res.data.data;
      }
      return null;
    } catch {
      return null;
    }
  },
  async fetchFavoritesDetail(id) {
    try {
      const res = await request({
        url: url.dev + "rest/favorites/" + id,
        method: "get"
      });
      console.log("fetchFavoritesDetail res:", res);
      // debugger;
      if (res.status === 200 && res.statusText === "OK") {
        return res.data.data;
      }
      return null;
    } catch {
      return null;
    }
  },
  async updateFavoritesOne(id, data) {
    try {
      const res = await request({
        url: url.dev + "rest/favorites/" + id,
        method: "put",
        data
      });
      console.log("updateFavoritesOne res:", res);
      // debugger;
      if (res.status === 200 && res.statusText === "OK") {
        return res.data;
      }
      return null;
    } catch {
      return null;
    }
  },
  async createFavorites(data) {
    try {
      const res = await request({
        url: url.dev + "rest/favorites/",
        method: "post",
        data
      });
      console.log("createFavorites res:", res);
      // debugger;
      if (res.status === 200 && res.statusText === "OK") {
        return res.data;
      }
      return null;
    } catch {
      return null;
    }
  },
  async deleteFavorites(id) {
    try {
      const res = await request({
        url: url.dev + "rest/favorites/" + id,
        method: "delete"
      });
      console.log("deleteFavorites res:", res);
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
