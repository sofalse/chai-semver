# chai-semver
Semver plugin for Chai

## Installation

```
npm install -D chai-semver
```

Then setup your unit test:
```javascript
const chai = require('chai')
const chaiSemver = require('chai-semver')

chai.use(chaiSemver)

```

## Assertions

```javascript
expect('1.2.0').to.be.semver() // passes if given string is in semver format, rejects if not
'1.6.3'.should.be.semver() // equivalent
expect('1.2.0').to.satisfySemver('>1.0.3') // passes if given string is in given version range, rejects if not
```

## License
This plugin is being released under MIT license.
