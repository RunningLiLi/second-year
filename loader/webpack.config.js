const {resolve}=require('path')
const htmlwebpackplugin=require('html-webpack-plugin')
const webpack = require('webpack')
module.exports={
    entry:'./index.js',
    output:{
        filename:'main.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.html$/,
                use:'html-loader'
            },
            {
                test:/\.(js|html)$/,
                use:[resolve(__dirname,'replaceloader.js')]
            }

        ]
    },
    plugins:[
       new htmlwebpackplugin({
           template:'./index3.html'
       }),
       new webpack.HotModuleReplacementPlugin(),
    ],
    mode:'development'
}