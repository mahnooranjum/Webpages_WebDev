
nums = [1,8,3,6,78,2,4,6]

function merge(left, right) {
    let arr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    return [ ...arr, ...left, ...right ]
}

const mergeSort = (nums) => {

    if (nums.length <= 1){
        return nums
    }

    var midx = Math.floor(nums.length/2)
    var left = nums.slice(0, midx)
    var right= nums.slice(midx, nums.length)

    return merge(mergeSort(left), mergeSort(right))

} 


console.log(mergeSort(nums))
