// Python has dictionaries 
// Javascript has objects 
// Java has maps 

// key value pairs
// instead of the indices of arrays

// key is the index 
// key is hashed to get the index 

// A hash function generates a fixed length 
// output for each input 

// idempotent 
// key ==> gibberish ==> index for address 
// isn't hashing slow? well designed won't be 
// optimum hashing function used for speed 
// crypto hashes are slower and they take longer 
// we usually assume a bigO of 1 for insert 

// Insert, Lookup, Delete and Search are all O(1)

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


// cons? 
// computer has limited space 
// Open hashing : might have collisions 
// might make a linked list there 
// this will worsen complexity O(n/k) when k 
// is the size of our hash table 
// Solve by linked list seperate chaining 
// and other methods 