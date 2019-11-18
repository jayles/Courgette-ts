# Courgette-ts
This TypeScript testing framework runs inside the browser and does not use Node.js nor require use of Webpack. It has very few dependencies (Visual Studio, Courgette Test Adapter, Puppeteer (puppeteer-web.js). It uses the Pupeteer API for browser control and hence you can write isomorphic tests, i.e. the same tests that run inside the browser will work from within Node.js

The framework supports three styles of tests:
* Spec tests (Jasmine/Jest style tests with .spec.ts extension), using describe() and it() functions
* Gherkin tests (English language style tests with .gherkin.ts extension), using 'given' 'when' and 'then' syntax
* Courgette tests (NUnit/MSTest style tests with .courgette.ts extension), using property decorators to annotate class/methods

If the Courgette Test Adapter .vsix is installed in Visual Studio then tests can be run in normal mode (using headless Chrome), or debug mode (visible Chrome instance which is started by Visual Studio and then left running on the desktop).

## Issues/Limitations/To Do List
- [ ] Needs to be packaged for Nuget
- [ ] Code coverage needs to be added
- [ ] More unit tests need to be added to improve code coverage (requires code coverage feature)
- [ ] Courgette tests do not yet have complete set of matchers/assertions
- [ ] Spec tests do not yet have complete set of Jasmine/Jest matchers/assertions
- [ ] Gherkin test/running parsing is not yet complete
- [ ] CSS coverage may be added (if not too problematic)
