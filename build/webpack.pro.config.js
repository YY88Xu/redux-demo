const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js'
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}