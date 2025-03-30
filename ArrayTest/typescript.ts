// 1.基础类型
import * as React from 'react'

const isDone: boolean = false;
const decimal: number = 6;
const color: string = "blue";
const list: number[] = [1, 2, 3];
const list2: Array<number> = [1, 2, 3]; // 泛型数组类型
const tuple: [string, number] = ["hello", 10]; // 元组
const anyType: any = 4; // any类型
const voidType: void = undefined; // void类型
// void指的是无返回值的函数
const nullType: null = null; // null
const undefinedType: undefined = undefined; // undefined

// 2.接口相关
// 比如定义，使用和实现
// 定义对象类型
interface Person {
    firstName: string;
    lastName: string;
    age?: number; // 可选属性
    readonly id: number; // 只读属性
}

// 使用接口
function greet(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
}

// 实现接口
class Employee implements Person {
    firstName: string;
    lastName: string;
    readonly id: number;

    constructor(firstName: string, lastName: string, id: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
    }
}

// 3.函数
// 主要是类型和各种参数
function buildName(firstName: string = "Smith", lastName?: string,...restItems: string[]): string {
    // :后面跟着typescript的类型，:前加?就代表这个参数可传可不传，=后面则是默认值,...参数名 代表着这个参数是一个包含着这里及之后位置的传入参数的数组
    return lastName ? `${firstName} ${lastName}` : firstName;
}

// 4.泛型
// 泛型函数
function identity<T>(arg: T): T {
    return arg;
}
let output = identity<string>("myString");
let output2 = identity("myString"); // 类型推断

// 泛型接口
interface GenericIdentityFn<T> {
    (arg: T): T;
}
let myIdentity: GenericIdentityFn<number> = identity;

// 泛型类
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

// 5.枚举
// 数字枚举
enum Direction {
    Up = 1,
    Down,   // 2
    Left,   // 3
    Right   // 4
}

// 字符串枚举
enum DirectionString {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

// 6.断言
// 用于声明变量是啥类型的
// "尖括号"语法
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// as 语法 (在JSX中必须使用这种)
let strLength2: number = (someValue as string).length;

// 7.高级类型
// 联合类型
// 就是指这个值可能是这两个类型其中之一
type StringOrNumber = string | number;
function padLeft(value: string, padding: StringOrNumber) {
    // ...
}

// 交叉类型
// 就是指这个对象同时符合这两个接口，有这两个接口的属性值
interface BusinessPartner {
    name: string;
    credit: number;
}
interface Identity {
    id: number;
    email: string;
}
type Employee = BusinessPartner & Identity;

// 类型别名
type Name = string;
// 意思就是在使用string的时候可以写Name代替
type NameResolver = () => string;
// 意思就是这个类型的函数无参数，并且返回值是支付串类型
type NameOrResolver = Name | NameResolver;
// 意思就是这个类型可能是前面两种类型其中一个

// 事件处理时的用法
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // <HTMLInputElement>指输入框元素
    console.log(event.target.value);
};

