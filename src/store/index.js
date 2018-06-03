import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        comments: [],
        rents: [],
        cid: '',
        title: '',
        address: '',
        category: '',
        uid: 'AED60BF9A6550AC9BCE4F21C3BAA9793',
        name: '',
        age: 0,
        sex: ''
    },
    getters: {},
    mutations: {
        updateCid(state, payload) {
            state.cid = payload.cid;
            state.title = payload.title;
            state.address = payload.address;
            state.category = payload.category;
        },
        updateUid(state) {
            state.uid = payload.uid;
        },
        updateComments(state, payload) {
            if (!payload.clear) {
                state.comments = [...state.comments, ...payload.comments];
            } else {
                state.comments = [...payload.comments];
            }
        },
        updateRents(state, payload) {
            if (!payload.clear) {
                state.rents = [...state.rents, ...payload.rents];
            } else {
                state.rents = [...payload.rents];
            }
        }
    },
    actions: {}
});