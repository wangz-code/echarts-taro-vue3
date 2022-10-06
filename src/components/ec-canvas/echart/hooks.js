/*
 * @Author: wangqz
 * @Date: 2022-10-06
 * @LastEditTime: 2022-10-06
 * @Description: Echarts hooks
 */

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
		setOption: async (options) => {
			const chart = await getInstance()
			chart.setOption(options)
		},
	};

	return [register, methods];
}
