
class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}


const a = new Node(5)
const b = new Node(11)
const c = new Node(3)
const d = new Node(4)
const e = new Node(2)
const f = new Node(1)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f


const treeSumMax = (root) => {
    if (root === null){
        return -1*Infinity
    }
    if (root.left === null && root.right === null){
        
        return root.val
    } else if(root.left === null) {
        return root.val + treeSumMax(root.left)
    } else if(root.right === null){
        return root.val + treeSumMax(root.right)
    } else {
        return Math.max(root.val + treeSumMax(root.left), root.val + treeSumMax(root.right) ) 
    }


} 


console.log(treeSumMax(a))