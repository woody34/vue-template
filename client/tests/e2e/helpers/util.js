const uuid = require('uuid/v4');

const util = {
	uri: 'http://localhost:8080',

	home: {
		vueLogo: '[data-cy=logo-vue]',
	},

	helloWorld: {
		header: '[data-cy="header-message"]',
	},

	httpTasks: [],

	httpInterceptor: () => {
		cy.server({
			onAnyRequest: (xhr, proxy) => {
				if (xhr.alias) {
					xhr.id = uuid().substring(0, 8);
					util.httpTasks.push({ xhr, proxy });
				}
			},
		});
		cy.route('POST', '**/api/**').as('xhr');
		cy.route('GET', '**/api/**').as('xhr');
		cy.route('PUT', '**/api/**').as('xhr');
		cy.route('DELETE', '**/api/**').as('xhr');
	},

	httpWait() {
		util.httpTasks.forEach((e, i) => {
			if (e.xhr.id && e.proxy.xhr.readyState !== 4) {
				cy.log('xhr.readyState: ' + e.proxy.xhr.readyState);
				cy.wait('@' + e.xhr.alias);
			} else {
				util.httpTasks.splice(i, 1);
			}
		});
		util.httpTasks = [];
	},

	persistCookies: () => {
		Cypress.Cookies.defaults({
			whitelist: function(cookie) {
				return true;
			},
		});
	},
};
module.exports = util;
