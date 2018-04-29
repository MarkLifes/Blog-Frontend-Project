import API from 'API';

import { handleError } from '../utils/handles';

export default {
  namespaced: true,
  state: {
    recommends: [],
    hots: []
  },
  mutations: {
    UPDATE_RECOMMENDS(state, recommends) {
      state.recommends = recommends;
    },
    UPDATE_HOTS(state, hots) {
      state.hots = hots;
    }
  },
  actions: {
    // 获取推荐内容
    GET_RECOMMENDS(store, params) {
      return new Promise((resolve, reject) => {
        API.getPostBaseInfo({
          params: {
            is_recommend: true,
            limit: 5,
            offset: 0
          }
        }).then((response) => {
          store.commit('UPDATE_RECOMMENDS', response.data.results);
          resolve(response);
        }).catch((error) => {
          handleError(error);
          reject(error);
        });
      });
    },
    // 获取热门内容
    GET_HOTS(store, params) {
      return new Promise((resolve, reject) => {
        API.getPostBaseInfo({
          params: {
            is_hot: true,
            limit: 5,
            offset: 0
          }
        }).then((response) => {
          store.commit('UPDATE_HOTS', response.data.results);
          resolve(response);
        }).catch((error) => {
          handleError(error);
          reject(error);
        });
      });
    }
  }
};
