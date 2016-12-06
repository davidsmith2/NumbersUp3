var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'babel-polyfill',
		'./app/web/index.jsx'
	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ['react-hot', 'babel']
			},
			{
				test: /\.css?$/,
				include: /app\/web/,
				loaders: ['style', 'css']
			},
			{
				test: /\.pug?$/,
				include: /app\/web/,
				loaders: ['pug']
			}
		]
	},
	resolve: {
		moduleDirectories: ['node_modules', 'app/web'],
		extensions: ['', '.js', '.jsx']
	},
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
		    API_URL_ROOT: JSON.stringify('http://localhost:4711')
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'app/web/index.pug',
			title: 'Numbers Up'
		})
	],
	devtool: 'source-map',
    externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    }
};
