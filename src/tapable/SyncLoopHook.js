class SyncLoopHook {
  constructor() {
    this.tasks = []
  }
  tap(name, task) {
    this.tasks.push(task)
  }

  call(...args) {
    this.tasks.forEach(task => {
      let ret
      do {
        ret = task(...args)
      } while (ret !== undefined)
    })
  }
}


let hook = new SyncWaterfallHook(['name'])
let total = 0
hook.tap('react', (data) => {
  console.log('react', data)
  return ++total === 3 ? undefined : '继续学'
})

hook.tap('node', data => {
  console.log('node', data)
  return 'node OK'
})

hook.tap('webpack', data => {
  console.log('webpack', data)
  return 'webpack'
})

hook.call('ly')