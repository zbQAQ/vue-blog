import request from "@/plugins/request";
import { url } from "../url";

export default {
  async fetchFavoritesList() {
    try {
      const res = await request({
        url: url + "favorites",
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
  async fetchFavoritesDetail(id) {
    try {
      const res = await request({
        url: url + "rest/favorites/" + id,
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
  async updateFavoritesOne(id, data) {
    try {
      const res = await request({
        url: url + "rest/favorites/" + id,
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
  async createFavorites(data) {
    try {
      const res = await request({
        url: url + "rest/favorites/",
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
  async deleteFavorites(id) {
    try {
      const res = await request({
        url: url + "rest/favorites/" + id,
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
