
nums = [1,3,5,7,8,11,44,66,78,99]

const fib = (num, memo) => {
    if (memo[num]){
        return memo[num]
    }
    if (num == 0 || num == 1){
        return 1
    }
    memo[num] = fib(num-1, memo) + fib(num-2, memo)
    return memo[num]
    
} 

var memo = {}

console.log(fib(51, memo))
