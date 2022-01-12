
class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}


const a = new Node(-1)
const b = new Node(2)
const c = new Node(3)
const d = new Node(4)
const e = new Node(5000)
const f = new Node(-60)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f


const treeMax = (root) => {
    if (root === null){
        
        return -1*Infinity
    }

    return Math.max(root.val, treeMax(root.left),treeMax(root.right) ) 
} 


console.log(treeMax(a))