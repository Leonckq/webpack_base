class SyncWaterfallHook {
  constructor() {
    this.tasks = []
  }
  tap(name, task) {
    this.tasks.push(task)
  }

  call(...args) {
    let [first, ...others] = this.tasks
    let ret = first(...args)
    others.reduce((a, b) => {
      return b(a)
    }, ret)
  }
}


let hook = new SyncWaterfallHook(['name'])
hook.tap('react', (data) => {
  console.log('react', data)
  return 'react OK'
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