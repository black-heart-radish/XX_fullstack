// @annotation 
// class MyClass {

// }

// function annotation(target) {
//   target.annotated = true
// }

// @decorator
// class A {}
// // 等同于
// class A {}
// A = decorator(A) || A

class MyClass {
  @readonly
  @enumerable
  method () {

  }
}

function readonly(target, name, descriptor) {
  descriptor.writable = false
  return descriptor
}

function enumerable(target, name, descriptor) {
  descriptor.enumerable = false
  return descriptor
}