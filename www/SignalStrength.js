exec = require('cordova/exec');

module.exports = {
	// Get the signal strength as dBm
	getdBm: function (successCallback, errorCallback) {
		return exec(successCallback, errorCallback, 'SignalStrength', 'getdBm', []);
	},

	// Get the signal strength as percentage of signal 0%... 100%
	getPercentage: function (successCallback, errorCallback, options) {
		options = options || {};
		var typeNetwork = options.typeNetwork || 'notWifi';
		args = [typeNetwork];
		return exec(successCallback, errorCallback, 'SignalStrength', 'getPercentage', args);
	},

	// Get signal level from 0..4
	getLevel: function (successCallback, errorCallback) {
		return exec(successCallback, errorCallback, 'SignalStrength', 'getLevel', []);
	}
}