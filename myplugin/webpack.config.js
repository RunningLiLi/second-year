const {resolve}=require('path');
const htmlwebpackplugin=require('html-webpack-plugin')
const Myplugin=require("./mylugins")
module.exports={
    entry:'./index.js',
    output:{
        filename:'main.js',
        path:resolve(__dirname,'bulid')
    },
    plugins:[
        new htmlwebpackplugin({
            template:'./index.html'
        }),
        new Myplugin()
    ],
    mode:'development'

    
}