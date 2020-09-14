// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import Vuex from 'vuex';
import store from './store/index';

export default function (Vue, {
  appOptions,
}) {
  Vue.component('Layout', DefaultLayout)

  Vue.use(Vuex);
  appOptions.store = store;

}