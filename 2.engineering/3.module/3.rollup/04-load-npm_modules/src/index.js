import { log } from './logger';
import message from './message';
// 全部导入
// import pkg from '../package.json';

// 局部导入
import { name, version } from '../package.json';

// 导入第三方模块
import _ from 'lodash-es';

const msg = message.hi;
log(msg);

// log(pkg.name);
// log(pkg.version);
log(name);
log(version);

log(_.camelCase(name))