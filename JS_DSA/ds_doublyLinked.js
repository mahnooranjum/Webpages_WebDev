class Node{
    constructor(value){
        this.value= value;
        this.next = null;
        this.prev = null
    }
}

class LinkedList{
    constructor(value){
        this.head = new Node(value)
        this.tail = this.head;
        this.length = 1
    }

    append(value){
        var node = new Node(value)
        node.prev = this.tail
        this.tail.next = node;
        this.tail =  node;
        this.length = this.length+1
    }

    prepend(value){
        var node = {
            value: value,
            next: this.head, 
            prev: null
        } 
        this.head = node
        this.length = this.length+1
    }

    printer(){
        let cur = this.head
        var stringer = ""
        while (cur !== null){
            stringer = stringer + cur.value + " <-> "
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

            let prv = this.head
            let cur = this.head
            while(cur != null){
                if (current == index){
                    node.prev = prv
                    prv.next = node
                    node.next = cur
                }
                prv = cur
                cur = cur.next
                current = current+1
            }
        }

    }

    remove(index){

         if(index === 0){
            this.head = this.head.next
            this.prv = null
        }else{
            let current = 0
            let prv = this.head
            let cur = this.head
            while(cur != null){
                if (current == index){
                    prv.next = cur.next
                    cur.next.prev = prv
                }
                prv = cur
                cur = cur.next
                current = current+1
            }
        }

    }

}

const mylist = new LinkedList(1)

// console.log(mylist.tail)
// mylist.append(20)
// console.log(mylist.tail)


mylist.printer()
mylist.prepend(40)
mylist.append(50)
mylist.printer()
mylist.insert(2,500)
mylist.printer()
mylist.remove(2)
mylist.printer()