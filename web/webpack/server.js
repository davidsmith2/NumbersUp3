var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var server = new WebpackDevServer(webpack(config), {
	contentBase: 'dist/',
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true
});

server.listen(8080, 'localhost', function (err, result) {
	if (err) {
		return console.log(err);
	}
	console.log('Listening at http://localhost:8080/');
});
