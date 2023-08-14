module.exports = {
    //...
    devServer: {
      proxy: {
        '/dev/**': {
          target:'',
          changeOrigin: true
        }
      }
    }
  };
  