import DefaultLayout from '~/layouts/Default.vue'

import Vuex from 'vuex';
import store from './store/index';

export default function (Vue, {
  appOptions,
  head
}) {
  Vue.component('Layout', DefaultLayout)

  Vue.use(Vuex);
  appOptions.store = store;

}