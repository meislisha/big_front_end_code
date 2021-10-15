import {init} from 'snabbdom/build/package/init'
import {h} from 'snabbdom/build/package/h'

import { styleModule } from 'snabbdom/build/package/modules/style'
import { eventListenersModule } from 'snabbdom/build/package/modules/eventlisteners'
const patch=init([
  // styleModule,
  // eventListenersModule
])
let vnode=h('div#container',[
  h('h1',{style:{backgroundColor:'red'},},'test h1'),
  h('p',{on:{click:clickHandler}},'ppppp'),
])
const app=document.querySelector('#app')
let oldVnode=patch(app,vnode)

function clickHandler(){
  console.log('click');
}