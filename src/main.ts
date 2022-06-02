import { createApp } from 'vue'
import App from './App.vue'
import "../show/index";

// 对象
const obj: { x: number, y: number } = { x: 1, y: 2 }
obj.y = 100
console.log(obj);

// 联合类型，字符串
let str: string | null | undefined = '爱我中华'
str = '典籍里的中国'
console.log(str);

// void 操作符
const func = () => { }

// any
let x
x = []
x = 1
createApp(App).mount('#app')
