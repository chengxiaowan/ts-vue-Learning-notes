//枚举 enum
//常量：
// 再程序执行中不会被改变 js中一般用const声明

enum Direction {
    Up = 10,
    Down,
    Left,
    Right
}

console.log(Direction.Up)
console.log(Direction[0])

//赋值数字会自动递增
//赋值字符串后必须所有都赋值字符串

enum Direction2 {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = 'RIGHT'
}

const value = "UP"
if(value === Direction2.Up){
    console.log('go up!')
}

//常量枚举 可以节省性能

const enum Direction3 {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = 'RIGHT'
}

if (value === Direction3.Up) {
    console.log('go up!')
}


// 枚举有两种类型 一种计算值 一种常量值