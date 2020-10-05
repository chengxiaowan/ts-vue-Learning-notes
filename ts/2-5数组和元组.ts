//声明一个数字数组
let arrOfnumber: number[] = [1,2,3]
//调用数组方法时，参数的类型会被限制
arrOfnumber.push(3)
// arrOfnumber.push("123")      //'123'不是number类型

//类数组 比如arguments
//arguments 拥有一些数组的属性和方法，但是有些没有 也不能把一个数组赋值给他
function test(){
    console.log(arguments)
    arguments.length
    arguments[0]
    // arguments.forEach(element => {
        
    // });
}


//元组  一定程度上
//合并了不同类型的对象 起源于函数式编程

//元组类对应位置数据的类型和定义的不符会报错，且多了也会报错
//称之为联合类型
let info: [string,number] = ["drool",100]
//使用数组的方法可以突破类型限定，多添加元素，但是元素要在声明类型之内
info.push("drool")
info.push(200)
// info.push(true)    "message": "类型“boolean”的参数不能赋给类型“string | number”的参数。"
