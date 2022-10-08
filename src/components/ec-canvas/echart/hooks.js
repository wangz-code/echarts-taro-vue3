/*
 * @Author: wangqz
 * @Date: 2022-10-06
 * @LastEditTime: 2022-10-08
 * @Description: Echarts hooks
 */

import { onBeforeUnmount } from "vue";
import { debounce } from "../../../utils";

export function useEcharts() {
	let chart = null;

	function register({ initChart }) {
		if (chart == null) {
			initChart().then((res) => {
				chart = res;
			});
		}
	}

	const getInstance = () => {
		return new Promise((resolve) => {
			function check() {
				if (!chart) {
					setTimeout(check, 100);
				} else {
					resolve(chart);
				}
			}
			check();
		});
	};

	const methods = {
		getChart: async () => {
			const chart = await getInstance();
			return chart;
		},
		setOption: async (options, rendered) => {
			const chart = await getInstance();
			console.log("chart log==>", chart);

			rendered && chart.on("rendered", debounce(rendered, 100)());
			chart.setOption(options);
		},
		clear: async () => {
			const chart = await getInstance();
			chart.clear();
		},
		resize: async () => {
			const chart = await getInstance();
			chart.resize();
		},
	};

	onBeforeUnmount(async () => {
		const chart = await getInstance();
		chart.clear();
	});

	return [register, methods];
}
