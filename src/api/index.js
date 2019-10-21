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
import favoritesModel from "./model/favorites";
export default {
  ...favoritesModel
};
