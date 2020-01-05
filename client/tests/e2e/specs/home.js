// https://docs.cypress.io/api/introduction/api.html
import util from '../helpers/util';

describe('My First Test', () => {
	it('Visits the app root url', () => {
		const header = 'Welcome to Your Vue.js + TypeScript App';
		cy.visit('/');
		cy.contains('h1', header);
		cy.get(util.helloWorld.header).contains(header);
	});
});
