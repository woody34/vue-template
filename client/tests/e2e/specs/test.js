import util from '../helpers/util';

describe('My First Test', () => {
	it('Visits the app root url', () => {
		cy.visit('/');
		cy.contains('h1', 'Welcome to Your Vue.js + TypeScript App');
	});
});
