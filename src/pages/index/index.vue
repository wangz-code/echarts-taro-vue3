<template>
  <view>
    <view class="canvas-area">
      <EChart @register="regLineChart" id="linecanvas" canvas-id="linecanvas" />
    </view>
    <view class="canvas-area">
      <EChart @register="regBarChart" id="barcanvas" canvas-id="barcanvas" />
    </view>
  </view>
</template>

<style>
.row {
  display: flex;
  width: 100wh;
  height: 100vh;
}
.canvas-area {
  width: 50wh;
  height: 50vh;
}
</style>
<script>
import { EChart } from "../../components/ec-canvas";
import { barOptions, lineOptions } from "./options";
export default {
  name: "Index",
  components: {
    EChart,
  },
  setup() {
    // 折线图
    const regLineChart = async ({ initChart }) => {
      const chart = await initChart(); // 初始化图表
      chart.setOption(lineOptions);
      setInterval(() => {
        // chart.clear(); // 清除图表
        let firstValue = lineOptions.series[0].data.shift();
        lineOptions.series[0].data.push(firstValue);
        chart.setOption(lineOptions);
      }, 1000);
    };

    // 柱状图
    const regBarChart = async ({ initChart }) => {
      const chart = await initChart(); // 初始化图表
      chart.setOption(barOptions);
      setInterval(() => {
        // chart.clear(); // 清除图表
        let firstValue = barOptions.series[0].data.shift();
        barOptions.series[0].data.push(firstValue);
        chart.setOption(barOptions);
      }, 1000);
    };
    return { regBarChart, regLineChart };
  },
};
</script>
