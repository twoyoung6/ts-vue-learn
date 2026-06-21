
// 接口
interface Person {
  firstName: string;
  lastName: string;
}
function visit(person: Person) {
  return `Hello，${person.firstName} ${person.lastName}`
}
let str: string = visit({ firstName: "zhanyang", lastName: "twoyoung" })
console.log('接口---', str);

// 类（有构造函数和公共字段）
class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = `${firstName}·${middleInitial}·${lastName}`
  }
}
// 类和接口公用
interface People {
  firstName: string;
  lastName: string;
}
function greeter(peo: People) {
  return `Hay，${peo.firstName} ${peo.lastName}`
}

let user = new Student('zhanyang', 'to', 'twoyoung')
let strs: string = greeter({ firstName: "zhanyang", lastName: "twoyoung" })

console.log('class 类---', user);
console.log('接口---', strs);

// 对象类型接口
interface List {
  readonly id: number; // 只读
  name: string;
  has: boolean;
}
interface Result {
  data: List[]
}

function render(result: Result) {
  console.log(`🍉 ~ render ~ result`, result.data)
}

let result = {
  data: [
    { id: 0, name: '中华', has: true },
    { id: 2, name: '民族', has: false }
  ]
}

render(result)

interface StringArray {
  [index: number]: string
}

let chars: StringArray = ["A", "B"]
console.log(`🍉 ~ chars`, chars)
