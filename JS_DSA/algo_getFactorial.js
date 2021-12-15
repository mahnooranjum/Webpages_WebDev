

function get_factorial(number){
    if (number === 0){
        return 1
    }else{
        return number * get_factorial(number-1)
    }
}


console.log(get_factorial(5))