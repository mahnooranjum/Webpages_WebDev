
nums = [1,3,5,7,8,11,44,66,78,99]

const binarySearch = (nums, num) => {



    midx = Math.floor(nums.length / 2 ) 

    if (nums[midx] === num){
        return true 
    }

    if (nums.length === 1 ){
        return false
    }

    if (num< nums[midx] ){
        return binarySearch(nums.slice(0, midx), num)
    }

    return binarySearch(nums.slice(midx), num)
    
} 


console.log(binarySearch(nums, 99))
