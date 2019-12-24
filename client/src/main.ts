import axios, {
	AxiosError,
	AxiosRequestConfig,
	AxiosResponse,
} from 'axios';
import { UNAUTHORIZED } from 'http-status-codes';
import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');

axios.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		// TODO: get token from store
		const token = '';
		config.headers.common['Authorization'] = 'Bearer ' + token;
		return config;
	},
	(e: AxiosError) => {
		return Promise.reject(e);
	},
);

axios.interceptors.response.use(
	(res: AxiosResponse) => {
		return res;
	},
	(e: AxiosError) => {
		const { status } = e.response || ({} as AxiosResponse);
		if (status === UNAUTHORIZED) {
			// TODO: delete token form store
			// TODO: route to login
		}
		return Promise.reject(e.response);
	},
);
