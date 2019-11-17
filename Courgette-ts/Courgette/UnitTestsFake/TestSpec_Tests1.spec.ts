import { describe, it, expect, beforeAll, afterAll, beforeEach, afterEach } from '../Spec/SpecTestDiscoverer.js';
//import { check } from '../Courgette/Logger.js';

describe('es6 push/pop test', () => {
	const proxy = new Array<string>();

	beforeAll(() => console.log('Starting all unit tests...'));
	afterAll(() => console.log('...all unit tests completed'));

	describe('some inner wrapper', () => {

		beforeEach(() => console.log('About to run single test'));
		afterEach(() => console.log('Single test completed'));

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
	});
});
