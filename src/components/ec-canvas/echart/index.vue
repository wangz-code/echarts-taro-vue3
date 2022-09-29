<template>
	<ec-canvas :ref="uid" :canvas-id="canvasId" :ec="ec" :uid="uid" class="echart-canvas" />
</template>

<script>
import * as echarts from "../ec-canvas/echarts";
import EcCanvas from "../ec-canvas";
import { reactive, toRefs } from "vue";
import Taro from "@tarojs/taro";

export default {
	name: "BaseChart",
	components: { EcCanvas },
	props: {
		canvasId: {
			type: String,
			default: "",
		},
	},
	emits: ["register"],

	setup(_, { emit }) {
		const uid = `canvas-${Date.now()}-${Math.floor(Math.random() * 10000)}`; // 唯一标记
		const state = reactive({
			uid,
			chartInstance: {}, // chart 实例
			ec: {
				lazyLoad: true,
			},
			[uid]: null,
		});

		/**
		 * 初始化图表
		 * 注：节点挂载后才能执行
		 */
		const initChart = () => {
			return new Promise((resolve) => {
				state[uid].init((canvas, width, height, canvasDpr) => {
					const chart = echarts.init(canvas, null, {
						width: width,
						height: height,
						devicePixelRatio: canvasDpr,
					});
					canvas.setChart(chart);
					state.chartInstance = chart;
					// 优化图表尺寸未获取到情况
					if (!width || !height) {
						let count = 0;
						const doFn = () => {
							count++;
							wx.createSelectorQuery()
								.select(`.${this.uid}`)
								.fields({
									node: true,
									size: true,
								})
								.exec((res) => {
									const canvasWidth = res[0].width;
									const canvasHeight = res[0].height;
									if ((!canvasWidth || !canvasHeight) && count < 20) {
										setTimeout(doFn, 100);
									} else {
										chart.resize({
											width: canvasWidth,
											height: canvasHeight,
										});
									}
								});
						};
						doFn();
						resolve(chart);
						return chart;
					}
					resolve(chart);
					return chart;
				});
			});
		};

		Taro.useReady(() => {
			emit("register", { initChart });
		});
		return { ...toRefs(state) };
	},
};
</script>

<style>
.echart-canvas {
	width: 100%;
	height: 100%;
}
</style>
