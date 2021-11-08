const path = require('path');

module.exports = {
    mode : "development",
    entry : './src/index.jsx',     // 내가 가져올 js 나 jsx 파일
    
    module: {
        rules: [
            { 
                test: /\.jsx$/,
                loader:'babel-loader',
                options:{
                    presets : ["@babel/preset-react", "@babel/preset-env"],
                }
            }
        ],
    },

    output : {
        path: path.resolve(__dirname, "public"),
        filename:'numberBaseball.bundler.js'
    },

    devServer : {
        static : {
            directory: path.join(__dirname, 'public')
        },
        compress: true,
        port : 9000,
        hot : true,
    }
}