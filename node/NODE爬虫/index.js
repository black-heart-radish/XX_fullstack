// 加载https模块，是要有获取网站链接的操作，都需要
const https = require('https')
// 加载cheerio(像jqueery)
const cheerio = require('cheerio')
const fs = require('fs')

https.get('https://movie.douban.com/top250', (res) => {
    let html = ''
    // res.on类似于addEventListener,用于监听数据
    res.on('data', (chunk) => {
        html += chunk
    })
    // 监听res数据加载完成，就执行我需要的效果
    res.on('end', () => {
        // console.log(html);
        // $是cheerio规定的，不能写别的
        const $ = cheerio.load(html)
        // 用一个数组来保存我们爬到的数据
        let allFilms = []

        // 取到li里面的item,注意空格
        $('li .item').each(function() {
            // this指的是item
            const title = $('.title', this).text()
            const star = $('.rating_num', this).text()
            // jquery 获取 img 的src的值用attr()
            const pic = $('img', this).attr('src')
            // push一个对象进去就要加花括号{}
            allFilms.push({title, star, pic})
        })

        fs.writeFile('./files.json', JSON.stringify(allFilms), (err) => {
            if (!err) {
                console.log('文件写入完成');
            }
        })
    })
})