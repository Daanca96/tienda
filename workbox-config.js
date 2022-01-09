module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{ogg,jpg,html,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};