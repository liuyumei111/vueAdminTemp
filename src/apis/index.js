
import http from "./http";
import {oaIp} from "./base";
// import orgCodeHandle from "./orgcode";
// console.log(orgCodeHandle);

/**
 * 获取验证码
 * @param {路径手机号} phone
 * @param {验证码类型} params.type  regist | login
 */
// 用户登录
const getList = (params) => http.get(oaIp, "/list", params)



// 邮箱配置end
export {
    getList
};

