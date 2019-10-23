// import request from "@/plugins/request";

/**
 * 接口调用可以分模块写 再导入
 *
 * 例如:
 * import model1 from './model/user'
 * import model2 from './model/user'
 *
 * posts = {
 *
 *  other code...
 *
 *  ...model1,
 *  ...model2,
 * }
 *
 */
import url from "./url";
import request from "@/plugins/request";
import favoritesModel from "./model/favorites";
import articlesModel from "./model/articles";
import categoriesModel from "./model/categories";
export default {
  async uploadFile(formdata) {
    try {
      const res = await request.post(url.dev + "upload", formdata);
      console.log("uploadfile res:", res);
      // debugger;
      if (res.status === 200 && res.statusText === "OK") {
        return res.data.data;
      }
      return null;
    } catch {
      return null;
    }
  },

  ...favoritesModel,
  ...articlesModel,
  ...categoriesModel
};
