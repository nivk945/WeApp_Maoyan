const app = getApp();
const net = app.net;

let globalScale = 750 / wx.getSystemInfoSync().windowWidth;

Page({
  data: {
    pageTopBarBackgroundOpacity: 0,
    banners: [],
    currentCategory: 0,
    categories: [],
    navCategoriesBlockLengthLeftBase: 0,
    navCategoriesBlockLengthLeft: 0,
    contentFrameHeights: []
  },
  // 页面框滚动事件
  eventPageScroll(event) {
    this.setData({
      pageTopBarBackgroundOpacity: (event.detail.scrollTop * globalScale) / 252
    });
  },
  // 点击分类选项卡
  eventChangeCategory(event) {
    let index = event.currentTarget.dataset.index;
    this.setData({
      currentCategory: index,
      navCategoriesBlockLengthLeft: 100 / this.data.categories.length * (index + 1)
    });
  },
  // 滑动分类选项卡
  eventChangeCategoryContent(event) {
    let index = event.detail.current;
    this.setData({
      currentCategory: index,
      navCategoriesBlockLengthLeft: 100 / this.data.categories.length * (index + 1)
    });
  },
  // 查看全部
  eventViewAll(event) {
    let path = event.currentTarget.dataset.path;
    global.pageParams = net.getQueryObjs(path);
    path = path.split('?')[0];

    wx.navigateTo({
      url: path,
      fail: () => {
        wx.switchTab({
          url: path
        });
      }
    });
  },
  onLoad() {
    this.getBanners();
    this.getCategories();
  },
  // 获取Banner数据
  getBanners() {
    net.sendGet({
      url: 'index/banners',
      success: res => {
        this.setData({
          banners: res
        });
      },
      fail: res => {
        console.dir(res);
      }
    });
  },
  // 获取分类
  getCategories() {
    net.sendGet({
      url: 'categories',
      success: res => {
        this.setData({
          categories: res,
          navCategoriesBlockLengthLeft: 100 / res.length,
          navCategoriesBlockLengthLeftBase: 100 / res.length
        });
        for (let i = 0; i < res.length; i++) {
          // 获取每一个分类的内容
          this.getCategory(res, i);
        }
      },
      fail: res => {
        console.dir(res);
      }
    });
  },
  // 获取某分类下的板块
  getCategory(res, index) {
    net.sendGet({
      url: 'index/category?cid=' + res[index].id,
      success: res1 => {
        res[index]['content'] = res1;

        /* 计算不同板块的高度 */
        let currentCategoryHeight = 0;
        for (const section of res1) {
          switch (section.layout) {
            case 'scroll':
              currentCategoryHeight += 458;
              if (section.showBtnBuy) currentCategoryHeight += 86;
              if (section.showReleaseTime) currentCategoryHeight += 32;
              break;
            case 'list':
              currentCategoryHeight += 16;
              currentCategoryHeight += 90;
              currentCategoryHeight += 92;
              currentCategoryHeight += (Math.ceil(section.info.list.length / 3) * 395.5);
              break;
          }
        }

        this.data.contentFrameHeights[index] = currentCategoryHeight;
        this.setData({
          categories: res,
          contentFrameHeights: this.data.contentFrameHeights
        });
      },
      fail: res1 => {
        console.dir(res1);
      }
    });
  }
})