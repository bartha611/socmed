module.exports = {
  entry: "./components/index.tsx",
  mode: "development",
  output: {
    filename: "bundle.js",
    chunkFilename: "[name].bundle.js",
    publicPath: "/",
    path: `${__dirname}/dist/`
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
