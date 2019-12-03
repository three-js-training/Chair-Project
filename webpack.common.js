
module.exports = {
  entry: {
    main: "./src/assets/scripts/index.js",
    vendor: "./src/assets/scripts/vendor.js"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpeg|jpg|gif|glb|gltf)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "images"
          }
        }
      }
    ]
  }
};