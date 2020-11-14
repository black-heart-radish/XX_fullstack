# HTTP超文本传输协议，固定的格式

- 输入URL  --> 看到页面
    GET www.baidu.com HTTP/1.1 cr lf(cr lf为回车 换行)
    user-agent: XXX IE/chrome
    ~
    ~

    把上面的格式放到传输层（TCP， HTTP是基于TCP与UDP的）去

    拿到响应
    HTTP/1.1 200 ok
    content-type: text/html
    key:value

    <!DOCTYPE html>
    <html>
    </html>