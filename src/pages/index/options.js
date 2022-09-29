/*
 * @Author: wangqz
 * @Date: 2022-09-29
 * @LastEditTime: 2022-09-29
 * @Description: content
 */
// 柱状图

export const barOptions = {
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
}


// 折线图
export const lineOptions = {
	tooltip: {
		trigger: "axis",
		axisPointer: {
			// 坐标轴指示器，坐标轴触发有效
			type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
		},
	},
	xAxis: {
		type: 'category',
		data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
	  },
	  yAxis: {
		type: 'value'
	  },
	  series: [
		{
		  data: [150, 230, 224, 218, 135, 147, 260],
		  type: 'line'
		}
	  ]
};
