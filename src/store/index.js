import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    comments: [],
    cid: '',
    title: '',
    address: '',
    category: '',
    uid: ''
  },
  getters: {
  },
  mutations: {
    updateCid(state, payload) {
      state.cid = payload.cid;
    },
    updateUid(state, payload) {
      state.uid = payload.uid;
    },
    updateComments(state, payload) {
      if (!payload.clear) {
        state.comments = [...state.comments, ...payload.comments];
      } else {
        state.comments = [...payload.comments];
      }
    }
  },
  actions: {
  }
});
