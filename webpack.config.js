const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'https://cdn.jsdelivr.net/gh/PalmeriSamuele/dys-build'
  },
  module: {
    rules: [
      // Handling CSS files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // Handling image files with file-loader
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'icons/[name].[hash].[ext]', // Output path and filename
              publicPath: 'https://cdn.jsdelivr.net/gh/PalmeriSamuele/dys-build@v2.0.0/build/static/media'
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
