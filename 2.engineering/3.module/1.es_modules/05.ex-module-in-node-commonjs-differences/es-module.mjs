// console.log(exports);
// console.log(__filename);
// console.log(__dirname);

// const __filename=import.meta
import {fileURLToPath} from 'url'
import {dirname} from 'path'
const __filename=fileURLToPath(import.meta.url)
const __dirname=dirname(__filename)
console.log(__filename);
console.log(__dirname);