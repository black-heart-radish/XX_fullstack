const fs = require('fs');
fs.readFile('./index.html', 'utf8', (err, file) => {
    console.log(file);
})

// 包装成Promise
let p = (url) => new Promise((resolve, reject) => {
    fs.readFile('url', 'utf8', (err, file) => {
        resolve(file);
    })
})
// p('./index.html').then((file) => {
//     console.log('file', fiel);
// })
p('./index.html').then(() => {
    p.then('./a.js')
})