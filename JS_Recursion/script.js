

class Node{
    constructor(value){
        this.value= value;
        this.next = null;
    }
}

var head = new Node(10)
head.next = new Node(11)
head.next.next = new Node(12)
head.next.next.next = new Node(13)
head.next.next.next.next = new Node(14)
head.next.next.next.next.next = null

function reverse(node){
    if (node == null || node.next == null){
    return node
    }
    var p = reverse(node.next)
    node.next.next = node
    node.next = null
    return p

}

head = reverse(head)

function printer(head){
    while (head != null){
        console.log(head.value)
        head = head.next
    }


}

printer(head)