const path = require('path');

module.exports = {

    mode : "development",
    // 내가 가져올 js 나 jsx 파일
    entry : './src/index.jsx',
    
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
        path: path.resolve(__dirname, "public/js"),
        filename:'gugudan.bundler.js'
    }
}