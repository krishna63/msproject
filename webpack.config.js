const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
				test: /.(sa|c|pc)ss$/,
				exclude: /"node_modules"/,
				use: [
					{loader: MiniCssExtractPlugin.loader},
					/**
					 * when used below loader in combination with above loader
					 * then it is throwing error so only commented it.
					 * When we use style loader it will inject the styles into the style
					 * tag of the page, whereas the above plugin will create a separate
					 * files for each component hence above is preferred over below loader
					 */
					//{loader: 'style-loader'},
					{ loader: 'css-loader'},
					{loader: 'postcss-loader'},
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
		}),
		new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css'
    })
	],
  resolve: {
    extensions: ['.js', '.jsx']
  }
}