/*
 * @Author: wangqz
 * @Date: 2022-09-23
 * @LastEditTime: 2022-09-23
 * @Description: 拦截器
 */

import { API_BASE_URL } from "../config";
import Taro from "@tarojs/taro";

const interceptor = function (chain) {
	// 请求拦截器
	return chain.proceed(chain.requestParams).then((res) => {
		// 响应拦截器
		console.log("处理 log==>", res.data);
		return {
			status: res.data.code == 200 ? "success" : "failure",
			data: {
				list: res.data.pageTemp.data,
				count: res.data.pageTemp.total,
			},
		};
	});
};



Taro.addInterceptor(interceptor);

export const defHttp = {
	GET: (url, params) => {
		return Taro.request({ url: API_BASE_URL + url, data: params });
	},
	POST: () => {},
};
