// console.log('startrequire');
// console.log(require('./lib.js'));
// console.log('endquire');


let lib = require('./lib.js');
console.log(lib);

lib.name = '蜗牛'


exports导出的引用与index里lib是同一个玩意儿