
function findRecurring(arr){
    let map = {}
    for (let i = 0; i < arr.length; i++){
        if (map[arr[i]] !== undefined){
            return arr[i]
        }else{
            map[arr[i]] = i
        }
    }
    return undefined
}


console.log(findRecurring([1,2,3,4,5,6]))