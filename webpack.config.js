const path = require('path');

module.exports = {
  entry : './src/index.js',
  output :  {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'./dist'),
    publicPath: "dist/"
  },
  mode: 'none',
  module: {
    rules : [
      {
        test: /\.(txt)$/,
        type: "asset/source" // asset/resource  > new file asset/inline > same file base 64 > asset it will do auto asset/source 
      },
      {
        test: /\.(png|jpg)$/,
        type: "asset" // asset/resource  > new file asset/inline > same file base 64 > asset it will do auto asset/source 
      }
    ]
  }
}