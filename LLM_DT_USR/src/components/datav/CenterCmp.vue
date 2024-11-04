<template>
  <div class="cesium-container">
    <iframe 
      title="GeoAI" 
      width="100%" 
      height="100%" 
      src="https://ion.cesium.com/stories/viewer/?id=311c780f-858b-43a9-8fee-0b16337787d1" 
      frameborder="0" 
      allow="fullscreen" 
      allowfullscreen="true" 
      mozallowfullscreen="true" 
      webkitallowfullscreen="true">
    </iframe>

    <LabelTag :config="labelConfig" />
  </div>
</template>

<script>
export default {
  name: 'CesiumViewer',
  data() {
    return {
      storyAssetId: 'ea96074a-db47-498b-a503-1761d78315f8', // 这是您Story的ID
      viewer: null,
      position: {},
      pointStyle: {},
      labelStyle: {},
      labelConfig: {
        // ... 您的标签配置
      },
      widgetId: 'ww_8a729073ec038',
      widgetLink: 'https://weatherwidget.org/',
      widgetConfig: JSON.stringify({
        "t":"responsive",
        "lang":"en",
        "sl_lpl":1,
        "ids":["wl4467"],
        "font":"Arial",
        "sl_ics":"one_a",
        "sl_sot":"celsius",
        "cl_bkg":"image",
        "cl_font":"#FFFFFF",
        "cl_cloud":"#FFFFFF",
        "cl_persp":"#81D4FA",
        "cl_sun":"#FFC107",
        "cl_moon":"#FFC107",
        "cl_thund":"#FF5722",
        "sl_tof":"3",
        "el_wfc":3
      }),
      messageHandler: null
    }
  },
  mounted() {
    this.setupMessageHandler();
    //this.loadWeatherWidget();
    //this.loadTomorrowSDK();
  },
  beforeDestroy() {
    // 清理消息监听器
    if (this.messageHandler) {
      window.removeEventListener('message', this.messageHandler);
    }
  },
  methods: {
    onViewerReady(viewer) {
      console.log('Viewer is ready')
      this.viewer = viewer
      // 设置初始视图
      this.viewer.camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(114.177216, 22.302711, 1500),
        orientation: {
          heading: Cesium.Math.toRadians(0),
          pitch: Cesium.Math.toRadians(-45),
          roll: 0.0
        }
      });

      // 初始化位置和样式
      this.position = Cesium.Cartesian3.fromDegrees(114.177216, 22.302711, 100)
      this.pointStyle = { pixelSize: 10, color: Cesium.Color.RED }
      this.labelStyle = { text: '香港', font: '14pt sans-serif' }
      const storyPromise = IonResource.fromAssetId(this.storyAssetId);
      viewer.scene.primitives.add(new Cesium.Cesium3DTileset({ url: storyPromise }));
    },
    loadWidgetScript() {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://app2.weatherwidget.org/js/?id=${this.widgetId}`;
      document.body.appendChild(script);
    },
    loadTomorrowSDK() {
      if (window.__TOMORROW__) {
        window.__TOMORROW__.renderWidget();
        return;
      }

      const script = document.createElement('script');
      script.id = 'tomorrow-sdk';
      script.src = 'https://www.tomorrow.io/v1/widget/sdk/sdk.bundle.min.js';
      script.async = true;
      script.onload = () => {
        if (window.__TOMORROW__) {
          window.__TOMORROW__.renderWidget();
        }
      };
      document.head.appendChild(script);
    },
    loadWeatherWidget() {
      console.log('Load weather widget')
      const script = document.createElement('script');
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.src = 'https://windy.app/widget2/windy_stats_async.js?v31';
      document.head.appendChild(script);
    },
    startMeasure() {
      this.$refs.measureDistance.startNew()
    },
    flyToInitialView() {
      this.viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(114.177216, 22.302711, 1500),
        orientation: {
          heading: Cesium.Math.toRadians(0),
          pitch: Cesium.Math.toRadians(-45),
          roll: 0.0
        },
        duration: 3
      })
    },
    setupMessageHandler() {
      // 设置消息处理器
      this.messageHandler = (event) => {
        console.log('Received message:', event.data); // 添加日志
        // 验证消息来源
        if (!event.origin.includes('ion.cesium.com')) {
          return;
        }

        try {
          const message = event.data;
          
          switch (message.type) {
            case 'cameraMove':
              this.handleCameraMove(message.position, message.orientation);
              break;
            case 'addMarker':
              this.handleAddMarker(message.position, message.description);
              break;
            case 'highlightDefect':
              this.handleHighlightDefect(message.defectId, message.color);
              break;
          }
        } catch (error) {
          console.error('Error handling message:', error);
        }
      };

      // 添加消息监听器
      window.addEventListener('message', this.messageHandler);
    },

    handleCameraMove(position, orientation) {
      console.log('Handling camera move:', { position, orientation }); // 添加日志
      const iframe = document.querySelector('iframe');
      iframe.contentWindow.postMessage({
        type: 'cameraMove',
        position,
        orientation
      }, '*');
    },

    handleAddMarker(position, description) {
      console.log('Handling add marker:', { position, description }); // 添加日志
      const iframe = document.querySelector('iframe');
      iframe.contentWindow.postMessage({
        type: 'addMarker',
        position,
        description
      }, '*');
    },

    handleHighlightDefect(defectId, color) {
      const iframe = document.querySelector('iframe');
      iframe.contentWindow.postMessage({
        type: 'highlightDefect',
        defectId,
        color
      }, '*');
    }
  }
}
</script>

<style scoped>
.cesium-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.control-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 5px;
}

.control-panel button {
  margin: 5px;
  padding: 5px 10px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.control-panel button:hover {
  background: #45a049;
}
</style>
