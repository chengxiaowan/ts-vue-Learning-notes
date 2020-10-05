// JS中使用构造函数和原型链来实现继承
// ES6才出现了CLASS，虽然还是通过原型链，但是有了新的方法让我们从面向对象来审视这们语言

//面向对象
//JS没有强调类和原型对象
//类（class）：定义了一切事物的抽象特点
//对象（object）：类的实例，通过new生成
//面向对象（OOP）：封装，继承，多态。
//封装方法，只暴露接口  子类继承父类  继承产生类对同样的方法的不同相应

//TS中的类
//三种访问修饰符
//Public：修饰的属性或者方法时共有的 可以在任意地方被调用
//Private：修饰的属性或方法是私有的 不能再声明他的类外部调用
//Protected：修饰的属性或者方法是受保护的

class Animal {
    name: string;
    constructor (name) {
        this.name = name
    };
    run() {
        return `${this.name} is runing`
    }
}
