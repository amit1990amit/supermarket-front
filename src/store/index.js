import Vue from 'vue';
import Vuex from 'vuex';
import UserListStore from './UserListStore.js';
import ItemStore from './ItemStore.js';
import UserStore from './UserStore.js';

Vue.use(Vuex)

export default new Vuex.Store({
  

  modules: {
    UserListStore,
    ItemStore,
    UserStore
  }
})
