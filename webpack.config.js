const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
// const { devtool } = require('./webpack.config');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
// eslint-disable-next-line no-undef
isProd = !isDev;

const filename = (ext) => (isDev ? `[name]${ext}` : `[name]_[contenthash]${ext}`);

const optimization = () => {
	const config = {
		minimize: isProd, splitChunks: {
			chunks: 'all',
		},
	};

	if (isProd) {
		config.minimizer = [new CssMinimizerPlugin(), new TerserPlugin(), new ImageMinimizerPlugin({
			minimizer: {
				implementation: ImageMinimizerPlugin.imageminMinify, options: {
					plugins: [['gifsicle', {interlaced: true}], ['jpegtran', {progressive: true}], ['optipng', {optimizationLevel: 5}], ['svgo', {
						plugins: [{
							name: 'preset-default', params: {
								overrides: {
									removeViewBox: false,
									addAttributesToSVGElement: {
										params: {
											attributes: [{xmlns: 'http://www.w3.org/2000/svg'},],
										},
									},
								},
							},
						},],
					},],],
				},
			},
		}),];
	}
	return config;
};

const cssLoader = (extra) => {
	const loaders = [MiniCssExtractPlugin.loader, 'css-loader'];
	if (extra) {
		loaders.push(extra);
	}
	return loaders;
};

module.exports = {
	context: path.resolve(__dirname, './vc-brest_site'),
	entry: ['@babel/polyfill', './index.jsx'],
	output: {
		clean: true,
		filename: `js/${filename('.js')}`,
		path: path.resolve(__dirname, 'dist'),
	},
	experiments: {
		topLevelAwait: true
	},

	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.css', '.scss', '.json'],
	},

	devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',

	devServer: {
		static: {
			directory: path.join(__dirname, 'vc-brest_site'),
		},
		historyApiFallback: true,
		liveReload: true,
		compress: true,
		port: 9000,
		hot: true,
	},

	performance: {
		hints: false, maxAssetSize: 512000, maxEntrypointSize: 512000,
	},

	plugins: [new HtmlWebpackPlugin({
		template: path.resolve(__dirname, './vc-brest_site/index.html'),
		inject: 'body',
		minify: {
			collapseWhitespace: isProd,
		},
	}),

		new MiniCssExtractPlugin({
			filename: `./css/${filename('.css')}`,
		}),

		new ESLintPlugin(), // new CopyWebpackPlugin(),
	],

	module: {
		rules: [{
			test: /\.css$/i, use: cssLoader(),
		}, {
			test: /\.css$/i, use: cssLoader('postcss-loader'),
		}, {
			test: /\.less$/i, use: cssLoader('less-loader'),
		}, {
			test: /\.s[ac]ss$/i, use: cssLoader('sass-loader'),
		}, {
			test: /\.(png|jpg|jpeg|gif)$/i, type: 'asset/resource', generator: {
				filename: './front-end/assets/images/[name][ext]',
			},
		}, {
			test: /\.(ico)$/i, type: 'asset/resource', generator: {
				filename: './front-end/assets/icons/[name][ext]',
			},
		}, {
			test: /\.svg$/i, type: 'asset/resource', generator: {
				filename: './front-end/assets/svg/[name][ext]',
			},

		}, {
			test: /\.(woff2?|eot|ttf|otf)$/i,
			type: 'asset/resource',
			generator: {
				filename: './front-end/assets/fonts/[name][ext]',
			},
		}, {
			test: /\.(csv|tsv)$/i, use: ['csv-loader'], generator: {
				filename: './front-end/assets/csv/' + `${filename}`,
			},
		}, {
			test: /\.xml$/i, use: ['xml-loader'], generator: {
				filename: './front-end/assets/xml/' + `${filename}`,
			},
		}, {
			test: /\.js$/, exclude: /node_modules/, use: {
				loader: "babel-loader", options: {
					presets: ['@babel/preset-env']
				}
			},
		}, {
			test: /\.ts$/, exclude: /node_modules/, use: {
				loader: "babel-loader", options: {
					presets: ['@babel/preset-env', '@babel/preset-typescript']
				}
			},
		}, {
			test: /\.jsx$/, exclude: /node_modules/, use: {
				loader: "babel-loader", options: {
					presets: ['@babel/preset-env', '@babel/preset-react']
				}
			},
		}],
	},

	optimization: optimization(),
};
