// Trees 

// heirarchical structure 
// not just linear 
// root node and child nodes 
// leaf nodes at the very end 
// sub trees 
// DOM is a tree 
// Abstract syntax tree:
// how usually programs are being run 

// same principle as linked list 

// Binary tree
// Each node can have 0 1 or 2 children 
// Each child can have one parent only

// full binary tree has either
// 0 or 2 children 

// perfect binary tree has no child missing 
// # of nodes double as we move down 
// 2 4 8 16
// 4 = (2 + 1) + 1
// half of the data is at the bottom 

// Lookup O(log N)
// Insert O(log N)
// Delete O(log N)

// Level i has 2^i nodes 
// Level 0: 2^0 = 1

// # if nodes = 2^h - 1 
// 3 levels = 8 - 1 = 7 nodes

// log10 nodes = height or steps 
// So number of steps is going to be O (log N)

// binary search tree 
// great for comparisons 
// preserves relationships 
// rules 
// - all child nodes to the right of the root 
//   node must greater than the current node 
// - all to the left must be smaller 
// lookup by making decisions 

// unbalanced search trees where searches 
// become O(n)

class Node{
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BST{
    constructor(){
        this.root = null
    }

    insert(value){
        var node = new Node(value)
        if (this.root === null){
            this.root = node 
        }else{
            let cur = this.root 
            while(true){
                if (value < cur.value){
                    // left 
                    if (!cur.left){
                        cur.left = node
                        return this
                    }
                    cur = cur.left 
                    }else{
                    // right 
                    if (!cur.right){
                        cur.right = node
                        return this
                    }
                    cur = cur.right                     
                    }
                }
            }
        }


        lookup(val){
            if (!this.root){
                return false
            }
            let cur = this.root;
            while(cur){
                if(val < cur.value){
                    cur = cur.left
                }else if(val > cur.value){
                    cur = cur.right
                }else if(cur.value === val){
                    return cur
                }
            }
            return false 
        }


        remove(val){

        }
}

var tree = new BST()

tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
console.log(tree.lookup(170))

console.log(JSON.stringify(printer(tree.root)))

function printer(node){
    const tree = {value: node.value}
    tree.left = node.left === null ? null : this.printer(node.left)
    tree.right = node.right === null ? null : this.printer(node.right)
    return tree
}