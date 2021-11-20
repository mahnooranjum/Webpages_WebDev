array1 = ['a', 'b', 'c', 'd']
array2 = ['e', 'f', 'z']

// // O(n * m)
// function getIntersection(arr1, arr2){
//     for (let i = 0; i < arr1.length; i++){
//         for (let j = 0; j < arr2.length; j++){
//             if (arr1[i] == arr2[j]){
//                 return true
//             }
//         }
//     }
//     return false
// }


// O(n + m)
function getIntersection(arr1, arr2){
    let map = {}
    for (let i = 0; i < arr1.length; i++){
        if (!map[arr1[i]]){
            map[arr1[i]] = true
        }
    }
    
    for (let j = 0; j < arr2.length; j++){
        if (map[arr2[j]]){
            return true
        }
    }
    return false
}

console.log(getIntersection(array1, array2))