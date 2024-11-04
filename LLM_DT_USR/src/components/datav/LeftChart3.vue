<template>
  <div className="left-chart-3">
    <div className="lc3-header">Defect Distribution by Road Age</div>
    <div className="lc3-details">Total Roads Analyzed: <span>245</span></div>
    <dv-capsule-chart className="lc3-chart" :config="config"/>
  </div>
</template>

<script>
export default {
  name: 'LeftChart3',
  data() {
    return {
      config: {
        data: [
          {name: '0-5 years', value: 78},
          {name: '6-10 years', value: 54},
          {name: '11-15 years', value: 123},
          {name: '16-20 years', value: 167},
          {name: '20+ years', value: 77}
        ],
        colors: ['#2ECC40', '#3DE7C9', '#FFDC00', '#FF851B', '#FF4136'],
        unit: 'roads'
      }
    }
  }
}
</script>

<style lang="less">
.left-chart-3 {
  width: 100%;
  height: 33%;
  display: flex;
  flex-direction: column;
  background-color: rgba(15, 23, 42, 0.75);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

  .lc3-header {
    height: 30px;
    line-height: 30px;
    font-size: 20px;
    font-weight: bold;
    color: #e2e8f0;
    margin-bottom: 15px;
  }

  .lc3-details {
    height: 40px;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #94a3b8;
    margin-bottom: 20px;

    span {
      color: #38bdf8;
      font-weight: bold;
      font-size: 32px;
      margin-left: 10px;
    }
  }

  .lc3-chart {
    flex: 1;

    :deep(.capsule-chart) {
      .unit {
        font-size: 14px;
        fill: #94a3b8;
      }

      .capsule-item {
        .label {
          fill: #e2e8f0;
        }

        .value {
          font-size: 14px;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
