import {init} from 'snabbdom/build/package/init'
import {h} from 'snabbdom/build/package/h'

const patch=init([])
let vnode=h('u1',[
  h('li',{key:"a"},'首页'),
  h('li',{key:"b"},'视频'),
  h('li',{key:"c"},'微博'),
])

const app=document.querySelector('#app')
let oldVnode=patch(app,vnode)
vnode=h('u1',[
  h('li',{key:"a"},'首页'),
  h('li',{key:"c"},'微博'),
  h('li',{key:"b"},'视频')
])
oldVnode=patch(oldVnode,vnode)