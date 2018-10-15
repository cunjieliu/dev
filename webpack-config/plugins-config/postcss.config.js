// const autoprefixer = require('autoprefixer'); // related to PostCSS

// module.exports = {
//   // exec: true,
//   // loader: require.resolve('postcss-loader'),
//   loader: 'postcss-loader',
//   options: {
//     ident: 'postcss',
//     plugins: () => [
//       // require('postcss-flexbugs-fixes'),
//       autoprefixer,
//       // autoprefixer({
//       //   browsers: [
//       //     '>1%',
//       //     'last 4 versions',
//       //     'Firefox ESR',
//       //     'not ie < 9', // React doesn't support IE8 anyway
//       //   ],
//       //   flexbox: 'no-2009',
//       // }),
//     ],
//   },
// };

module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}

// module.exports = {
//   plugins: (loader) => [
//     require('autoprefixer')
//   ]
// }