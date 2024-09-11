// components/xr-start/xr-start.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    mediaList: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleReady: function ({detail}) {
      console.log('准备好')
      this.scene = detail.value;
    },
    handleAssetsLoaded: function ({detail}) {
      this.setData({loaded: true});
    },
    handleTrackerSwitch: function (e) {
      const customParam = e.target.dataset.custom;  // 获取自定义参数
      const active = e.detail.value;
      const video = this.scene.assets.getAsset('video-texture', customParam);
      active ? video.play() : video.stop();
    },
    handleTrackerSwitch2: function ({detail}) {
      const active = detail.value;
      const video = this.scene.assets.getAsset('video-texture', 'video2');
      active ? video.play() : video.stop();
    }
  }
})