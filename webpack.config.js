const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname, "./src/index.html")
});

module.exports = {
  mode: "development",
  plugins: [htmlPlugin],
  module: {
    //要打包的第三方模块
    rules: [
      { test: /\.js|jsx$/, use: "babel-loader", exclude: /node_modules/ },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]",
          "sass-loader"
        ]
      },
      { test: /\.woff|woff2|svg|ttf|eot$/, use: "url-loader" }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      "@": path.join(__dirname, "./src")
    }
  }
};
