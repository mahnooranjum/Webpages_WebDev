
// Exponential time 
// O(2^n)
function fibonacci(n){
    if (n < 2){
        return n
    }else{
        return fibonacci(n-1) + fibonacci(n-2)
    }
}


console.log(fibonacci(8))