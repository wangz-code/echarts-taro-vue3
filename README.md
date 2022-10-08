<!--
 * @Author: wangqz
 * @Date: 2022-09-29
 * @LastEditTime: 2022-10-08
 * @Description: content
-->

# echarts5 + taro3 + vue3

> 项目基于 https://github.com/beezen/echarts4taro3 删减了 h5 相关的代码

基于 Taro 3.x 框架构建的微信小程序版本 echarts5 跨端组件，及使用示例。

删除 h5 支持,仅支持微信小程序。

项目中的 echart 使用的是全尺寸的 echarts-5.4.0.zip , 需要减少尺寸自行定制, (下载定制 Echart 替换时不要勾选压缩)。

## 运行环境

小程序基础库 > 最新的就行

```bash
 Taro v3.5.6
```

## git 仓库运行

```
	git clone  https://github.com/wangz-code/echarts-taro-vue3

	npm run install
	npm run dev
```

## 快速开始

方式一：拷贝引用

1、下载组件： /src/components 下 `ec-canvas`

2、拷贝项目 /src/components 下 `ec-canvas` 跨端组件，到业务项目中直接引用

```bash
## src 目录下
.
├── components
│   └── ec-canvas # 图表跨端组件
│       ├── ec-canvas
│       └── echart
└── pages # 使用示例
    ├── ecchart
    └── index
```

### 使用组件

代码示例如下：

```html
<template>
  <view class="bar-chart">
    <EChart @register="regChart" id="bar-canvas" canvas-id="bar-canvas" />
  </view>
</template>

<style>
  .bar-chart {
    width: 200px;
    height: 200px;
  }
</style>
<script>
  import { EChart } from "../../components/ec-canvas";
  export default {
    name: "Index",
    components: {
      EChart,
    },
    setup() {
      let options = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
          },
        ],
      };

      const regChart = async ({ initChart }) => {
        const chart = await initChart(); // 初始化图表
        chart.setOption(options);
      };
      return { regChart };
    },
  };
</script>

// 使用 hooks
<script>
	import { useEcharts } from "../../components/ec-canvas/echart/hooks";
	const [regChart, { setOption }] = useEcharts();

	setOption(options)

</script>
```

## 效果图

![](https://raw.githubusercontent.com/WangSunio/img/main/images/WX20220929-172627%402x.png)

## 注意事项

对于网页加载速度或者微信小程序包体积大小有要求的，可以做如下调整：

1、因为 echarts 图表库本身体积相对较大，所以开发者可以根据业务需要在 echarts [官网定制](https://echarts.apache.org/zh/builder.html) `echarts.js`，只需替换 ec-canvas 组件目录中 `echarts.js` 文件即可正常使用。

2、在微信小程序中对于应用体积有严格的限制要求，开发者可以通过[分包](https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/basic.html)技术对应用进行拆分。

## 参考资料

- [在微信小程序中使用 Apache ECharts](https://github.com/ecomfe/echarts-for-weixin)
- [echarts 官网](https://echarts.apache.org/zh/index.html)
