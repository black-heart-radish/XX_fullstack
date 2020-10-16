window.onload = function () {
    imgLocation('container', 'box');
}

// 获取到当前有多少张图片要摆放
function imgLocation(parent, content) {
    var cparent = document.getElementById(parent);
    // var ccontent = document.querySelectorAll(content);
    var ccontent = getChildElement(cparent, content);
    // console.log(ccontent);
    var imgWidth = ccontent[0].offsetWidth;
    var num = Math.floor(document.documentElement.clientWidth / imgWidth);
    cparent.style.cssText = `width:${imgWidth * num}px`;
    // console.log(cparent);
    // console.log(imgWidth);
    // console.log(num);
    // console.log(`width: ${imgWidth * num}px`);
    // 拿到第二行的第一张图片，放到第一行高度最小的图片下面
    var BoxHeightArr = [];
    for (var i = 0; i < ccontent.length; i++) {
        if (i < num) {
            BoxHeightArr[i] = ccontent[i].offsetHeight;
        }else {
            // apply将Math里面的min方法借用给数组去用
            var minHeight = Math.min.apply(null, BoxHeightArr);
            var minIndex = getMinHeightLocation(BoxHeightArr, minHeight);
            ccontent[i].style.position = 'absolute';
            ccontent[i].style.top = minHeight + 'px';
            ccontent[i].style.left = ccontent[minIndex].offsetLeft + 'px';
            BoxHeightArr[minIndex] += ccontent[i].offsetHeight;
        }
    }
    // console.log(BoxHeightArr);


}

function getChildElement (parent, content) {
    var contentArr = [];
    var allContent = parent.getElementsByTagName('*');
    // console.log(allContent);
    for (var i = 0; i < allContent.length; i++) {
        if (allContent[i].className == content) {
            contentArr.push(allContent[i]);
        }
    }
    return contentArr;
}

function getMinHeightLocation(Arr, min) {
    for(var i = 0; i < Arr.length; i++) {
        if(min === Arr[i])
            return i;
    }
    return false;
}