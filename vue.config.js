module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    module: {
      rules: [
        {
          test: /.csv$/,
          loader: "csv-loader",
        },
      ],
    },
  },
};