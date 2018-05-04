const HardSourcePlugin = require('hard-source-webpack-plugin');
var nodeExternals = require('webpack-node-externals');

let client = {
	entry: ['babel-polyfill',__dirname+'/src/client/index.js'],
	output: {
		path: __dirname+'/public/',
		filename: 'bundle.js'
	},
	node: {
		fs: 'empty'
	},
	externals: [nodeExternals()], 
	mode: 'development',
	module: {
		rules: [
			{
				test: /jsx?$/,
				loader: 'babel-loader',
				exclude: /(node_modules)/,
				query: {
					presets: ['es2015', 'env', 'react', 'stage-0']
				}
			}
		]
	},
	plugins: [
		new HardSourcePlugin()
	]
};

let server = {
	entry: ['babel-polyfill',__dirname+'/src/server/index.js'],
	target: 'node',
	output: {
		path: __dirname+'/src/server/bundle/',
		filename: 'index.bundle.js',
		libraryTarget: 'commonjs2'
	},
	mode: 'development',
	externals: [nodeExternals()], 
	module: {
		rules: [
			{
				test: /jsx?$/,
				loader: 'babel-loader',
				exclude: /(node_modules)/,
				query: {
					presets: ['es2015', 'env', 'react', 'stage-0']
				}
			}
		]
	},
	plugins: [
		new HardSourcePlugin()
	]
}
let alias = {
	Actions: __dirname+'/src/shared/actions/',
	Reducers: __dirname+'/src/shared/reducers',
	Containers: __dirname+'/src/shared/containers/',
	Components: __dirname+'/src/shared/components/',
	Stores: __dirname+'/src/shared/stores',
	Utils: __dirname+'/src/shared/utils',
	Shared: __dirname+'/src/shared/',
	Auth: __dirname+'/src/shared/auth/',
	Classes: __dirname+'/src/shared/classes/'
};
server.resolve = {
	alias
};
client.resolve = {
	alias
};

module.exports = [client, server];