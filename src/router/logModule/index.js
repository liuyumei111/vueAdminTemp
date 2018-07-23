
import loading from "@src/router/loading"
export default [
    {
        name: 'queryLog',
        path: '/queryLog',
        meta: {
            title: '客户信息',
            keepAlive: true,
            requiresAuth: true
        },
        component: r => {
            loading(true);
            return require.ensure([], () => { loading(false); return r(require("@src/views/logModule/queryLog")) }, "queryLog")
        }
    }
]