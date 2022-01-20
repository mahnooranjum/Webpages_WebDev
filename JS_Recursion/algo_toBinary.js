
num = 8

const toBinary = (num) => {
    str = ''
    if (num<2){
        return num    
    }

    return toBinary(Math.floor(num/2)) + String(num%2) 

} 


console.log(toBinary(num))