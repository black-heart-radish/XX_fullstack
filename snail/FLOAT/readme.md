# 浮动

使文本脱离文档流,只针对DOM结构，不针对文本（文字环绕）

高度塌陷

## 清除浮动

1. 在最后一个浮动元素后面增加一个冗余元素，给他设置style="clear:both",很low
    <li style="clear:both"></li>
2. 给父元素增加一个伪类
    .clearfix::after {
        content: '';
        display: block;
        clear: both;
    }
3. bfc

# margin重叠

1. bfc