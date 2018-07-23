
import loading from "@src/router/loading"
export default [
    {
        name: 'oneQuery',
        path: '/oneQuery',
        meta: {
            title: '单条查询',
            keepAlive: true,
            requiresAuth: true
        },
        component: r => {
            loading(true);
            return require.ensure([], () => { loading(false); return r(require("@src/views/queryModule/oneQuery")) }, "oneQuery")
        }
    },
    {
        name: 'taskQuery',
        path: '/taskQuery',
        meta: {
            title: '任务查询',
            keepAlive: true,
            requiresAuth: true
        },
        component: r => {
            loading(true);
            return require.ensure([], () => { loading(false); return r(require("@src/views/queryModule/taskQuery")) }, "taskQuery")
        }
    }
]