import { createStore } from 'vuex';

import login from './login/login';

import { IRootState } from './types';

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'jayce',
      age: 18
    };
  },
  mutations: {},
  modules: {
    login
  }
});

export function setupStore() {
  store.dispatch('login/loadLocalLogin');
}

export default store;
