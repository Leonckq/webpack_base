// 虚拟DOM元素的类，构建实例对象，用来描述DOM
class Element {
  constructor(type, props, children) {
    this.type = type
    this.props = props
    this.children = children
  }
}


// 创建虚拟DOM，返回虚拟节点(object)
function createElement(...args) {
  return new Element(...args)
}

function render(domObj) {

  const el = document.createElement(domObj.type)
   
  for (let key in domObj.props) {
    // 设置属性的方法
    setAttr(el, key, domObj.props[key])
  }


  // 遍历子节点 
  // 如果是虚拟Dom， 就继续递归渲染
  // 不是代表为文本节点, 直接创建

  domObj.children.forEach(child => {
    child = child instanceof Element ? render(child) : document.createElement(child)
    // 添加到对应元素内
    el.appendChild(child)
  })

  return el
  
}


// 设置属性
function setAttr(node, key, value) {
  
  
}


export {
  Element,
  createElement
}