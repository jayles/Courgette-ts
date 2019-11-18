# Courgette-ts
This TypeScript testing framework runs inside the browser and does not use Node.js nor require use of Webpack. It has few dependencies (TypeScript, Visual Studio, Courgette Test Adapter, Puppeteer (puppeteer-web.js). It uses the Pupeteer API for browser control and hence you can write isomorphic tests, i.e. the same tests that run inside the browser will work from within Node.js on a build server.

The testing framework was designed to offer first class support for TypeScript, es6 modules and web components. It supports e2e testing of web components.

The framework has three styles of tests:
* Spec tests (.spec.ts extension Jasmine/Jest style tests), using describe() and it() functions
* Gherkin tests (.gherkin.ts extension English language style tests), using 'given' 'when' and 'then' syntax
* Courgette tests (.courgette.ts extension NUnit/MSTest style tests with), using property decorators to annotate class/methods

If the Courgette Test Adapter .vsix is installed in Visual Studio then tests can be run in normal mode (using headless Chrome), or debug mode (visible Chrome instance which is started by Visual Studio and then left running on the desktop).

## Issues/Limitations/To Do List
- [ ] Needs to be packaged for Nuget
- [ ] Code coverage needs to be added
- [ ] More unit tests need to be added to improve code coverage (requires code coverage feature)
- [ ] Courgette tests do not yet have complete set of matchers/assertions
- [ ] Spec tests do not yet have complete set of Jasmine/Jest matchers/assertions
- [ ] Gherkin test/running parsing is not yet complete
- [ ] CSS coverage may be added (if not too problematic)
- [ ] .js test files are ignored - currently only *.spec.ts, *.gherkin.ts and *.courgette.ts extensions are parsed.
