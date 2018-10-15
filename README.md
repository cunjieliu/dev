### 项目搭建
1. npm i webpack --save-dev
2. npm i webpack-cli --save-dev (使用webpack v4版本及以上需要安装)
3. npx webpack (src -> dist)
4. npm i --save-dev babel-loader
5. npm i --save-dev @babel-core  // npm i babel-core --save-dev
5. npm i --save-dev @babel/preset-env // npm i babel-preset-env --save-dev
6. touch .babelrc

https://github.com/webpack-contrib/css-loader/issues/228
7. npm install --save-dev style-loader css-loader
8. npm install --save-dev file-loader url-loader
9. npm install --save-dev html-webpack-plugin
10. npm install --save-dev clean-webpack-plugin
11. npm install --save-dev webpack-dev-server
12. npm install --save-dev webpack-merge
13. npm install --save-dev @babel/plugin-syntax-dynamic-import （可选optional, 用来支持动态import）
14. npm install --save babel-polyfill
15. npm install --save whatwg-fetch
16. npm install sass-loader node-sass --save-dev
17. npm install --save-dev mini-css-extract-plugin
参考文档
[https://github.com/PanJiaChen/vue-element-admin/issues/1077]
[https://github.com/amireh/happypack/issues/223]

18. npm install --save-dev extract-text-webpack-plugin (webpack 其他版本适用)  已废弃
19. npm install --save-dev extract-text-webpack-plugin@next (webpack V4适用)  已废弃
参考文档
[https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/731]
[https://github.com/shakacode/bootstrap-loader/issues/338]
[https://github.com/webpack/webpack/issues/6729#issuecomment-372359163]


20. npm install --save-dev happypack
21. npm i -D postcss-loader
22. npm i -D autoprefixer
23. npm i -D uglifyjs-webpack-plugin  （配合mini-css-extract-plugin）
24. npm i -D optimize-css-assets-webpack-plugin （配合mini-css-extract-plugin）

25. npm install --save-dev cross-env
参考文档
[https://github.com/webpack/webpack/releases/tag/v4.0.0]
(process.env.NODE_ENV are set to production or development (only in built code, not in config))

26. npm i --save-dev @babel/plugin-transform-modules-commonjs

27. npm i --save-dev autodll-webpack-plugin



### 版本注意提示
webpack 4.x | babel-loader 8.x | babel 7.x

npm install -D babel-loader @babel/core @babel/preset-env webpack

webpack 4.x | babel-loader 7.x | babel 6.x

npm install -D babel-loader@7 babel-core babel-preset-env webpack


### mini-css-extract-plugin 其他问题
1. ModuleConcatenation bailout: Module is not an ECMAScript module
[https://stackoverflow.com/questions/45384170/how-to-fix-modules-with-moduleconcatenation-bailout-module-is-not-an-ecmascrip]
[https://github.com/webpack-contrib/mini-css-extract-plugin/issues/27]

2. Babel will now skip transforming import statements in favor of letting Webpack do it.
[https://github.com/babel/babel-loader/issues/661#issuecomment-417032895]
[https://github.com/webpack-contrib/mini-css-extract-plugin/issues/102#issuecomment-384947142]


3.
[https://github.com/babel/babel-loader/pull/660]
[https://github.com/babel/babel/issues/7517]