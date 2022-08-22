const path = require('path');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  target: 'node',
  entry: {
    main: path.join(__dirname, "./src/index.ts")
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "[name]-bundle.js"
  },
  optimization: {
    runtimeChunk: 'single',
  },
  node: {
    __dirname: false
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        loader: "ts-loader"
      }
    ]
  }
};
