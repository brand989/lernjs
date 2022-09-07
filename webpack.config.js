const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'shop.js',
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm.js'
        }

    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: [
                    {loader: 'vue-loader'},
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [

                  "style-loader",
                  "css-loader",
                  "sass-loader",
                ],
              },
            {
                test: /\.css$/,
                use: [{
                        loader: 'vue-style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }

                ]
            },
            {
                test: /\.js$/,
                use: [
                    { loader: 'babel-loader'},
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },

        ]
    },

    plugins: [
        new VueLoaderPlugin()
    ]

};