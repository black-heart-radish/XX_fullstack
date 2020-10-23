// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'xx-9g31ft5v4cb18195'

cloud.init()
const db = cloud.database({env})   // 指明云函数生效的环境

// 云函数入口函数
exports.main = async (event, context) => {
  const openId = cloud.getWXContext().OPENID
  // 查找user-group这个库里面是否具有该openId    // 查找用where()  找到执行.get
  // 按照这个openId把user-group里对应的数据取出
  // 去group这个库里面查找所有的_id和groupId相同的数据
}