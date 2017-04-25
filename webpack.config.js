module.exports = {
    entry: "./js/app.jsx",
    output: {
        filename: "./js/out.js"
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-2', 'react']
                }
            }, {
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader', 'resolve-url-loader']
            }, {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: ['file-loader?hash=sha512&digest=hex&name=[hash].[ext]', 'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false']
            }, {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader', 'resolve-url-loader']
            }
        ]
    }
}
// module.exports = {
//     entry: "./js/main.jsx",
//     output: {
//         filename: "js/out.js"
//     },
//     watch: true,
//     module: {
//         loaders: [{
//                 test: /\.jsx$/,
//                 exclude: /node_modules/,
//                 loader: 'babel-loader',
//                 query: {
//                     presets: ['es2015','stage-2','react']
//                 }
//             },
//             {
//                 test: /\.scss$/,
//                 loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader','resolve-url-loader', 'sass-loader?sourceMap']
//             },
//             {
//               test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
//               loader : 'file-loader',
//               query: {
//                 outputPath: "/myFonts/"
//               }
//        }
//         ]
//     }
// }
