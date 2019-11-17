//import VsTestRunner from './dist/Courgette/VsTestRunner/VsTestRunner.js';
import VsTestRunner from './Courgette/VsTestRunner/VsTestRunner.js';

//window.onerror = function (message, source, lineno, colno, error): boolean {
//	let msg = `msg = ${message}, url = ${source}, lineNo = ${lineno}, columnNo = ${colno}, error = ${error}`;
//	alert(msg);
//	return false;
//}

//(async () => {
//	let tests = new CourgetteTestRunner();
//	await tests.Run();
//	let debug: number = 0;
//})();

let vsTestRunner = new VsTestRunner();
vsTestRunner.Run();
