// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'xx-9g31ft5v4cb18195'

cloud.init()
const db = cloud.database({env})   // 指明云函数生效的环境

// 云函数入口函数
exports.main = async (event, context) => {
  const userInfo = event.userInfo;

  // 先查看user库里面有没有这个openId
  const checkUser = await db.collection('user').where({
    openId: userInfo.openId
  }).get()
  // 已经存在该用户
  if (checkUser.data.length > 0) {
    // doc叫找准当前的数据
    await db.collection('user').doc(checkUser.data[0]._id)
      .update({
        data: {
          avatarUrl: event.avatarUrl,
          nickName: event.nickName,
          sex: event.sex
        }
      })
  } else {
    const insertResult = await db.collection('user').add({
      data: {
        avatarUrl: event.avatarUrl,
        nickName: event.nickName,
        sex: event.sex,
        name: '',
        openId: event.userInfo.openId,
        createTime: new Date()
      }
    })
  }
}