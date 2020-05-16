var path = require('path');
var ExtractPlugin = require('extract-text-webpack-plugin');
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