<template>
  <div class="left-chart-1">
    <div class="lc1-header" style="font-size: 18px;font-weight: 600;">Road Condition Analysis</div>
    <div class="lc1-details">Total Defects Detected: <span>763</span></div>
    <dv-capsule-chart class="lc1-chart" :config="config" />
    <dv-decoration-2 style="height:10px;" />
  </div>
</template>

<script>
export default {
  name: 'LeftChart1',
  data () {
    return {
      config: {
        data: [
          {
            name: 'Cracks',
            value: 356
          },
          {
            name: 'Potholes',
            value: 215
          },
          {
            name: 'Rutting',
            value: 90
          },
          {
            name: 'Other',
            value: 102
          }
        ],
        colors: ['#00baff', '#3de7c9', '#fff', '#ffc530'],
        unit: 'defects'
      }
    }
  }
}
</script>

<style lang="less">
.left-chart-1 {
  width: 100%;
  height: 37%;
  display: flex;
  flex-grow: 0;
  flex-direction: column;

  .lc1-header {
    text-align: center;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    margin-bottom: 20px;
  }

  .lc1-details {
    height: 50px;
    font-size: 16px;
    display: flex;
    align-items: center;
    text-indent: 20px;

    span {
      color: #096dd9;
      font-weight: bold;
      font-size: 35px;
      margin-left: 20px;
    }
  }

  .lc1-chart {
    flex: 1;
  }
}
</style>
