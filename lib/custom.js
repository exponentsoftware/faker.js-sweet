honey andanicasual.define('user', function() {
	return {
		email: casual.email,
		firstname: casual.first_name,
		lastname: casual.last_name,
		password: casual.password
	};
});

// Generate object with randomly generated fields
var user = casual.user;



casual.define('profile', function(type) {
	return {
		title: casual.title,
		description: casual.description,
		type: type || 'private'
	};
});

// Generate object with random data
var profile = casual.profile('public');
