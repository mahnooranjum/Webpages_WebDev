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


class Stack {
    constructor(){
        this.arr = []
    }

    push(value){
        this.arr.push(value)
        return this
    }

    peek(){
        return this.arr[this.arr.length-1]
    }

    pop(){
        this.arr.pop()
        return this
    }

    printer(){
        var stringer = ""
        
        this.arr.forEach(val => {
            stringer = stringer + val + " , " 
        });
        stringer = stringer + "END"
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