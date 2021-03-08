/* 
  全局事件总线 & 自定义时间的原理 
  $on(eventName,callback) 绑定持久事件
  $once(eventName,callback) 绑定一次性事件
  $off(eventName,callback) 解绑事件的某个回调
   $off(eventName,) 解绑事件的所有回调
   $off()         解绑所有事件和所有回调
  $emit(eventName,[...args]  触发事件
*/
class EventBus {
  constructor() {
    this._events = {}
  }
  //绑定事件
  on(eventName, callback) {
    if (this._events[eventName]) {
      this._events[eventName].push(callback)
      return
    }
    this._events[eventName] = [callback]
  }

  //绑定一次性事件
  once(eventName,callback){
    const cb =(...args)=>{
      callback(...args)
      this.off(eventName,cb)
    }
    this.on(eventName,cb)
  }
  //解绑事件的某个回调
/*   off(eventName, callback) {
    if (!this._events[eventName]) return;
    this._events[eventName] = this._events[eventName].filter(cb => cb !== callback)
  } */
  //解绑事件的所有回调
/*   off(eventName){
    if (!this._events[eventName]) return;
    this._events[eventName] = []

  } */
  //解绑所有事件
  off(){
    if (!this._events) return;
    this._events = {}

  }
  //触发事件
  emit(eventName, ...args) {
    if (!this._events[eventName]) return
    this._events[eventName].forEach((cb) => cb(...args))
  }

}



const bus = new EventBus()

bus.on('aaa', function (x) {
  console.log(111, x)
})
bus.on('bbb', function (x) {
  console.log(111, x)
})
const cb = function (x) {
  console.log(222, x)
}
bus.on('aaa', cb)
bus.once('aaa', function (x) {
  console.log(333, x)
})

bus.emit('aaa', 666)
bus.emit('bbb', 777)
bus.off()
bus.emit('aaa', 666)