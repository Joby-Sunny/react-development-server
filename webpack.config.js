const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js', //entry point of our react app
    output: { 
        path: path.join(__dirname,'/dist'), // setting path to where our final build code
        filename: 'bundle.js' // setting filename of the final js file at `/dist` folder
    },
    module: { // specifying the loader
        rules:[{
            test: /\.js$/, // setting what we want babel to compile
            exclude: /node_modules/, // to set nothing to happen to the node modules
            use: { // setting the default loader that will compile react code to browser friendly code
                loader: 'babel-loader'
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({ // this plugin is used to create an html file at the final build at `/dist` folder
            template: './src/index.html' // setting the template for generating the build html 
        })
    ]
}