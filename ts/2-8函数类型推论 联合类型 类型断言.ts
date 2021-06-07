//type script会在没有明确指定类型的时候推测一个类型
//这就是类型推论 type interface
let str = "123"

//union types 联合类型
// |

let numberOrString: number | string
// numberOrString = 123
// numberOrString = "666"

//当TS不确定联合类型的变量到底是那个类型，
// 那么就只能访问此联合类型里所有类型共有的属性和方法
// numberOrString.length  
//  类型“string | number”上不存在属性“length”。类型“number”上不存在属性“length”。


//类型断言 
//告诉编译器你比他更了解这个类型，让他停止错误警告 
//as

function GetLength(input: number | string): number{
    const str = input as string
    if(str.length){
        return str.length
    }else{
        const num = input as number
        return num.toString().length
    }
}


//类型断言不是类型转换 把他断言成联合类型中不存在的类型会发生错误

//type guard 类型守护

function GetLength2(input: number | string): number{
   if(typeof input === "string"){
       return input.length
   }else{
       return input.toString().length
   }
}

// 智能缩小范围 减少错误
