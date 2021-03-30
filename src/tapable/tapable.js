// import { SyncHook } from 'tapable'

// class Lesson {
//   constructor() {
//     this.hooks = {
//       arch: new SyncHook(['name'])
//     }
//   }
//   tap() { // 监听函数
//     this.hooks.arch.tap('node', function(name) {
//       console.log('node', name)
//     })

//     this.hooks.arch.tap('react', function(name) {
//       console.log('react', name)
//     })
//   }
//   // 启动钩子
//   start() {
//     this.hooks.arch.call('ly')
//   }
// }

// let l = new Lesson()
// l.tap() // 注册
// l.start()

class SyncHook {
  constructor(args) {
    this.tasks = []
  }
  tap(name, task) {
    this.tasks.push(task)
  }

  call (...args) {
    this.tasks.forEach((task) => task(...args))
  }
}