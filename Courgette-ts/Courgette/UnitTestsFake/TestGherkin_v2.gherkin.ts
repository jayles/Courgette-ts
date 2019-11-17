//import { assert } from '../Courgette/GherkinAsserts.js';
//import { scenario, given, when, then, andthen } from '../Courgette/GherkinDecorators.js';

//interface IScenario {
//	given(...args: any[]): void;
//	when(...args: any[]): void;
//	then(...args: any[]): void;
//}

//export class TestArrayProxy {

//	// test vars and consts
//	private proxy: Array<string> = new Array<string>();
//	private newLen!: number;

//	@scenario(
//		'given the array length is <0>',
//		'when I call push with value <Geoff Wode> and save returned length',
//		'then the returned length from the push function should be <1>',
//		'and the array length should now be <1>',
//		'and the value of array element <0> should be <Geoff Wode>')
//	public TestPushMethod() {
//	}

//	@given('the array length is <len>')
//	public given(len: number) {
//		this.proxy.length = len;
//		assert.areEqual(this.proxy.length, len);
//	}

//	@when('I call push with value <item> and save returned length')
//	public when(item: string) {
//		this.newLen = this.proxy.push(item);
//	}

//	@then('the returned length from the push function should be <expectedLen>')
//	@andthen('the array length should now be <expectedLen>')
//	@andthen('the value of array element <idx> should be <expectedItem>')
//	public then(expectedLen: number, idx: number, expectedItem: string) {
//		assert.areEqual(this.newLen, expectedLen);
//		assert.areEqual(this.proxy.length, expectedLen);
//		assert.areEqual(this.proxy[idx], expectedItem);
//	}

//@scenario(
//	'given the array length is <0>',
//	'when I call push with value <Geoff Wode> and save returned length',
//	'then the returned length from the push function should be <1>',
//	'and the array length should now be <1>',
//	'and the value of array element <0> should be <Geoff Wode>')
//	public TestPopMethod() {
//	}

//	@when('I call pop and save returned item')
//	public when(item: string) {
//		this.item = this.proxy.pop(item);
//	}

//	@then('the returned value from the pop function should be <expectedItem>')
//	@andthen('the array length should now be <expectedLen>')
//	@andthen('the value of array element <idx> should be <Error>')
//	public then(expectedLen: number, idx: number, expectedItem: string) {
//		assert.areEqual(this.newLen, expectedLen);
//		assert.areEqual(this.proxy.length, expectedLen);
//		assert.areEqual(this.proxy[idx], expectedItem);
//	}
//}
