ar words = ['flexible', 'great', 'ok', 'good'];
var doge_provider = {
	such: function() {
		return 'such ' + casual.random_element(words);
	},

	doge_phrase: function() {
		return 'wow ' + casual.such();
	}
};

casual.register_provider(doge_provider);

casual.such;        // 'such good'
casual.doge_phrase; // 'wow such flexible'
