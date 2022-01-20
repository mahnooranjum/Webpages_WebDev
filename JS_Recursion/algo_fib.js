
nums = [1,3,5,7,8,11,44,66,78,99]

const fib = (num) => {

    if (num == 0 || num == 1){
        return 1
    }

    return fib(num-1) + fib(num-2)
    
} 

console.log(fib(8))
