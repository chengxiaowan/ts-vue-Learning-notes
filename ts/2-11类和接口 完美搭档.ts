// 类和接口  接口对类的抽象
//继承困境：
// 一个类只能继承另外一个类 有些操作子类继承父类很难完成
//这个时候就可以把特提取成接口 使用implements来实现接口

// class Car {
//     swtichRadio(trigger: Boolean){

//     }
// }

// class Cellphone {
//     switchRadio(trigger: boolean){

//     }
// }

//很难找合适的父类 但是有相同特性 可以把特性抽取成interface来实现

//： void  没有返回值
interface Radio {
    switchRadio(trigger: boolean): void
}

interface Battery {
    checkBatterystatus(): void
}

//接口继承
interface RadioWithBattery extends Radio {
    checkBatterystatus(): void
}

class Car implements Radio{
    switchRadio(trigger: Boolean){

    }
}

class Cellphone implements Radio, Battery{
    switchRadio(trigger: boolean){

    }
    checkBatterystatus(){

    }
}

class Cellphones2 implements RadioWithBattery {
    switchRadio(trigger: boolean) {

    }
    checkBatterystatus() {

    }
}