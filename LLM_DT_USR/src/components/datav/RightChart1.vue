<template>
  <div class="right-chart-1">
    <div class="rc1-header">Defect Types by Road Surface</div>

    <div class="rc1-chart-container">
      <div class="left">
        <div class="number">763</div>
        <div class="label">Total Defects</div>
      </div>

      <dv-capsule-chart class="right" :config="config" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'RightChart1',
  data () {
    return {
      config: {
        data: [
          { name: 'Asphalt', value: 356 },
          { name: 'Concrete', value: 215 },
          { name: 'Gravel', value: 90 },
          { name: 'Composite', value: 72 },
          { name: 'Others', value: 30 }
        ],
        unit: 'defects',
        colors: ['#3498db', '#e74c3c', '#f1c40f', '#2ecc71', '#9b59b6']
      }
    }
  }
}
</script>

<style lang="less">
.right-chart-1 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(16, 24, 43, 0.8);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

  .rc1-header {
    font-size: 22px;
    font-weight: bold;
    color: #ecf0f1;
    margin-bottom: 20px;
  }

  .rc1-chart-container {
    flex: 1;
    display: flex;
    align-items: center;
  }

  .left {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-right: 20px;
    border-right: 1px solid rgba(236, 240, 241, 0.1);

    .number {
      font-size: 40px;
      color: #3498db;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .label {
      font-size: 16px;
      color: #bdc3c7;
    }
  }

  .right {
    flex: 1;
    padding-left: 20px;

    :deep(.capsule-chart) {
      .unit {
        fill: #bdc3c7;
      }
      .capsule-item {
        .label {
          fill: #ecf0f1;
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
