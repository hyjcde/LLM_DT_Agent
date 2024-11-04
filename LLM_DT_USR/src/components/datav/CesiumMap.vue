<template>
  <div id="cesiumContainer" style="width: 100%; height: 100%;"></div>
</template>

<script>
import * as Cesium from 'cesium';

export default {
  name: 'CesiumMap',
  mounted() {
    this.initCesium();
  },
  methods: {
    initCesium() {
      // 创建 Cesium Viewer 实例
      const viewer = new Cesium.Viewer('cesiumContainer', {
        terrainProvider: Cesium.createWorldTerrain()
      });

      // 可以在这里添加更多的 Cesium 配置和初始化代码
    }
  }
};
</script>

<style>
/* 为 Cesium 容器设置样式 */
#cesiumContainer {
  width: 100%;
  height: 600px; /* 可以根据需要调整高度 */
}
</style>
