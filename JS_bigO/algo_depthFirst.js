
class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}


const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f


// depth first 

const depthFirst = (root) => {
    if (root === null){
        return []
    }
    const mystack = [root]

    while (mystack.length > 0){
        const cur = mystack.pop()
        console.log(cur.val)
        
        if (cur.right) mystack.push(cur.right)
        
        if (cur.left) mystack.push(cur.left)
        
    } 
}


depthFirst(a)