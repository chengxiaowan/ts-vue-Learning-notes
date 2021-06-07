//创建一个函数 直接返回传入的参数
//发现调用函数时返回值丧失了类型

function echo(value) {
    return value
}

const result = echo(123)


//限定参数值后不会丧失类型
//但是万一要传入其他类型的话 函数无法复用
function echo2(value: number) {
    return value
}

const results = echo(123)

//如何解决这个问题
//使用泛型Generics
//再函数名称后加<T>(T只是习惯性写法 可以写其他)
//使用泛型后可以完全不指定类型
//类型推断会帮助我们推断返回值的类型


function echo3<T>(value: T): T{
    return value
}

const result2 = echo3(123)
const result3 = echo3("str")
const result4 = echo3(true)

//也可以使用多个泛型

function swap<T,U>(tuple: [T,U]){
    return [tuple[1], tuple[0]]
}

const val = [0, 'str']


//泛型可以把他看做一个占位符
//或者一个变量
//在使用的时候可以吧定义好的参数的类型原封不动传入
//然后原封不动输出

// 总结：
// 泛型就像一个占位符，在使用的时候动态填入类型


