var path = require('path');
var ExtractPlugin = require('extract-text-webpack-plugin');
var register = require("@babel/register")
var webpack = require('webpack');
var extractPlugin = new ExtractPlugin({
    filename: "style.css"
})
module.exports = {
    entry: './src/main.js',
   output: {
       path : path.resolve(__dirname,'dist'),
       filename: "bundle.js",
       publicPath:'/dist'
   },
   module: {
       rules :[
        {               
                test : /\.js$/,
                use : [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
}, 
            {
                test: /\.s[ac]ss$/i,
                use:extractPlugin.extract({
                    use:['css-loader','sass-loader']
                })
            }
       ]
   },
   plugins:[
       extractPlugin
   ]
};