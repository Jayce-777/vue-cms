import { createStore } from 'vuex';

const store = createStore({
  state: () => {
    return {
      name: 'jayce'
    };
  }
});

export default store;
