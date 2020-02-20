const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry:'./app/js/main.js',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true,
        compress: true,
        port: 9000,
        clientLogLevel: "none",
        quiet: true
    },
    module:{
        rules:[{
            test:/\.html$/,
            use:[{loader:'html-loader'}]
        },
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        },
        {
            test:/\.vue$/,
            use:[{loader:'vue-loader',options:{
                  loaders: {
                    css: 'vue-style-loader!css-loader',
                    scss: 'vue-style-loader!css-loader!sass-loader'
                 }
                
            }}]
        },  
        {
          test: /\.scss$/, use: [
            'style-loader', 
            {
              loader:'css-loader',
              options: {
              modules: true,
              }
            }, 
            {
              loader: 'px2rem-loader',
              // options here
              options: {
                remUnit: 40,
                remPrecision: 8
              }
            },
            'sass-loader'
          
          ] 
        },
        
        
        ]
    },
   
    resolve: {
      extensions: [
        '.js', '.vue', '.json'
      ],
        alias: {
          'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
        }
    },
    plugins:[
        new MiniCssExtractPlugin(),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
          title:'nihao',
          template:'./app/views/index.html'
        })
    ],
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'dist')
    }
}