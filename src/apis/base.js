
export const oaIp = (() => {
    switch (process.env.NODE_ENV) {
        case "development":
            return "http://localhost:3000/";
        case "productionTest":
            return location.protocol + "//tm.yeepiao.com/";
        case "production":
            return location.protocol + "//m.yeepiao.com/";
    }
})()

