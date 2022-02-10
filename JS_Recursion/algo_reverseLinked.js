class Node{
    constructor(value){
        this.value= value;
        this.next = null;
    }
}

class LinkedList{
    constructor(value){
        this.head = {
            value : value,
            next : null
        }

        this.tail = this.head;
        this.length = 1
    }

    append(value){
        var node = {
            value: value,
            next: null
        } 
        this.tail.next = node;
        this.tail =  node;
        this.length = this.length+1
    }

    prepend(value){
        var node = {
            value: value,
            next: this.head 
        } 
        this.head = node
        this.length = this.length+1
    }

    printer(){
        let cur = this.head
        var stringer = ""
        while (cur !== null){
            stringer = stringer + cur.value + " -> "
            cur = cur.next
        }
        stringer = stringer + " NULL"
        console.log(stringer)
    }

    insert(index, value){

        if (index >= this.length) {
            this.append(value)
        }else if(index === 0){
            this.prepend(value)
        }else{
            let current = 0
            let node = new Node(value)

            let prev = this.head
            let cur = this.head
            while(cur != null){
                if (current == index){
                    prev.next = node
                    node.next = cur
                }
                prev = cur
                cur = cur.next
                current = current+1
            }
        }

    }

    remove(index){

         if(index === 0){
            this.head = this.head.next
        }else{
            let current = 0
            let prev = this.head
            let cur = this.head
            while(cur != null){
                if (current == index){
                    prev.next = cur.next
                }
                prev = cur
                cur = cur.next
                current = current+1
            }
        }

    }

    reverse(){
        let first = this.head
        this.tail = this.head
        let second = first.next
        while (second !== null){
            const temp = second.next
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null
        this.head = first
    }

}

const mylist = new LinkedList(1)

// console.log(mylist.tail)
// mylist.append(20)
// console.log(mylist.tail)


mylist.printer()
mylist.prepend(40)
mylist.append(50)
mylist.prepend(10)
mylist.append(70)
mylist.prepend(30)
mylist.append(20)
mylist.printer()
mylist.reverse()
mylist.printer()