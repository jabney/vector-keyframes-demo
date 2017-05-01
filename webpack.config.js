let config;

if (process.env.NODE_ENV === 'production') {
	console.log('Building for production...')
	config = require('./config/webpack.prod.js')
} else {
	console.log('Building for development...')
	config = require('./config/webpack.dev.js')
}

module.exports = config
