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
        uid: ''
    },
    getters: {},
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
        },
        updateRents(state, payload) {
            if (!payload.clear) {
                state.rents = [...state.rents, ...payload.rents];
            } else {
                state.rents = [...payload.rents];
            }
            console.log('up', state.rents)
        }
    },
    actions: {}
});