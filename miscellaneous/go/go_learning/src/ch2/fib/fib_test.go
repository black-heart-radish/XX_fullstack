package fib

import (
	"testing"
)

// 1,1,2,3,5,8....

func TestFibList(t *testing.T) {
	// var a int = 1
	// var b int = 1

	// var (
	// 	a int = 1
	// 	b = 1
	// )

	// :=声明且赋值
	a := 1
	b := 1
	t.Log(a)
	for i := 0; i < 5; i++ {
		t.Log("", b)
		tmp := a
		a = b
		b = tmp + a
	}
}
