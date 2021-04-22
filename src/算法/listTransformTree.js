function fnListTransformTree(list, parentId = '') {
  const res = []
  list = [...list]
  for (let i = 0; i < list.length; i++) {
    if (list[i].parentId === parentId) {
      list[i].children = fnListTransformTree(list, list[i].id)
      res.push(list[i])
    }
  }
  return res
}

var list=[
  {id: 1, name: 'child1', parentId: 0},
  {id: 2, name: 'child2', parentId: 0},
  {id: 6, name: 'child2_1', parentId: 2},
  {id: 0, name: 'root', parentId: ''},
  {id: 5, name: 'child1_2', parentId: 1},
  {id: 4, name: 'child1_1', parentId: 1},
  {id: 3, name: 'child3', parentId: 0},
  {id: 7, name: 'child3_1', parentId: 3}
]
// console.log(list)

// console.log(fnListTransformTree(list))

// console.log(list)