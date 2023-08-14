module.exports = {
    //...
    devServer: {
      proxy: {
        '/dev/**': {
          target:'https://f8ilxp81c1-vpce-07c1e4021ba74fe08.execute-api.us-east-1.amazonaws.com',
          changeOrigin: true
        }
      }
    }
  };
  