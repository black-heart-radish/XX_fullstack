//js 动态弱类型语言
// twoSum undefined  => function
// go 类型的约束  现代的c语言
func twoSum(nums []int , target int) []int {
	//o(n2)=>o(n)
	// 2 7 9
	// for
	// 9-2=7
	// {7:0,}  //哈希表HashTable
	// json 7
	h := make(map[int]int) //创建一个哈希表HashTable  h
	//js for python
	for i, value := range nums{      //for循环，通过通过range遍历
		if wanted, ok := h[value]; ok {    //把h[value]的下标的值赋值给wanted和ok，判断ok是否存在
			return []int{wanted, i}        //存在就输出
		}else{
			h[target-value]=i              //如果不存在将差值存入，刚开始是肯定都不存在的
		}
	}
	return nil
}