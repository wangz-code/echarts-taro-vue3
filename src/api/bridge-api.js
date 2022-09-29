/*
 * @Author: wangqz
 * @Date: 2022-09-23
 * @LastEditTime: 2022-09-23
 * @Description: content
 */

import { defHttp } from "./interceptor";

// 获取桥梁列表
export const getBridgeList = (params) => {
	return defHttp.GET("/water2/WeChat/getQl", params);
};
