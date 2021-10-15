var arr = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [
        {
          val: 'd',
          children: []
        },
        {
          val: 'f',
          children: []
        }
      ]
    },
    {
      val: 'c',
      children: [
        {
          val: 'g',
          children: []
        },
        {
          val: 'h',
          children: []
        }
      ]
    }
  ]
}

// const dfs = (root) => {
//   console.log(root.val)
//   // root.children.forEach(child => {
//   //   dfs(child)
//   // });
//   root.children.forEach(dfs)
// }
// dfs(arr)

// const bfs = (root) => {
//   let q = [root]
//   while (q.length) {
//     var n = q.shift()
//     console.log(n.val)
//     n.children.forEach((child) => {
//       q.push(child)
//     })
//   }
// }
// bfs(arr)

const bt = {
  val: 1,
  left: {
      val: 2,
      left: {
          val: 4,
          left: null,
          right: null,
      },
      right: {
          val: 5,
          left: null,
          right: null,
      },
  },
  right: {
      val: 3,
      left: {
          val: 6,
          left: null,
          right: null,
      },
      right: {
          val: 7,
          left: null,
          right: null,
      },
  },
};

const preorder=(root)=>{
  if(!root) return
  console.log(root.val)
  preorder(root.left)
  preorder(root.right)
}
preorder(bt)
const inorder=(root)=>{
  if(!root) return
  inorder(root.left)
  console.log(root.val)
  inorder(root.right)
}
// inorder(bt)

const postorer=(root)=>{
  if(!root) return
  inorder(root.left)
  inorder(root.right)
  console.log(root.val)
}
// postorer(bt)