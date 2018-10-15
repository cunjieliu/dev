const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

const { HappyPack, happyThreadPool, commonConfig, POSTCSS_CONFIG_PATH } = common;

const devConfig = merge(commonConfig, {
  mode: 'development',
  // devtool: 'inline-source-map', // cheap-module-eval-source-map
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    disableHostCheck: true,
    historyApiFallback: true,
    headers: {
      "X-Custom-Author": "C.J.LAU"
    },
    proxy: {
      '/api': {
        target: 'http://api.xxx.com',
        secure: false
      }
    }
  },
  module: {
    rules: [
      // 处理sass样式
      {
        test: /\.(sc|sa|c)ss$/,
        use: ['happypack/loader?id=scss']
      },
      // 处理css
      {
        test: /\.css$/,
        use: ['happypack/loader?id=css']
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new HappyPack({
      id: 'scss',
      threadPool: happyThreadPool,
      loaders: [
        'style-loader',
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
        'style-loader',
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
  ],
  // watchOptions: {
  //   ignored: /node_modules/
  // }
})

module.exports = devConfig;