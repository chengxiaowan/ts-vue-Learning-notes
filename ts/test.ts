const hello = (name: string) => {
    return `hello${name}`
}

// hello(123)
hello("drool")

//类型声明
//报错
/*
    test.ts:5:7 - error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.

5 hello(123)
        ~~~


Found 1 error.*/