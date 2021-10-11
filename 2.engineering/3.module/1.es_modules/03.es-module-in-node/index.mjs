import { name,age } from './module.mjs'
console.log(name,age);
import fs from 'fs'
fs.writeFileSync('./foo.txt','es module working')