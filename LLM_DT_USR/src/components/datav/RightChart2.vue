<template>
  <div class="right-chart-2">
    <div class="rc1-header">Road Defect Distribution by Severity</div>

    <div class="rc1-chart-container">
      <div class="left">
        <div class="number">763</div>
        <div>Total Defects</div>
      </div>

      <dv-charts class="right" :option="option" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'RightChart2',
  data () {
    return {
      option: {
        series: [
          {
            type: 'pie',
            data: [
              { name: 'Critical', value: 90 },
              { name: 'Major', value: 215 },
              { name: 'Minor', value: 356 },
              { name: 'Cosmetic', value: 102 }
            ],
            radius: ['45%', '65%'],
            insideLabel: {
              show: false
            },
            outsideLabel: {
              labelLineEndLength: 10,
              formatter: '{percent}%\n{name}',
              style: {
                fontSize: 14,
                fill: '#fff'
              }
            }
          }
        ],
        color: ['#FF4136', '#FF851B', '#FFDC00', '#2ECC40']
      }
    }
  }
}
</script>

<style lang="less">
.right-chart-2 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .rc1-header {
    font-size: 24px;
    font-weight: bold;
    height: 30px;
    line-height: 30px;
  }

  .rc1-chart-container {
    flex: 1;
    display: flex;
  }

  .left {
    width: 30%;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .number {
      font-size: 34px;
      color: #096dd9;
      font-weight: bold;
      margin-bottom: 30px;
    }
  }

  .right {
    flex: 1;
    padding-bottom: 20px;
    padding-right: 20px;
    box-sizing: border-box;
  }
}
</style>
