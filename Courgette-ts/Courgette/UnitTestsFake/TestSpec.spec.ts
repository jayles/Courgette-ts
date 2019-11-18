import { describe, it, expect, beforeAll, afterAll, beforeEach, afterEach } from '../Spec/SpecTestDiscoverer.js';
//import { Puppet } from '../Puppeteer/Puppet.js';

describe('es6 push/pop test', () => {

	const proxy = new Array<string>();

	beforeAll(() => console.log('Starting all unit tests...'));
	afterAll(() => console.log('...all unit tests completed'));

	describe('some attempt to test in chrome', () => {
		it('should load bbc website home page', async () => {
			//let pupp = new Puppet();
			//await pupp.testAsync(wsUri);
		});
	});

	describe('inner wrapper', () => {

		beforeEach(() => console.log('About to run single test [inner wrapper]'));
		afterEach(() => console.log('Single test completed [inner wraapper]'));

		it('Should fail test', () => {
			proxy.length = 0;
			expect(proxy.length).toBe(1);
		});

		it('Should be able to add item [Geoff Wode] to empty array and retrieve result and ensure array length is 1', () => {
			proxy.length = 0;
			expect(proxy.length).toBe(0);

			let newLen: number = proxy.push('Geoff Wode');
			expect(newLen).toBe(1);
			expect(proxy.length).toBe(1);
			expect(proxy[0]).toBe('Geoff Wode');
		});

		it('Should be able to pop previous item [Geoff Wode] from array and check array length is now 0', () => {
			expect(proxy.length).toBe(1);

			let item = proxy.pop();
			expect(item).toBe('Geoff Wode');
			expect(proxy.length).toBe(0);
		});

		describe('innermost wrapper', () => {

			beforeEach(() => console.log('About to run single test [innermost wrapper]'));
			afterEach(() => console.log('Single test completed [innermost wraapper]'));

			it('>> Should be able to add item [Geoff Wode] to empty array and retrieve result and ensure array length is 1', () => {
				proxy.length = 0;
				expect(proxy.length).toBe(0);

				let newLen: number = proxy.push('Geoff Wode');
				expect(newLen).toBe(1);
				expect(proxy.length).toBe(1);
				expect(proxy[0]).toBe('Geoff Wode');
			});

			it('>> Should be able to pop previous item [Geoff Wode] from array and check array length is now 0', () => {
				expect(proxy.length).toBe(1);

				let item = proxy.pop();
				expect(item).toBe('Geoff Wode');
				expect(proxy.length).toBe(0);
			});
		});

		it('Trailing test', () => {
			proxy.length = 0;
			proxy.push('Trailing Test');
			expect(proxy[0]).toBe('Trailing Test');
		});

	});
});
