const twoSum=function(nums , target){
    let map={};        //用于存储数字和索引
    for (i=0 ; i < nums.length ; i++){    //遍历循环
        let dis = target - nums[i];       //dis是目标与数组元素的差值
        if(map[dis]!==undefined){         //在map中寻找有没有差值，刚开始是肯定没有的，map没数据
            return [map[dis],i];          //出现了就返回dis的下标和找的元素的下标i，因为dis的下标肯定在i之前，因为map刚开始没数据，得在后面插
        }else{
            map[nums[i]]=i;               //没找到就把找的元素和下标存入map
        }
    }
    return [];
}