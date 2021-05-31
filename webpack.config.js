module.exports = {
    mode: "development",
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.js"
        },
        extensions: ['js']
    },
    entry: "./modules/main.js",
    output: {
        filename: "./demo.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
        ]
    }
}