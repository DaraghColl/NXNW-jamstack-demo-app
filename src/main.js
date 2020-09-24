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


  // meta 
  head.meta.push({
    key: 'og:title',
    name: 'title',
    property: 'og:title',
    content: 'nxnwtech jamstack'
  })
  head.meta.push({
    key: 'og:description',
    name: 'description',
    property: "og:description",
    content: 'nxnwtech jamstack talk and demo'
  })
  head.meta.push({
    key: 'og:url',
    name: 'url',
    property: "og:url",
    content: 'https://nxnw-jamstack.netlify.app/'
  })
}