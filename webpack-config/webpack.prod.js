const merge = require('webpack-merge');
const common = require('./webpack.common.js');
// const webpack = require('webpack');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const { HappyPack, happyThreadPool, commonConfig, POSTCSS_CONFIG_PATH } = common;

const prodConfig = merge(commonConfig, {
  mode: 'production',
  // mode: 'none',
  // devtool: 'cheap-module-source-map', // 生产环境避免使用inline-*** or eval-***
  devtool: 'hidden-source-map',
  optimization: {
    // splitChunks: {
    //   cacheGroups: {
    //     // Merge all the CSS into one file
    //     styles: {
    //       name: 'app',
    //       test: /\.(s?css)$/,
    //       chunks: 'all',
    //       enforce: true,
    //       // priority: 100
    //     },
    //   }
    // },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ],

    runtimeChunk: {
      name: 'runtime'
    }
  },
  module: {
    rules: [
      // 处理sass样式
      {
        test: /\.(sc|sa|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'happypack/loader?id=scss',
        ]
      },
      // 处理css
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'happypack/loader?id=css',
        ]
      },
    ]
  },
  plugins: [
    // new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      // filename: "styles.css",
      // chunkFilename: "[id].css"
    }),

    new HappyPack({
      id: 'scss',
      threadPool: happyThreadPool,
      loaders: [
        {
          loader: 'css-loader',
          options: { importLoaders: 2 } // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
        },
        {
          loader: 'postcss-loader',
          options: {
            config: {
              path: POSTCSS_CONFIG_PATH
            }
          }
        },
        'sass-loader'
      ]
    }),
    new HappyPack({
      id: 'css',
      threadPool: happyThreadPool,
      loaders: [
        {
          loader: 'css-loader',
          options: { importLoaders: 2 } // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
        },
        {
          loader: 'postcss-loader',
          options: {
            config: {
              path: POSTCSS_CONFIG_PATH
            }
          }
        }
      ]
    }),
  ]
});

module.exports = prodConfig;