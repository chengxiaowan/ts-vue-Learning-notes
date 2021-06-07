//约束泛型

//因为传入的类型不确定
//所以TS也不确定传入的参数上有没有length属性
function echoWithArr<T>(arg: T): T {
    // console.log(arg.length)
    return arg
}
//因为传入的类型不确定
//所以TS也不确定传入的参数上有没有length属性
//所以要对泛型进行约束

function echoWithArr2<T>(arg: T[]): T[] {
    console.log(arg.length)
    return arg
}
const val= echoWithArr2([1,2,3])
//虽然解决了报错
//但是length不是只有数组拥有
//所以需要对泛型进行约束 只能传入拥有该属性的泛型

interface IWithLength {
    length: number
}

function echoWithLength<T extends IWithLength>(arg: T): T {
    console.log(arg.length)
    return arg
}

const arr = echoWithLength([1, 2, 3])
const str = echoWithLength('str')
const obj = echoWithLength({length:10,width:20})

//只要你符合这个约束
//就可以使用任何类型
//在泛型中使用extends关键词约束泛型


