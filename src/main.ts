import { createApp } from 'vue'
import App from './App.vue'

// 批量引入 .ts 文件
require.context('../route/', true, /\.ts$/).keys().map(val => {
  import(`../route${val.split('.')?.[1]}`)
})

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
import VConsole from 'vconsole';
const vConsole = new VConsole({ theme: 'dark' });
createApp(App).mount('#app')
