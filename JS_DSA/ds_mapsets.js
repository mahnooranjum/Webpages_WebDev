// Maps and Sets 
// the keys and values can be any type
// of data structure 

// sometimes keys are functions too 
// ES6 allows this using maps and sets 
// Javascript objects dont allow this
let myhash = {
    name: 'Mahnoor',
    age: 24,
    degree: 'engineering', 
    current: 'algorithms engineer',
    printer: function(){
        console.log(this.name + ' is an '+ this.current)
    }
}

myhash.name
myhash.printer()

// maps have insertion orders
const mymap = new Map()
// sets only have keys no values 
const myset = new Set()


