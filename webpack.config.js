const path = require('path');
const HtmlWebpackplugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: "./src/index.jsx",
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 1234
	},
	module: {
		rules: [
			{
				test: /.(sass|css)$/,
				exclude: /"node_modules"/,
				use: [
					{loader: 'style-loader'},
					{loader: 'css-loader'},
					{loader: 'sass-loader'}
				]
			},
			{
				test: /.(js|jsx)$/,
				exclude: /"node_modules"/,
				use: [
					{loader: 'babel-loader'}
				]
			},
      {
        test: /.(png|jpg)$/,
        use: [
          {loader: 'file-loader'}
        ]
      }
		]
	},
	plugins: [
    new CleanWebpackPlugin(),
		new HtmlWebpackplugin({
			template: 'index.html',
      title: 'carousel demo'
		})
	],
  resolve: {
    extensions: ['.js', '.jsx']
  }
}