import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios';
import { UNAUTHORIZED } from 'http-status-codes';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

axios.interceptors.request.use(
	config => {
		config.headers.common['Authorization'] = 'Bearer ' + store.getters.token;
		return config;
	},
	e => {
		return Promise.reject(e);
	}
);

axios.interceptors.response.use(
	res => {
		return res;
	},
	e => {
		const { status } = e.response;
		if (status === UNAUTHORIZED) {

			//delete token form store
			//route to login
		}
		return Promise.reject(e.response);
	}
);