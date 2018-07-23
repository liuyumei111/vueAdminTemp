
import loading from "@src/router/loading"
export default [
    {
        name: 'dataProduct',
        path: '/dataProduct',
        meta: {
            title: '数据产品',
            keepAlive: true,
            requiresAuth: true
        },
        component: r => {
            loading(true);
            return require.ensure([], () => { loading(false); return r(require("@src/views/authModule/dataProduct")) }, "dataProduct")
        }
    },
    {
        name: 'roleAdmin',
        path: '/roleAdmin',
        meta: {
            title: '角色部署',
            keepAlive: true,
            requiresAuth: true
        },
        component: r => {
            loading(true);
            return require.ensure([], () => { loading(false); return r(require("@src/views/authModule/roleAdmin")) }, "roleAdmin")
        }
    }
]