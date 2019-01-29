let path = require('path');

module.exports = {
    entry : './src/index.js',

    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : 'bundle.js',
        library : 'mylib'
    },

    module : {
        rules : [
            {
                test : /\.css$/,
                use : [
                    {loader : 'css-loader'},
                    {loader : 'style-loader'},
                ]
            }
        ]
    }
}