const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/path-to-cdn/', // Set this to your CDN base path
  },
  module: {
    rules: [
      // CSS handling
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // Image and other asset handling
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][hash][ext][query]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
