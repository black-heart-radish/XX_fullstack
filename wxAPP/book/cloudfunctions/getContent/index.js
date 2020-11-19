// 云函数入口文件
const cloud = require('wx-server-sdk')
const cheerio = require('cheerio'); // 对DOM进行操作
let charset = require('superagent-charset'); // 解决乱码
let superagent = require('superagent'); // 发起请求
charset(superagent);

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let serverUrl = `https://wap.biqiuge8.com/${event.url}`;
  const result = await superagent.get(serverUrl).charset('gb2312'); // .charset('gb2312')取决于网页的编码方式
  const data = result.text || '';
  const $ = cheerio.load(data, {decodeEntities: false});  // 后面这段是防止乱码
  let content = $('#chaptercontent').text();
  let contentH = $('#chaptercontent').html();
  // let sectionName = 
  let catalog = $('#pb_mulu').attr('href');
  let pre = $('#pb_prev').attr('href');
  let next = $('#pb_next').attr('href');

  return {
    content,
    contentH,
    catalog,
    pre,
    next
  }
}