const { merge } = require('webpack-merge')
const base = require('./webpack.config.js')
const path = require('path')

module.exports = merge(base, {
    output: {
        publicPath: './js'
    },
  
    mode: 'development',
    devtool: 'inline-source-map',
    devServer:{
        static: './public',
        port: 3030,
        host: 'localhost',
        hot: true,
        watchFiles: ['src/**/*.vue','src/**/*.js', 'public/**/*','public/*.js'],

    }

})