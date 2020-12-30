module.exports = {
  publicPath: '/',
  outputDir: 'docs',
  filenameHashing: false,
  productionSourceMap: false,
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