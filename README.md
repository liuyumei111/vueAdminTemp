
vue-cli 3.0版本 和 Element-ui +Json-server搭建的后台管理系统

# admin

## 安装依赖
```
npm install
```

### 启动开发环境 环境变量：development
```
npm run dev
```

### 打包测试环境 环境变量：productionTest
```
npm run build:test
```

### 打包生产环境 环境变量：production
```
npm run build

额外说明：
Json-server-api  是一个模拟json接口的服务
用途就是模拟json数据，从git克隆到需要模拟数据的项目的src同级目录，进入到json-sover-api文件
1.安装依赖  npm install   2.启动服务 npm run dev  3.配置接口需要的数据
一切就绪可以像正常api一样调用
```
