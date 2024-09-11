Component({
  properties: {
    videoList: {
      type: Array,
      value: []
    },
    trackerList: {
      type: Array,
      value: []
    }
  },
  data: {
    loaded: false
  },
  methods: {
    handleReady({detail}) {
      console.log('AR Scene is ready：', this.data.trackerList);
      this.scene = detail.value;
    },
    handleAssetsLoaded() {
      console.log('Assets loaded');
      this.setData({
        loaded: true
      });
    },
    handleTrackerSwitch(e) {
      console.log('Tracker switched:', e.detail);
    }
  }
});
