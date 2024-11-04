<template>
  <div class="bottom-charts">
    <div class="bc-chart-item">
      <div class="bcci-header">Overall Road Defects</div>
      <dv-active-ring-chart :config="config1" />
      <Label-Tag :config="labelConfig" />
    </div>
    <dv-decoration-2 class="decoration-1" :reverse="true" style="width:5px;" />

    <div class="bc-chart-item">
      <div class="bcci-header">Main Road Defects</div>
      <dv-active-ring-chart :config="config2" />
      <Label-Tag :config="labelConfig" />
    </div>

    <dv-decoration-2 class="decoration-2" :reverse="true" style="width:5px;" />

    <div class="bc-chart-item">
      <div class="bcci-header">Secondary Road Defects</div>
      <dv-active-ring-chart :config="config3" />
      <Label-Tag :config="labelConfig" />
    </div>

    <dv-decoration-2 class="decoration-3" :reverse="true" style="width:5px;" />

    <div class="bc-chart-item">
      <div class="bcci-header">Branch Road Defects</div>
      <dv-active-ring-chart :config="config4" />
      <Label-Tag :config="labelConfig" />
    </div>

  </div>
</template>

<script>
import LabelTag from './LabelTag'

export default {
  name: 'BottomCharts',
  components: {
    LabelTag
  },
  data () {
    return {
      config1: {
        data: [
          { name: 'Cracks', value: 1200 },
          { name: 'Potholes', value: 800 },
          { name: 'Rutting', value: 600 },
          { name: 'Other', value: 400 }
        ],
        color: ['#00baff', '#3de7c9', '#fff', '#ffc530'],
        radius: '65%',
        activeRadius: '70%'
      },

      config2: {
        data: [
          { name: 'Cracks', value: 600 },
          { name: 'Potholes', value: 450 },
          { name: 'Rutting', value: 300 },
          { name: 'Other', value: 150 }
        ],
        color: ['#00baff', '#3de7c9', '#fff', '#ffc530'],
        radius: '65%',
        activeRadius: '70%'
      },

      config3: {
        data: [
          { name: 'Cracks', value: 400 },
          { name: 'Potholes', value: 250 },
          { name: 'Rutting', value: 200 },
          { name: 'Other', value: 150 }
        ],
        color: ['#00baff', '#3de7c9', '#fff', '#ffc530'],
        radius: '65%',
        activeRadius: '70%'
      },

      config4: {
        data: [
          { name: 'Cracks', value: 200 },
          { name: 'Potholes', value: 100 },
          { name: 'Rutting', value: 100 },
          { name: 'Other', value: 100 }
        ],
        color: ['#00baff', '#3de7c9', '#fff', '#ffc530'],
        radius: '65%',
        activeRadius: '70%'
      },

      labelConfig: {
        data: ['Cracks', 'Potholes', 'Rutting', 'Other']
      }
    }
  }
}
</script>
<style lang="less">
.bottom-charts {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;

  .bc-chart-item {
    width: 25%;
    height: 100%;
    padding-top: 20px;
    box-sizing: border-box;
  }

  .bcci-header {
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 20px;
  }

  .dv-active-ring-chart {
    height: calc(~"100% - 80px");
  }

  .label-tag {
    height: 30px;
  }

  .active-ring-name {
    font-size: 18px !important;
  }

  .decoration-1, .decoration-2, .decoration-3 {
    display: absolute;
    left: 0%;
  }
}
</style>