import DefaultLayout from '~/layouts/Default.vue'

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import Vuex from 'vuex';
import store from './store/index';

export default function (Vue, {
  appOptions,
}) {
  Vue.component('Layout', DefaultLayout)

  const toastOptions = {
    position: "top-right",
    timeout: 1700,
    closeOnClick: true,
    pauseOnHover: true,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false
  };

  Vue.use(Toast, toastOptions);

  Vue.use(Vuex);
  appOptions.store = store;

}