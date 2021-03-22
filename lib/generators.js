var title = casual._title();
// Same as
var title = casual.title;

// Pass generator as callback
var array_of = function(times, generator) {
	var result = [];

	for (var i = 0; i < times; ++i) {
		result.push(generator());
	}

	return result;
};

// Will generate array of five random timestamps
var array_of_timestamps = array_of(5, casual._unix_time);

Or you can get functional version of casual generator:

var casual = require('casual').functions();

// Generate title
casual.title();

// Generate timestamp
casual.unix_time();