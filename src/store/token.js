/*
 * @Author: wangqz
 * @Date: 2022-09-23
 * @LastEditTime: 2022-09-23
 * @Description: token 全局状态管理
 */
export const tokenStore = {
	state: {
		token: "c6d5d49e-934e-4d92-93cc-c3ae1a99a309",
	},
	setToken(value) {
		this.state.token = value;
	},
	getToken() {
		return this.state.token;
	},
};
