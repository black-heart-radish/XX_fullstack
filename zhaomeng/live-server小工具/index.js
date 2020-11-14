const fs = require('fs');
const {exec} = require('child_process');
const http = require('http');
// baidu.com/a
// baidu.com/b
// baidu.com/b?search=xxx
// baidu.com/b?search=xxx#xx
const server = http.createServer((req, res) => {
    // res.end('hello world');
    if (req.url === '/') {
        const files = [];
        fs.readdirSync('./')
        .forEach(url => {
            files.push(`<a href="/${url}">${url}</a>`)
        })
        res.end(files.join('</br>'))
    }else {
        // 静态资源服务
        const exist = fs.existsSync('.' + req.url);
        if (!exist) {
            res.statusCode = 404;
            res.end('404');
            return ;
        }
        fs.readFile('.' + req.url, (err, file) => {
            if (!err) {
                const path = require('path')
                const extname = path.extname('.' + req.url);
                const map = {
                    '.js': 'application/javascript;charset=utf-8',
                    'md': 'text/plain;charset=utf-8'   // 还是会乱码，未解决
                }
                res.setHeader('Content-Type', `${map[extname]}`)
                res.end(file);
            }
        })
    }
})
server.listen(5501, () => {
    const url = `http://127.0.0.1:5501`
    if (process.platform === 'win32') {
        exec(`start ${url}`)
    }else {
        exec(`open ${url}`)
    }
})