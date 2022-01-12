
class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}


const a = new Node(1)
const b = new Node(2)
const c = new Node(3)
const d = new Node(4)
const e = new Node(5)
const f = new Node(6)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f


const treeSum = (root) => {
    var sum = 0
    if (root === null){
        return []
    }
    const myqueue = [root]

    while (myqueue.length > 0){
        const cur = myqueue.shift()
        sum = sum + cur.val

        if (cur.left) myqueue.push(cur.left)  
        if (cur.right) myqueue.push(cur.right)
        
        
    } 

    return sum
} 


console.log(treeSum(a))