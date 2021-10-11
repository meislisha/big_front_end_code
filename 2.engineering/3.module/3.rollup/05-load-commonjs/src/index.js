import { log } from './logger';
import message from './message';
// 全部导入
// import pkg from '../package.json';

// 局部导入
import { name, version } from '../package.json';

// 导入第三方模块
// import _ from 'lodash-es';

// 导入 commonjs 模块
import cjs from './cjs-module';

// require 方式引入，不会被打包
// const cjs2 = require('./cjs-module');

const msg = message.hi;
log(msg);

// log(pkg.name);
// log(pkg.version);
log(name);
log(version);

log(cjs);
// log(cjs2);
// log(_.camelCase(name))