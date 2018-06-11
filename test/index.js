const chai = require('chai')
const semver = require('../index')
const expect = chai.expect

chai.use(semver)

describe('chai-semver', () => {
    it('passes when proper semver given', () => {
        expect('1.2.0').to.be.semver()
    })
    it('rejects with unproper semver', () => {
        expect('1.2.0.233').not.to.be.semver()
    })
    it('passes when semver is in range', () => {
        expect('1.2.0').to.satisfySemver('>1.0.3')
    })
    it('reject when semver is not in range', () => {
        expect('1.2.0').not.to.satisfySemver('<1.0.3')
    })
})