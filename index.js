/*
    Semver plugin for ChaiJS.
    Released under MIT license by Michal W<j989898@gmail.com> at June 6 2018.
*/
'use strict'

const semver = require('semver')

module.exports = (chai, utils) => {
    chai.Assertion.addMethod('semver', function() {
        const actual = this._obj
        this.assert(
            semver.valid(actual),
            '#{act} is not a valid semver',
            '#{act} is a valid semver'
        )
    })
    chai.Assertion.addMethod('satisfySemver', function(expected) {
        const actual = this._obj
        this.assert(
            semver.satisfies(actual, expected),
            '#{act} does not satisfy this semver pattern(#{exp})',
            '#{act} does satisfy this semver pattern(${exp})'
        )
    })
}
