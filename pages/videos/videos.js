const app = getApp();
const net = app.net;

let lastParams = {
  released: true
};

Page({
  data: {
    released: true,
    tabBlockLengthLeft: 50
  },
  // 更改上映状态
  eventChangeReleased(event) {
    let released = event.currentTarget.dataset.released == 'true';
    if (this.data.released === released) return;
    lastParams.released = released;
    this.setData({
      released,
      tabBlockLengthLeft: 50 * (released ? 1 : 2)
    });
  },
  onShow() {
    let params = global.pageParams || lastParams;
    delete global.pageParams;

    this.eventChangeReleased({
      currentTarget: {
        dataset: {
          released: !!params ? '' + ((lastParams = params) && params.released) : 'true'
        }
      }
    });
  }
})