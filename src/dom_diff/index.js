import { createElement } from './element'

const virtualDom = createElement('ul', { class: 'list' }, [
  createElement('li', { class: 'item' }, ['小卡']),
  createElement('li', { class: 'item' }, ['库里']),
  createElement('li', { class: 'item' }, ['利拉德'])
])

console.log(virtualDom)