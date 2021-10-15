import {init} from 'snabbdom/build/package/init'
import {h} from 'snabbdom/build/package/h'

const patch=init([])
let vnode=h('div#container.cls',[
  h('h1','这是一个h1'),
  h('p','这是一个p'),
])
const app=document.querySelector('#app')
let oldVnode=patch(app,vnode)

setTimeout(() => {
  // vnode=h('div#container.cls',[
  //   h('h1','h1'),
  //   h('p','p'),
  // ])
  vnode=h('!')//代表清空
  patch(oldVnode,vnode)
}, 2000);