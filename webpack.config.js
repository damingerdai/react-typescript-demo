/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: "./src/index.tsx",
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "[name]-[hash].js",
	},
	devServer: {
		historyApiFallback: true,
	},
	mode: process.env.NODE_ENV === "production" ? "production" : "development",
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "awesome-typescript-loader",
			},
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader",
			},
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
			{
				test: /\.(jpg|png|svg|gif)/,
				use: [
					{
						loader: "file-loader",
						options: {
							outputPath: "assets/",
						},
					},
				],
			},
			// {
			// 	test: /\.(jpg|png|svg|gif)/,
			// 	use: [
			// 		{
			// 			loader: "url-loader",
			// 			options: {
			// 				limit: 8129, //小于limit限制的图片将转为base64嵌入引用位置
			// 				fallback: "file-loader", //大于limit限制的将转交给指定的loader处理
			// 				outputPath: "assets/", //options会直接传给fallback指定的loader
			// 			},
			// 		},
			// 	],
			// },
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./index.html",
		}),
		new MiniCssExtractPlugin({
			filename: "style.css",
		}),
	],
	resolve: {
		extensions: [".js", ".ts", ".tsx"],
	},
};
