class Assert {

	// ctor
	public constructor() {
	}

	// compare two dates
	private dateAreEqual(param1: Date | null | undefined, param2: Date | null | undefined): boolean {
		return (param1?.getTime() === param2?.getTime());
	}

	// deep compare of two objects (including nested, arrays, maps, etc)
	private deepCompare(param1: object | null | undefined, param2: object | null | undefined): boolean {
		// this will work for simple cases, but not for { a:1, b:2 } === { b:2, a:1 }
		let same = JSON.stringify(param1) === JSON.stringify(param2);
		return same;
	}

	// are equal
	public areEqual(param1: Nullish<boolean>, param2: Nullish<boolean>): void;
	public areEqual(param1: Nullish<number>, param2: Nullish<number>): void;
	public areEqual(param1: Nullish<string>, param2: Nullish<string>): void;
	public areEqual(param1: Nullish<Date>, param2: Nullish<Date>): void;
	public areEqual(param1: Nullish<object>, param2: Nullish<object>): void;
	public areEqual(param1: AlmostAny, param2: AlmostAny): boolean {
		// overloaded method, checks for equality
		let same: boolean = false;
		if ((param1 === null) && (param2 === null))	// typeof null === 'object', so need to deal with this edge-case first
			same = true
		else
		if ((param1 instanceof Date) && (param2 instanceof Date))	// dates
			same = this.dateAreEqual(param1, param2)
		else
		if ((typeof param1 === 'object') && (typeof param2 === 'object'))	// objects, arrays, maps, etc (and note also typeof null === 'object')
			same = this.deepCompare(param1, param2)
		else
			same = (param1 === param2);	// string | boolean | number

		if (same)
			return true;
		else
			throw new Error(`areEqual(${typeof param1}, ${typeof param2}) test assertion failed`);
	}

	// are not equal
	public areNotEqual(param1: Nullish<boolean>, param2: Nullish<boolean>): void;
	public areNotEqual(param1: Nullish<number>, param2: Nullish<number>): void;
	public areNotEqual(param1: Nullish<string>, param2: Nullish<string>): void;
	public areNotEqual(param1: Nullish<Date>, param2: Nullish<Date>): void;
	public areNotEqual(param1: Nullish<object>, param2: Nullish<object>): void;
	public areNotEqual(param1: AlmostAny, param2: AlmostAny): boolean {
		// overloaded method, checks for inequality
		let same: boolean = true;
		if ((param1 instanceof Date) && (param2 instanceof Date))	// dates
			same = this.dateAreEqual(param1, param2)
		else
		if ((typeof param1 === 'object') && (typeof param2 === 'object'))	// objects, arrays, maps, etc
			same = this.deepCompare(param1, param2)
		else
			same = (param1 === param2);	// string | boolean | number

		if (!same)
			return true;
		else
			throw new Error(`areNotEqual(${typeof param1}, ${typeof param2}) test assertion failed`);
	}

	// see https://dev.to/krumpet/generic-type-guard-in-typescript-258l
	public isInstanceOf<T extends object>(classType: Constructor<T>, obj: T) {
		if (!(obj instanceof classType))
		throw new Error('isInstanceOf() test assertion failed');
	}

	public isDefined(param: any) {
		if (typeof param === 'undefined')
			throw new Error('isDefined() test assertion failed');
	}

	public isUndefined(param: any) {
		if (typeof param !== 'undefined')
			throw new Error('isUndefined() test assertion failed');
	}

	public isNull(param: any) {
		if (param !== null)
			throw new Error('isNull() test assertion failed');
	}

	public isNotNull(param: any) {
		if (typeof param === 'undefined')
			return;
		if (param === null)
			throw new Error('isNotNull() test assertion failed');
	}

	public isNullish(param: any) {
		if (param != null)
			throw new Error('isNullish() test assertion failed');
	}

	public isNotNullish(param: any) {
		if (param == null)
			throw new Error('isNotNullish() test assertion failed');
	}

	public isTruthy(param: any) {
		if (!param)
			throw new Error('isTruthy() test assertion failed');
	}

	public isFalsey(param: any) {
		if (param)
			throw new Error('isFalsey() test assertion failed');
	}

	// DOM Helpers
	public hasClass(el: HTMLElement, className: string) {
		if (!el.classList.contains(className))
			throw new Error('hasClass() test assertion failed');
	} 

}
export var assert: Assert = new Assert();
