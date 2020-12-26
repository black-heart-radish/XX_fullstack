class Math {
  @log
  add (a, b) {
    return a + b
  }
}

function log(target, name, descripor) {
  let oldValue = descripor.value
  descripor.value = function (...args) {
    console.log(`Calling ${name} with`, args);
    return oldValue.apply(this, args)
  }
  return descripor
}

let math = new Math()
console.log(math.add(2, 4));