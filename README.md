# Courgette-ts
This TypeScript testing framework runs inside the browser and does not use Node.js nor require use of Webpack. It has few dependencies (TypeScript, Visual Studio, Courgette Test Adapter, Puppeteer (puppeteer-web.js). It uses the Pupeteer API for browser control and hence you can write isomorphic tests, i.e. the same tests that run inside the browser will work from within Node.js on a build server.

## Features
* Modern design supporting TypeScript, es6 modules and web components
* Supports end-to-end testing (using Puppeteer)
* Supports running tests from within Visual Studio using headless Chrome (requires Courgette Test Adapter)
* Supports debugging tests from Visual Studio by launching visible instance of Chrome (requires Courgette Test Adapter)
* For failing tests, clicking on stack trace error (from transpiled JavaScript file) in Visual Studio will open original TypeScript source file on exact line number of the failing assertion (requires Test Adapter + "sourceMap": true in tsconfig.json)

The framework has three styles of tests:
* Spec tests (.spec.ts extension Jasmine/Jest style tests), using describe() and it() functions
* Gherkin tests (.gherkin.ts extension English language style tests), using 'given' 'when' and 'then' syntax
* Courgette tests (.courgette.ts extension NUnit/MSTest style tests), using property decorators to annotate class/methods

## Issues/Limitations/To Do List
- [ ] Needs to be packaged for npm
- [ ] Code coverage needs to be added
- [ ] More unit tests need to be added to improve code coverage (requires code coverage feature)
- [ ] Courgette tests do not yet have complete set of matchers/assertions
- [ ] Spec tests do not yet have complete set of Jasmine/Jest matchers/assertions
- [ ] Gherkin test/running parsing is not yet complete
- [ ] Does not currently support outDir option in tsconfig.json, .js and .js.map files need to be in the same folder as the original .ts file
- [ ] CSS coverage may be added (if not too problematic)
- [ ] .js test files are ignored - currently only *.spec.ts, *.gherkin.ts and *.courgette.ts extensions are parsed.
