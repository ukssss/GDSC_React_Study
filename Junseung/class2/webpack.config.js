import path from 'path'

export default {
    mode : "development",

    entry : "./src/indexedDB.jsx",

    module : {
        rules : [
            {
                test:/\.jsx/,
                loader:"babel-loader",
                option : {
                    presets: ["@babel/preset-react", "@babel/preset-env"],
                }
            }
        ]
    },

    output : {
        path: path.resolve(__dirname, "public/js"),
        filename:"gugudan.bundler.js"
    }
}