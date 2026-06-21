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
