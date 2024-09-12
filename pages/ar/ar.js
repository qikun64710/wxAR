// index.js
Page({
  data: {
    width: 300,
    height: 300,
    renderWidth: 300,
    renderHeight: 300,
    videoList: [
      { assetId: 'video1', src: 'https://mmbizwxaminiprogram-1258344707.cos.ap-guangzhou.myqcloud.com/xr-frame/demo/xr-frame-team/2dmarker/hikari-v.mp4' }
    ],
    trackerList: [
      { assetId: 'video1', src: 'https://mmbizwxaminiprogram-1258344707.cos.ap-guangzhou.myqcloud.com/xr-frame/demo/xr-frame-team/2dmarker/hikari.jpg' }
    ]
  },
  onLoad() {
    console.log('Page loaded, video and tracker lists set');
    const info = wx.getSystemInfoSync();
    const width = info.windowWidth;
    const height = info.windowHeight;
    const dpi = info.pixelRatio;
    this.setData({
      width, height,
      renderWidth: width * dpi,
      renderHeight: height * dpi
    });
  }
});
