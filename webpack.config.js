const PATH = require('path');

const PORT = process.env.PORT || 8080;

module.exports = {
  entry: './index.jsx',
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
  // Configuration regarding modules
  module: {
    // Rules for modules (configure loaders, parser options, etc.)
    rules: [
      {
        // These are matching conditions, each accepting a regular expression or string
        // Test and include have the same behavior, both must be matched
        // Exclude must not be matched (takes preferrence over test and include)
        // Best practices:
        // - Use RegExp only in test and for filename matching
        // - Use arrays of absolute paths in include and exclude
        // - Try to avoid exclude and prefer include
        test: /\.jsx?$/,
        exclude: [
          PATH.resolve(__dirname, 'node_modules'),
        ],
        // The loader which should be applied, it'll be resolved relative to the context
        loader: 'babel-loader',
        // Options for the loader
        options: {
          presets: [
            '@babel/stage-3',
            '@babel/env',
            '@babel/react',
          ],
        },
      },
      {
      // Disabled until I need to add CSS styling to my work again
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          // 'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    // Tell the server where to serve content from.
    // This is only necessary if you want to serve static files.
    contentBase: PATH.join(__dirname, '/'),
    // Enable gzip compression for everything served
    compress: true,
    // Enable webpack's Hot Module Replacement feature
    hot: true,
    // This option lets you precisely control what bundle information gets
    // displayed. This can be a nice middle ground if you want some bundle
    // information, but not all of it.
    stats: 'minimal',
    open: true,
    port: PORT,
  },
};
