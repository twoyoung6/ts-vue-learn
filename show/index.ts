// 数字枚举
enum Role {
  Reporter = 0,
  Reader,
  Manager,
  Cleaner,
  Investor
}
console.log(`🍉 ~ 数字枚举`, Role)

enum Message {
  fail = "失败",
  success = "成功",
  loading = '办理中'
}
console.log('字符串枚举---', Message);

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
