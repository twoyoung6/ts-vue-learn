// 数组
const sz:(number|string)[] = ['s',2,3,4,'2']

// 泛型
const list:Array<number|string> = ['s',2,3,4,'2']

// 元组
// ?表示可选
const yz:[string, number, object?] = ['sin', 1] // object 属性可选
type tuple = [
  string,
  ...number[]
];
// 元组成员取名字及定义类型，无实际意义
type Color = [
  red: number,
  green: number,
  blue: number
];
const c:Color = [255, 255, 255];

// 类型别名 type、只读元组断言 as
type You = [number, number]
function distanceFromOrigin([x, y]:You) {
  return Math.sqrt(x**2 + y**2);
}
let point = [3, 4] as const;
distanceFromOrigin(point as You); // 报错

// Symbol 类型
const x = Symbol();

// 函数类型
function hello(txt:string):void {
    // txt:string 标识入参 txt 是字符串
    // void 标识没有返回值，默认可以不写
  console.log('hello ' + txt);
}
// 函数类型的对象写法
 let add:{
  (x:number, y:number):number
};
add = function (x, y) {
  return x + y;
};
function doSomething(f:Function) {
  return f(1, 2, 3);
}
// 箭头函数写法
const repeat = (str:string, times:number):string => str.repeat(times);
// ? 表示参数是可选非必传
let myFunc:(a:number, b?:number) => number; 

type n = [number, number]
function f([x, y]: n) {
  // ...
}
// 参数联合类型
function len(x:any[]|string):number {
  return x.length;
}

// 对象类型
type MyObj = {
  x:number,
  y?:number
};
const o1:MyObj = { x: 1 };  
const o2:MyObj = { x: 1, y: 1 };  
// 对象类型的接口写法
interface MiObj {
  x: number,
  y?: number
}
const o3:MiObj = { x: 1 }
// null 判断运算符 ??
let yValue = o3.y ?? '--'
console.log(yValue)
// 对象解构赋值
let { x: foo, y: bar } = { x: 2, y: 3}
// 等同于以下赋值，foo/bar分别是x/y的新的变量名，并不是x/y的类型
// let foo = obj.x;
// let bar = obj.y;
// 函数对象入参
function draw({
  shape: xShape,
  xPos: yPos
}) {
  const myShape = xShape
  const yValue = yPos; // 报错取不到 yPos
}
// 空对象可以用扩展运算符...扩展，分步申明，
const pt0 = {};
const pt1 = { x: 3 };
const pt2 = { y: 'err' };

const pt = {
  ...pt0, ...pt1, ...pt2
};
console.log(pt)


// 接口 interface
interface Myface {
  [prop: string]: number;
}
interface Myface2 {
  [prop: number]: number;
}
const obj:Myface2 = [1, 2, 3];
// 接口继承
interface Shape {
  name: string;
}
// Circle继承了Shape，所以Circle其实有两个属性 name 和 redis
// Circle 子接口 Shape 父接口，子接口会覆盖父接口同名属性
interface Circle extends Shape {
  redis: number;
}
const ff:Circle = {name: 'job', redis: 90}
console.log(ff)
// 接口继承 type 对象类型、class
type Country = {
  name: string;
  capital: string;
}
interface CountryWithPop extends Country {
  population: number;
}

// class 类
class Point {
  x: number = 0;
  y!: number;
}
// class 类的存取器
class C {
  _name = '';
  // 取
  get name() {
    return this._name;
  }
  // 存
  set name(value) {
    this._name = value;
  }
}
// 实现 implements
interface A {
  x: number;
  y?: number;
}
// class 类 B 实现 接口 A
class B implements A {
  x = 0;
  y?: number
}
const b = new B();
// 修饰符 private
class A {
  private x:number = 0;
}
const a = new A();
a.x // 报错

class blue extends A {
  showX() {
    console.log(this.x); // 报错
  }
}

// 泛型（在该函数调用时再指定具体类型）
// 函数的泛型写法
// 写法一
let myF:<T>(arg:T) => T = id;
// 写法二
let myId:{ <T>(arg:T): T } = id;
// 接口的泛型写法
interface Box<Type> {
  contents: Type;
}
let box:Box<string>;
// class 类的泛型写法
class Pair<K, V> {
  key: K;
  value: V;
}
// type 类名别名的泛型写法
type Nullable<T> = T | undefined | null;
type Container<T> = { value: T };
const a: Container<number> = { value: 0 };
const b: Container<string> = { value: 'b' };
// 数组的泛型表示
let arr:Array<number> = [1, 2, 3];
类型参数的泛型约束条件，必须有 length: number 
function comp<T extends { length: number }>(
  a: T,
  b: T
) {
  if (a.length >= b.length) {
    return a;
  }
  return b;
}
// 泛型本质上是一个类型函数，通过输入参数，获得结果，两者是一一对应关系。
// 注意事项：尽量少用泛型，虽然灵活但是会加大复杂性；类型参数越少越好；当类型参数用到两次或两次以上，才是泛型的适用场合


// Enum 枚举类型 一组常量定义，值都是只读的不可修改
enum Foo {
  A,
  B,
  C,
}
const Bar = {
  A: 0,
  B: 1,
  C: 2,
} as const;
// 上面两种表示等同
// Enum 成员只允许字符串、数值


// 类型断言
// TypeScript 一旦发现存在类型断言，就不再对该值进行类型推断，而是直接采用断言给出的类型。
const username = document.getElementById('username');
if (username) {
  (username as HTMLInputElement).value; // 正确
}
// 类型断言不应滥用，因为它改变了 TypeScript 的类型检查，很可能埋下错误的隐患
// 非空断言 !.
x!.toFixed()


// namespace 命名空间
namespace Utils {
  // export 导出，空间外部才可以使用
  export function isString(value:any) {
    return typeof value === 'string';
  }

  // 正确
  isString('yes');
}

Utils.isString('no'); // 报错


// declare 关键字只用来给出类型描述，告诉编译器外部函数的类型
// 类型申明文件，只包含类型声明
// [模块名].d.ts的形式


// 运算符
// keyof 用于精确表达对象的属性类型
// [Prop in keyof Obj]表示取出对象Obj的每一个键名
const obj = { a: 123 };
if ('a' in obj)
  console.log('found a');
// 上面示例中，in运算符用来判断对象obj是否包含属性a

// infer关键字用来定义泛型里面推断出来的类型参数，而不是外部传入的类型参数
// is运算符用来描述返回值属于true还是false

// 类型映射
// 类型工具
type T = Record<'a', number>;
