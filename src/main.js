import DefaultLayout from '~/layouts/Default.vue'

// state management
import Vuex from 'vuex';
import store from './store/index';

// styles
import '~/styles/global.scss';

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
    property: 'og:title',
    name: 'title',
    content: 'nxnwtech jamstack'
  })
  head.meta.push({
    key: 'og:description',
    property: "og:description",
    name: 'description',
    content: 'nxnwtech jamstack talk and demo'
  })
  head.meta.push({
    key: 'og:keywords',
    property: 'og:keywords',
    name: 'keywords',
    content: 'Jamstack,Gridsome,Vue,Vue.js,Forestry,Forestry.io'
  })
  head.meta.push({
    key: 'og:url',
    property: "og:url",
    name: 'url',
    content: 'https://nxnw-jamstack.netlify.app/'
  })
}