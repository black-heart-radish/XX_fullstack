# 块级元素、行内元素、置换元素、非置换元素

## 块级元素

- 独占一行
- 可以设置宽高

## 行内元素

- 不能设置宽高(错误的理论) --->严谨：  行内非置换元素不能设置宽高，行内置换元素可以设置宽高
- 都在一行上面
- 垂直方向:以当前的base-line （英语本子的第三根线） 对齐

img -> 行内 -> 可以设置宽高

## 置换元素

- 内部内容不受css控制

```html
    <img src="" />  // 由src决定
    <canvas />    // 浏览器有默认宽度
    <input />    // 浏览器有默认宽度
    <iframe src="" />  // 浏览器有默认宽度
    <script src="" />
```

## 非置换元素

```html
    <div>
        <div></div>
    </div>

    <span></span>
```


## 词法（静态）作用域：JS 、C、C++

## 动态作用域：bash