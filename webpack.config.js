const path = require('path')

module.exports = {
    entry: './src/js/script.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext][query]'
                }
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.scss'],
    },
    mode: 'development',
    devServer: {
        static: path.resolve(__dirname, './'),
        open: true,
        compress: true,
        port: 3000,
    },
}
