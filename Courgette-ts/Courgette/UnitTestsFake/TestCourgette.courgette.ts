import { Suite, Test, BeforeAll, AfterAll, BeforeEach, AfterEach } from '../Courgette/CourgetteDecorators.js';
import { assert } from '../Courgette/CourgetteMatchers.js';
import { log } from '../Logger.js';

class Person {
	constructor() {
		this.name = 'Geoff';
		this.age = 123;
		this.dob = new Date(1969, 12, 31);
	}

	public name: string;
	public age: number;
	public dob: Date;
}

//interface IPerson {
//	name: string;
//	age: number;
//	dob: Date;
//}

@Suite('Courgette style es6 push/pop test')
export default class ProxyTest
{
	// attribs
	private proxy: Array<string> = new Array<string>();

	@BeforeAll public globalSetup() {
		log.highlight(`beforeAll() called`);
	}

	@AfterAll public globalTeardown() {
		log.highlight(`afterAll() called`);
	}

	@BeforeEach public testSetup() {
		log.highlight(`beforeEach() called`);
	}

	@AfterEach public testTeardown() {
		log.highlight(`afterEach() called`);
	}

	@Test('Should be able to add item <Geoff Wode> to empty array and retrieve result and ensure array length is 1')
	public TestPerson() {
		log.highlight(`TestPerson() called`);

		//
		let p1 = new Person();
		//let p2 = new Person();
		assert.isInstanceOf(Person, p1);

		//assert.areEqual(p1, p2);

		//p1.name = 'Not Geoff';
		//assert.areEqual(p1, p2);
	}

	@Test('Adding item <Geoff Wode> to empty array, function returns value 1, array element 0 is <Geoff Wode>, array length is 1')
	public TestPush()
	{
		log.highlight(`TestPush() called`);

		const proxy = this.proxy;
		proxy.length = 0;
		assert.areEqual(proxy.length, 0);

		let newLen: number = proxy.push('Geoff Wode');
		assert.areEqual(newLen, 1);
		assert.areEqual(proxy.length, 1);
		assert.areEqual(proxy[0], 'Geoff Wode');
	}

	@Test('Pop previous item <Geoff Wode> from array and check array length is now 0')
	public TestPop()
	{
		log.highlight(`TestPop() called`);

		const proxy = this.proxy;
		assert.areEqual(proxy.length, 1);

		let item: string|undefined = proxy.pop();
		assert.areEqual(item, 'Geoff Wode');
		assert.areEqual(proxy.length, 0);
	}
}
