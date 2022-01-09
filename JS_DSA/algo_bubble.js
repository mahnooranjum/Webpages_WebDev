

const arr = [2,5,7,9,1,10,11,26,3,1]

function bubbleSort(arr){
    const length = arr.length;
    for (let i = 0; i < length; i++){
        for (let j = 0; j < length; j++){
            if (arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

bubbleSort(arr)
console.log(arr)