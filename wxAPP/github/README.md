# 云开发 quickstart

这是云开发的快速启动指引，其中演示了如何上手使用云开发的三大基础能力：

- 数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 文档型数据库
- 文件存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理
- 云函数：在云端运行的代码，微信私有协议天然鉴权，开发者只需编写业务逻辑代码

## 参考文档

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)

## 复杂组件的交互设计

    提个问题  pickerview

1. button
2. picker
    onchange
    values
    range[日期  语言]

- 用户体验
    1. 用户的使用习惯，约等于配置，storage
        产品懂他
    2. 约定的用户体验，列表筛选条件发生改变的时候，页面滚到最顶端（划了好多页 + onPullDownRefresh）
    3. 首页的列表数据要缓存，很快打开，
        onLoad 加载刷新
- trends 获取
    url + callback