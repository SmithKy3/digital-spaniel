const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
	template: './src/index.html',
});

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	entry: './src/app.tsx',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'dist'),
	},

	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json'],
		alias: {
			'~': path.resolve(__dirname, 'src/'),
			Common: path.resolve(__dirname, 'src/common'),
			Components: path.resolve(__dirname, 'src/components/'),
			Data: path.resolve(__dirname, 'src/data/'),
			Images: path.resolve(__dirname, 'src/images/'),
			Styles: path.resolve(__dirname, 'src/styles/'),
		},
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
			},

			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader'],
			},

			{
				test: /\.png$/,
				loader: 'url-loader',
			},
		],
	},

	plugins: [htmlPlugin],

	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: false,
		port: 1234,
	},
};
