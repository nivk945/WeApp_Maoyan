let baseUrl = '';

function ifMissing(msg) {
  throw new Error(msg);
}

function send({
  url = ifMissing('url 不能为空'),
  method = 'POST',
  success = () => {},
  fail = () => {}
} = {}) {
  if (!baseUrl) {
    throw new URIError('需要先调用 setBaseUrl');
  }

  if (/^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/.test(baseUrl)) {
    wx.request({
      url: baseUrl + url,
      method,
      success,
      fail
    });
  } else {
    try {
      let urlArr = url.split('?')[0].split('.');
      if (urlArr.length > 1) {
        urlArr.pop();
      }
      success(mock[urlArr.join('.')](Net.getQueryObjs(url)));
    } catch (e) {
      fail(e);
    }
  }
}

class Net {
  static setBaseUrl(url) {
    baseUrl = url;
  }

  static getQueryObjs(url) {
    let obj = {};
    if (url.indexOf('?') != -1) {
      let str = url.split('?')[1];
      let strs = str.split('&');
      for (let i = 0; i < strs.length; i++) {
        obj[strs[i].split('=')[0]] = decodeURIComponent(strs[i].split('=')[1]);
      }
    }
    return obj;
  }

  static sendGet({
    url,
    success,
    fail
  } = {}) {
    send({
      url,
      method: 'GET',
      success,
      fail
    });
  }

  static sendPost({
    url,
    success,
    fail
  } = {}) {
    send({
      url,
      method: 'POST',
      success,
      fail
    });
  }
}

let mock = [];
try {
  mock = require('../mock/datas.js');
} catch (e) {}

export default Net;