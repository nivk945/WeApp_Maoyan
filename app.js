App({
  onLaunch: function() {
    this.net = require('./utils/net.js').default;
    this.net.setBaseUrl('mock/');
  }
})