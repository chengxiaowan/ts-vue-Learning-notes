//布尔
let isDone: boolean = false;

//数字
let age: number = 23;

//字符
let names: string = "drool";
//字符类型模板字符串也可以
let message: string = `my name is ${names}`

//undefined和null是所有类型的子类型 
//可以赋值给所有类型
let u: undefined = undefined;
let n: null = null;

let num: number = u;
let nums: number = n;
let str: string = n;
let strs: string = u;

//万金油any 允许赋值任意类型 也可以访问任何方法和属性，不限制
let unkonw: any = 4;
unkonw = "str"
unkonw = true 

unkonw.see

unkonw.like()