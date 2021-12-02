// Stacks
// A high level abstraction of 
// low level data structures 

// LIFO 
// last in first out 
// Lookup O(n)
// Pop    O(1)
// Push   O(1)
// Peek   O(1)

// arrays and linked lists both are okay
// just decide if your data has an upper cap or not 

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(){
        this.top = null
        // this.bottom = null
        this.length = 0
    }

    push(value){
        var node = new Node(value)
        node.next = this.top 
        this.top = node 
        this.length = this.length + 1
        return this
    }

    peek(){

        return this.top.value
    }

    pop(){
        this.length = this.length - 1
        this.top = this.top.next
        return this
    }

    printer(){
        let cur = this.top
        var stringer = ""
        while (cur !== null){
            stringer = stringer + cur.value + " -> "
            cur = cur.next
        }
        stringer = stringer + " NULL"
        console.log(stringer)
    }
}


var stack = new Stack()
stack.printer()
stack.push(1)
stack.printer()
stack.push(2)
stack.printer()
stack.push(3)
stack.printer()
stack.pop()
stack.printer()
console.log(stack.peek())