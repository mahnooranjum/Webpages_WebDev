var arr1 = [1,3,5,7,9]
var arr2 = [4,8,10,11]
var sorted = []
var idx = 0
var l = 0
var r = 0
while (true ){
    if (arr1[l] >= arr2[r]) {
        sorted.push(arr2[r]) 
        r++
        if (r==arr2.length){
            sorted = sorted.concat(arr1.slice(l))
            break
        }
    }else if (arr1[l] < arr2[r]){
        sorted.push(arr1[l]) 
        l++
        if (l==arr1.length){
            sorted = sorted.concat(arr2.slice(r))
            break
        }
    }
}


console.log(sorted)
