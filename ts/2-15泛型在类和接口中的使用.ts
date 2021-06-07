//之前学习了泛型在函数中
//函数的参数和返回值


//泛型在类当中应用

class Queue{
    private data = [];
    push(item){
        return this.data.push(item)
    }
    pop(){
        return this.data.shift()
    }
}

const queue = new Queue()
queue.push(1)
queue.push("str")
console.log(queue.pop().toFixed())
console.log(queue.pop().toFixed())

//因为只有number类型才有toFixde这个方法
//所以在push的时候需要约束

class Queues {
    private data = [];
    push(item: number) {
        return this.data.push(item)
    }
    pop() {
        return this.data.shift()
    }
}

//在限定item的类型后可以快速解决问题
//但是如果你要创建一个字符串队列的话，又要去修改类型
//需要一种方法一劳永逸
//这个时候需要创造一个泛型类

class Queue2<T> {
    private data = [];
    push(item: T) {
        return this.data.push(item)
    }
    pop(): T {
        return this.data.shift()
    }
}
//经过以上修改后 需要在New的时候传入你希望的类的类型
const queue2 = new Queue2<number>()
queue2.push(1)
// queue2.push("str")  不允许推入str类型
console.log(queue2.pop().toFixed())
console.log(queue2.pop().toFixed())

//接口中使用
interface KeyPair<T,U> {
    key :T
    value :U
}

//在使用接口时传入类型
let kp1 :KeyPair<number,string> = {key:1,value:"str"} 
let kp2 :KeyPair<string,boolean> = {key:"str",value:true}

let arr: number[] = [1,2,3]
let arrs: Array<number>=[1,2,3]

//总结
//创建一个特定类型的容器 相当于给容器贴标签 在用的时候传入类型的容器
//灵活的约束传入参数的类型
//使用表达式无法明确类型绑定