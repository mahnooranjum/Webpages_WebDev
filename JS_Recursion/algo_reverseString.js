
string = 'hello world'
// depth first 

const reverseString = (str) => {
    if (str.length == 1){
        return str
    }
    return reverseString(str.slice(1)) + str.charAt(0)
} 


console.log(reverseString(string))