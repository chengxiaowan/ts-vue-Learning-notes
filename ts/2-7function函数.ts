//在js中是一等公民

//函数add限定了x y都是number 且限定return的类型也是number
function add(x: number,y: number,z?: number): number {
    if(z){
        return x + y + z
    }else{
        return x + y
    }
}

//调用后的赋值的bobo也是number
let result = add(1,2)

// add(1,2,3) 应有 2 个参数，但获得 3 个。 定义了几个就要传几个 也可使用？做可选

//可选参数后不可以再加确定参数

//直接声明一个函数类型

let add2 :(x: number,y: number,z?:number)=> number = add
//=>不是箭头函数 是TS中声明函数返回类型
//：后边都是在声明类型 与实迹代码逻辑无关

//使用interface声明一个函数类型

interface ISum {
    (x: number,y: number,z?: number): number
}
//interface里声明函数返回类型不使用=>，而是使用：+ 类型

let add3: ISum = add


// 提问
// 为什么add会自动获得一个函数类型？

//type script会在没有明确指定类型的时候推测一个类型
//