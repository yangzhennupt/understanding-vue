import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'
/**
 * Vue其实是一个构造函数,只能通过 new 关键字初始化，然后自执行./init.js里面的_init方法
 * （为什么不用class?因为后面的**Mixin都是把Vue当做参数传入的）
 */

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue) // 这个函数是把_init方法挂载到了vue的原型上了
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
