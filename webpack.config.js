const PATH = require('path');

const PORT = process.env.PORT || 8080;

module.exports = {
  entry: './app/main.js',
  output: {
    filename: 'bundle.js',
  },
  mode: 'development',
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
    // alias: {
    //     MyFiles: PATH.resolve(__dirname, 'src/')
    // }
  },
  module: {
    // configuration regarding modules
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        // these are matching conditions, each accepting a regular expression or string
        // test and include have the same behavior, both must be matched
        // exclude must not be matched (takes preferrence over test and include)
        // Best practices:
        // - Use RegExp only in test and for filename matching
        // - Use arrays of absolute paths in include and exclude
        // - Try to avoid exclude and prefer include
        test: /\.jsx?$/,
        exclude: [
          PATH.resolve(__dirname, 'node_modules'),
        ],
        // the loader which should be applied, it'll be resolved relative to the context
        // -loader suffix is no longer optional in webpack2 for clarity reasons
        // see webpack 1 upgrade guide
        loader: 'babel-loader',
        options: {
          presets: [
            'env',
            'react',
            'stage-3',
          ],
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
      },
    ],
  },
  devServer: {
    // Tell the server where to serve content from.
    // This is only necessary if you want to serve static files.
    contentBase: PATH.join(__dirname, 'public'),
    // Enable gzip compression for everything served
    compress: true,
    // Enable webpack's Hot Module Replacement feature
    hot: true,
    // This option lets you precisely control what bundle information gets
    // displayed. This can be a nice middle ground if you want some bundle
    // information, but not all of it.
    stats: 'minimal',
    port: PORT,
    open: true,
  },
};
