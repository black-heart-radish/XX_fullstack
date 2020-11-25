let foo = {
    value: 1,
    getValue: () => console.log(this.value)   // 箭头函数没有this
}
foo.getValue();