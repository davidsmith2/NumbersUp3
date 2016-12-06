var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
		'babel-polyfill',
		'./app/web/index.jsx'
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
		path: path.join(__dirname, '../../docs'),
		publicPath: './',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.DefinePlugin({
		    API_URL_ROOT: JSON.stringify('https://numbers-up-server.herokuapp.com')
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'app/web/index.pug',
			title: 'Numbers Up'
		})
	]
};
