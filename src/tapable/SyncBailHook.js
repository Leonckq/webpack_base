// import { SyncBailHook } from 'tapable'
class SyncBailHook {
  constructor() {
    this.task = []
  }

  tap(name, task) {
    this.task.push(task)
  }

  call(...args) {
    let ret
    let index = 0
    do {
      ret = this.task[index++](...args)
    } while (ret === undefined && index < this.task.length)
  }
}

let hook = new SyncBailHook(['name'])
hook.tap('react', function(name) {
  console.log('react', name)
  return 'stop'
})

hook.tap('node', function(name) {
  console.log('node', name)
})
hook.call('ly')