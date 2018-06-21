const path = require('path');

module.exports = {
    entry: './app/main.js',
    output: {
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        // configuration regarding modules
        rules: [
            // rules for modules (configure loaders, parser options, etc.)
            {
                test: /\.jsx?$/,
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                // these are matching conditions, each accepting a regular expression or string
                // test and include have the same behavior, both must be matched
                // exclude must not be matched (takes preferrence over test and include)
                // Best practices:
                // - Use RegExp only in test and for filename matching
                // - Use arrays of absolute paths in include and exclude
                // - Try to avoid exclude and prefer include
                loader: 'babel-loader',
                // the loader which should be applied, it'll be resolved relative to the context
                // -loader suffix is no longer optional in webpack2 for clarity reasons
                // see webpack 1 upgrade guide
                options: {
                    presets: ["es2015"]
                },
                // options for the loader
            },
            {
                // Disabled until I need to add CSS styling to my work again
                // test: /\.scss$/,
                // use: [
                //   'style-loader',
                //   'css-loader',
                //   'sass-loader'
                // ] 
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        hot: true,
        stats: "minimal", 
        // lets you precisely control what bundle information gets displayed
        port: 8080
    }
}
