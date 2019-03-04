var path = require("path");

var DIST_DIR = path.resolve(__dirname, "./");

var config = {
	entry: {
		'src/dist/app_render': './src/app_render.js'
	},
	output: {
		path: DIST_DIR,
		filename: "[name].bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js?/,
				include: [
					path.resolve(__dirname, "./src")
				],
				loader: "babel-loader",
				query: {
					presets: ["react","es2015","stage-2"]
				}
			},
			{
				test: /\.css$/,
				use: ['css-loader'],
			}
		]
	}
};

module.exports = config;