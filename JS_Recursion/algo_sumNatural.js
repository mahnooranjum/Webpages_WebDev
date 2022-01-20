
num = 10

const sumNatural = (num) => {
    if (num==1){
        return num    
    }

    return num + sumNatural(num-1)

} 


console.log(sumNatural(num))