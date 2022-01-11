
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


const breadthFirst = (root) => {
    if (root === null){
        return []
    }
    const myqueue = [root]

    while (myqueue.length > 0){
        const cur = myqueue.shift()
        console.log(cur.val)

        if (cur.left) myqueue.push(cur.left)  
        if (cur.right) myqueue.push(cur.right)
        
        
    } 
} 


console.log(breadthFirst(a))