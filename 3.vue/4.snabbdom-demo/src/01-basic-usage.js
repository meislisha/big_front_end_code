import {init} from 'snabbdom/build/package/init'
import {h} from 'snabbdom/build/package/h'

const patch=init([])
let vnode=h('div#container.cls','hello world')

const app=document.querySelector('#app')
let oldVnode=patch(app,vnode)
vnode=h('div#container.xxx','hello snabbdom')
oldVnode=patch(oldVnode,vnode)