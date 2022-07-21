const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './src/index.js',
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

        ]
    },

    plugins: [
        new VueLoaderPlugin()
    ]

};