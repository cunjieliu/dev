import './sass/style.scss';
// import('./sass/style.scss');

// import testImage from './static/images/test.png';
// import testFont from './static/font/DINCondensed.ttf';

// import 'babel-polyfill';

// const a = new Promise((resolve, reject) => {
//   resolve();
// });
// a.then(() => {
//   console.log('liucunjie')
// })
const b = new Map();
// function liucunjie(){
//   const arr = ['a', 'b', 'c'];
//   const isHas = arr.includes('a');
//   const s = "leifeng".includes('lei');
//   console.log('liucunjie', s, isHas)
// }

// liucunjie();

// import { cube } from './math.js';
// // import _ from 'lodash';
// import './pre';

// // import(/* webpackPrefetch: true */ './pre');
// // import(/* webpackPreload: true */ './pre');

// var a = 'another-module';

// const f = () => {
//   console.log('liucunjie');
//   const a = 'leifengshushu-gg';
//   cube(5);

//   // return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
//   //   return _.join(['Hello', 'webpack'], ' ');
//   // }).catch(error => 'An error occurred while loading the component');

// }

// // console.log(
// //   _.join(['Another', 'module', 'loaded!'], ' ')
// // );

// f();

// __webpack_public_path__ = 'https://cdn.yuekeyun.com';
// console.log({__webpack_public_path__})

import main from './main';

// const render = () => {
//   document.body.append(`render->${main()}`);
//   // document.body.append(testImage);
// }

// render();

import React from 'react';
import { render } from 'react-dom';
import _findIndex from 'lodash/findIndex';
import _forEach from 'lodash/forEach';
console.log('test sourcemap once');


console.log(React)

// if (process.env.NODE_ENV === 'development') {
//   console.log('[env]:', process.env.NODE_ENV);
//   if (module.hot) {
//     module.hot.accept('./main.js', function() {
//       console.warn('Accepting the updated main module!');
//       render();
//     })
//   }
// }
