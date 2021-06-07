//方便定义类型
//对对象形状（shape）进行描述
//Duck Typing （鸭子类型）
//interface不会被转换，只能做静态类型检查

interface Person {
    name: string,
    age: number
}

//赋值时，变量形状要和接口形状一致

let info: Person = {
    name:"drool",
    age:18
}


// 类型 "{ name: string; }" 中缺少属性 "age"，但类型 "Person" 中需要该属性。
// let infos: Person = {
//     name:"drool",
// }


//不能将类型“{ name: string; age: number; id: number; }”分配给类型“Person”。
// 对象文字可以只指定已知属性，并且“id”不在类型“Person”中。
// let infos: Person = {
//     name:"drool",
//     age:18,
//     id:20
// }

interface Persons {
    readonly id?: number,
    name: string,
    age?: number
}

//?为可选属性

let data: Persons = {
    id:10,
    name:"123"
}

let datas: Persons = {
    name:"123",
    age:12
}

//readonly 只读属性

// data.id = 20  无法分配到 "id" ，因为它是只读属性。
// 类似const const作用于变量 readonly作用于属性
