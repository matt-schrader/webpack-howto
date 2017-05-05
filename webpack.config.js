const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV !== "production"
});

module.exports = {
	entry: "./src/index.js",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.[hash].js"
	},
	module: {
		loaders: [
			{
				test: /\.(css|scss)$/,
				loader: extractSass.extract({
					use: [
						{ loader: "css-loader" },
						{ loader: "sass-loader"},
						{
							loader: 'sass-resources-loader',
							query: { resources: './src/common.scss' },
						}
					],
					// use style-loader in development
					fallback: "style-loader"
				})
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react'],
					plugins: ['transform-class-properties', 'transform-object-rest-spread']
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'public/index.ejs'
		}),
		extractSass
	]
};