const router = require('koa-router')()
const userService = require('../controllers/mySqlConfig')

router.prefix('/users')

// router.get('/', function (ctx, next) {
//   ctx.body = 'this is a users response!'
// })

// router.get('/bar', function (ctx, next) {
//   ctx.body = 'this is a users/bar response'
// })

// 注册
router.post('/userRegister', async (ctx, next) => {
  let _nickname = ctx.request.body.nickname;
  let _username = ctx.request.body.username;
  let _userpwd = ctx.request.body.userpwd;

  let arr = [_username, _userpwd, _nickname]

  if (!_nickname || !_username || !_userpwd) {
    ctx.body = {
      code: '80003',
      data: 'error',
      mess: '昵称，账号或密码不能为空!'
    }
  }
  // 判断用户账号是否存在
  await userService.findUser(_username).then(async res => {
    if (res.length) {
      ctx.body = {
        code: '80004',
        data: 'error',
        mess: '账号已存在，请重新输入'
      }
    } else {
      // 插入注册信息
      await userService.insertUser(arr).then(res => {
        console.log(res);
        if (res.affectedRows != 0) {
          ctx.body = {
            code: '80000',
            data: 'ok',
            mess: '注册成功'
          }
        } else {
          ctx.body = {
            code: '80005',
            data: 'error',
            mess: '注册失败'
          }
        }
      }).catch (err => {
        ctx.body = {
          code: '80002',
          data: err
        }
      })
    }
  }).catch (err => {
    ctx.body = {
      code: '80002',
      data: err
    }
  })
})


// 登录
router.post('/userLogin', async (ctx, next) => {
  let _username = ctx.request.body.username;
  let _userpwd = ctx.request.body.userpwd;

  // 把参数拿到数据库里查询
  await userService.userLogin(_username, _userpwd).then(res => {
    console.log(res);

    let r = ''
    if (res.length) {
      r = 'ok'
      let result = {
        id: res[0].id,
        nickname: res[0].nickname,
        username: res[0].username,
      }
      ctx.body = {
        code: '80000',
        data: result,
        mess: '登录成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '80004',
        data: r,
        mess: '账号或密码错误'
      }
    }
  }).catch (err => {
    ctx.body = {
      code: '80002',
      data: err
    }
  })
})

// 根据分类查找对应的文章列表
router.post('/findNoteListByType', async (ctx, next) => {
  let note_type = ctx.request.body.note_type;
  await userService.findNoteListByType(note_type).then(res => {
    // console.log(res);
    if (res.length) {
      ctx.body = {
        code: '80000',
        data: res,
        mess: 'OK'
      }
    } else {
      ctx.body = {
        code: '80004',
        data: 'error',
        mess: '内容为空'
      }
    }
  })
})

// 查找笔记详情
router.post('/findNoteDetail', async (ctx, next) => {
  let id = ctx.request.body.id;
  await userService.findNoteDetail(id).then(res => {
    // console.log(res);
    if (res.length) {
      ctx.body = {
        code: '80000',
        data: res[0],
        mess: 'OK'
      }
    } else {
      ctx.body = {
        code: '80004',
        data: 'error',
        mess: '内容为空'
      }
    }
  })
})

// 发布笔记


module.exports = router
