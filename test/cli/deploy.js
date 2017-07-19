"use strict";

var assert = require("assert");
var DeployCommand = require('../../lib/cli/deploy');

describe('DeployCommand', function() {
	describe('#sumCodeCoverage()', function() {
		it('should sum up multiple coverages', function() {
			var deployCommand = new DeployCommand();
			var result = deployCommand.sumCodeCoverage([{
				numLocations: "1",
				numLocationsNotCovered: "0"
			}, {
				numLocations: "1",
				numLocationsNotCovered: "0"
			}]);
			assert.deepEqual(result, 1);
		});
		it('should ignore empty classes', function() {
			var deployCommand = new DeployCommand();
			var result = deployCommand.sumCodeCoverage([{
				numLocations: "1",
				numLocationsNotCovered: "0"
			}, {
				numLocations: "",
				numLocationsNotCovered: ""
			}]);
			assert.deepEqual(result, 1);
		});
		it('should return decimals', function() {
			var deployCommand = new DeployCommand();
			var result = deployCommand.sumCodeCoverage([{
				numLocations: "15",
				numLocationsNotCovered: "0"
			}, {
				numLocations: "5",
				numLocationsNotCovered: "5"
			}]);
			assert.deepEqual(result, 0.75);
		});
	});
});
