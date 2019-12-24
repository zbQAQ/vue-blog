const state = {
  inSearchModel: false,
  inNavModel: false,
  searchEngine: "google"
};
const getters = {
  inSearchModel: state => state.inSearchModel,
  inNavModel: state => state.inNavModel,
  searchEngine: state => state.searchEngine
};
const mutations = {
  changeInSearchModel(state, flag) {
    state.inSearchModel = flag;
  },
  changeInNavModel(state, flag) {
    state.inNavModel = flag;
  },
  changeSearchEngine(state, engine) {
    state.searchEngine = engine;
  }
};
const actions = {};

export default {
  state,
  getters,
  mutations,
  actions
};
