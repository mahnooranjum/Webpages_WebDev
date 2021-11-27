
// Linked lists
// Hash table collisions are sometimes resolved using these 

// We have nodes pointing to other nodes 
// Head --> Node --> Node --> Tail --> Null
// JS doesn't have a pre-built linked list so we 
// need to code from scratch 

// Linked list iteration slower than arrays
// Hash table is also scattered in memory 
// Hash table or linked lists do not shift and unshift; that's good
// Linked lists have order 

// prepend O(1)
// append O(1)
// lookup O(n)
// insert O(n)
// delete O(n)

let basicList = {
    head: {
        value : 4,
        next  : {
            value: 5,
            next: {
                value: 6,
                next: null
            }
        }
    }
}

console.log(basicList)
console.log(basicList.head.value)
console.log(basicList.head.next.value)
console.log(basicList.head.next.next.value)
console.log(basicList.head.next.next.next)