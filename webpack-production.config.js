var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
		'babel-polyfill',
		'./src/index.jsx'
	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ['babel']
			},
			{
				test: /\.css?$/,
				include: /src/,
				loaders: ['style', 'css']
			},
			{
				test: /\.pug?$/,
				include: /src/,
				loaders: ['pug']
			}
		]
	},
	resolve: {
		moduleDirectories: ['node_modules', 'src'],
		extensions: ['', '.js', '.jsx']
	},
	output: {
		path: path.join(__dirname, 'docs'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.DefinePlugin({
		    API_URL_ROOT: JSON.stringify('https://numbers-up-server.herokuapp.com')
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'src/index.pug',
			title: 'Numbers Up'
		})
	]
};
