
class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}


const a = new Node(9)
const b = new Node(4)
const c = new Node(20)
const d = new Node(1)
const e = new Node(6)
const f = new Node(15)
const g = new Node(170)

a.left = b
a.right = c
b.left = d
b.right = e
c.left = f
c.right = g

// depth first 

const dfsPreOrder = (root) => {
    if (root === null) return []

    const leftvals = dfsPreOrder(root.left)
    const rightvals = dfsPreOrder(root.right)

    return [root.val, ... leftvals,  ...rightvals]
} 


console.log(dfsPreOrder(a))