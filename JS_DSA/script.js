// Queue 

// FIFO 
// first in first out 

// Lookup   O(1)
// Enqueue  O(1)
// Dequeue  O(1)
// Peek     O(1)

// If we use arrays we will have to unshift O(n) in dequeue 

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(){
        this.first = null
        this.last = null
        this.length = 0
    }

    enqueue(value){
        var node = new Node(value)
        if (this.length === 0){
            this.first = node
            this.last = node 
        }else {
            this.last.next = node
            this.last = node
        }

        this.length++
        return this
    }

    peek(){
        return this.first.value
    }

    dequeue(){
        this.length = this.length - 1
        this.first = this.first.next
        return this
    }

    printer(){
        let cur = this.first
        var stringer = ""
        while (cur !== null){
            stringer = stringer + cur.value + " -> "
            cur = cur.next
        }
        stringer = stringer + " NULL"
        console.log(stringer)
    }
}


var q = new Queue()
q.printer()
q.enqueue(1)
q.printer()
q.enqueue(2)
q.printer()
q.enqueue(3)
q.printer()
q.dequeue()
q.printer()
console.log(q.peek())
