const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');

// happyPack相关, 作者说4个Node VMs效果收益最好
const HappyPack = require('happypack');
const os = require('os');
const processer = os.cpus().length > 4 ? 4 : os.cpus().length;
const happyThreadPool = HappyPack.ThreadPool({ size: processer });
// console.log('[use happyThreadPool]:', happyThreadPool);

// PATH
const ROOT_PATH = path.resolve(__dirname, '..');
const SRC_PATH = path.resolve(ROOT_PATH, './src');
const DIST_PATH = path.resolve(ROOT_PATH, './dist');
const NODE_MODULES_PATH = path.resolve(ROOT_PATH, './node_modules');
const WEBPACK_CONFIG_PATH = path.resolve(ROOT_PATH, './webpack-config');
const POSTCSS_CONFIG_PATH = path.resolve(WEBPACK_CONFIG_PATH, './plugins-config');

// dll
// 建议用 https://github.com/asfktz/autodll-webpack-plugin （webpack5之前的版本）
// const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');
const AutoDllPlugin = require('autodll-webpack-plugin');


const commonConfig = {
  stats: 'verbose',
  entry: {
    app: SRC_PATH + '/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    // filename: '[name].[contenthash:8].js',
    chunkFilename: '[name].bundle.js',
    path: DIST_PATH,
    publicPath: '//js.cdn.com/id/',
  },
  module: {
    rules: [
      // 处理js及jsx
      {
        test: /\.(js|jsx)$/,
        use: 'happypack/loader?id=babeljs',
        exclude: /node_modules/,
        include: SRC_PATH,
      },
      // 处理图片
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'static/images/[name]-[hash:8].[ext]',
            }
          }
        ],
        include: SRC_PATH + '/static',
      },
      // 处理字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'static/font/[name]-[hash:8].[ext]',
            }
          }
        ],
        include: SRC_PATH + '/static',
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: ROOT_PATH
    }),
    new HtmlWebpackPlugin({
      template: SRC_PATH + '/index.html',
      filename: DIST_PATH + '/index.html',
      inject: 'body',
    }),

    new HappyPack({
      id: 'babeljs',
      threadPool: happyThreadPool,
      loaders: ['babel-loader?cacheDirectory']
    }),

    // // 告诉 Webpack 使用了哪些动态链接库
    // new DllReferencePlugin({
    //   // 描述 react 动态链接库的文件内容
    //   manifest: require('../dist/react.manifest.json'),
    // }),
    new AutoDllPlugin({
      inject: true, // will inject the DLL bundle to index.html
      debug: true,
      filename: '[name]_[hash].js',
      // path: DIST_PATH, // './dll',
      path: '',
      entry: {
        vendor: [
          'react',
          'react-dom'
        ]
      }
    })
  ],
  resolve: {
    // 使用绝对路径指明第三方模块存放的位置，以减少搜索步骤
    // 其中 __dirname 表示当前工作目录，也就是项目根目录
    modules: [NODE_MODULES_PATH],
    extensions: ['.js', '.json', '.css', '.scss'],
    alias: {},
    // 针对 npm 中的第三方模块优先采用 jsnext:main 中指向的 ES6 模块化语法的文件
    // mainFields: ['jsnext:main', 'browser', 'main']
  }
};

module.exports = {
  commonConfig,
  HappyPack,
  happyThreadPool,
  POSTCSS_CONFIG_PATH,
};
