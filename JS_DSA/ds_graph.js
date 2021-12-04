// Graphs 
// directed / undirected 
// cyclic / acyclic 
// weighted / unweighted 


// Edge list 
// lists all connections b/w nodes of graphs 

// Adjacent list 
// Index is the node
// Value is the node neighbors 

// Adjacent matrix 
// indicate if x has connection to y 

class Graph{ 
    constructor(){
        this.numberOfNodes = 0;
        this.adjList = {};
    }
    addVertex(node){
        this.adjList[node] = []
        this.numberOfNodes++
        return this
    }

    addEdge(node1, node2){
        this.adjList[node1].push(node2)
        this.adjList[node2].push(node1)
        return this
    }

    printer(){
        console.log(this.adjList)
    }
}

var myGraph = new Graph()
myGraph.addVertex('1')
myGraph.addVertex('2')
myGraph.addVertex('3')
myGraph.addVertex('4')
myGraph.addEdge('1', '2')
myGraph.addEdge('3', '2')
myGraph.addEdge('4', '2')

myGraph.printer()