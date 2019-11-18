import { describe, it, expect, beforeAll, afterAll /*beforeEach, afterEach*/ } from '../Spec/SpecTestDiscoverer.js';
//import { check } from '../Courgette/Logger.js';

describe('es6 shift/unshift', () => {
	const proxy = new Array<string>();

	beforeAll(() => console.log('Starting unit tests...'));
	afterAll(() => console.log('...unit tests completed'));

	it('Should be able to add n items to empty array and shift() to extract first item in array and ensure array length is n-1', () => {
		proxy.length = 0;
		expect(proxy.length).toBe(0);

		proxy.push('First');
		proxy.push('Second');
		proxy.push('Third');
		proxy.push('Fourth');

		expect(proxy.length).toBe(4);
		let item = proxy.shift();
		expect(item).toBe('First');
		expect(proxy.length).toBe(3);
	});

	it('Should be add n items to array then unshift() to add item [New First] at start of array and then check array length is now n+1', () => {
		proxy.length = 0;
		expect(proxy.length).toBe(0);

		proxy.push('First');
		proxy.push('Second');
		proxy.push('Third');

		expect(proxy.length).toBe(3);
		proxy.unshift('New First');
		expect(proxy[0]).toBe('New First');
		expect(proxy.length).toBe(4);
	});

	it('Should be able to add item [First] to empty array and verify item has been added and array length is 1', () => {
		proxy.length = 0;
		expect(proxy.length).toBe(0);

		proxy.push('First');

		expect(proxy.length).toBe(1);
		expect(proxy[0]).toBe('First');
	});

});
