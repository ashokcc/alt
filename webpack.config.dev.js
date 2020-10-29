import path from "path";
export default {
  entry: path.join(__dirname, "/client/index.js"),
  output: {
    filename: "bundle.js",
    path: "/",
  },
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, "client"),
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jp(e*)g|gif|svg|ttf|woff)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[path][name].[hash:8].[ext]",
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".json", ".js"],
  },
};
