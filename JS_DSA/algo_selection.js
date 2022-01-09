

const arr = [2,5,99, 7,9,1,10,11,26,3,1]

function selectionSort(arr){
    const length = arr.length;
    for (let i = 0; i < length; i++){
        let min = i
        for (let j = i; j < length; j++){
            if (arr[j] < arr[min]){
                min = j
            }
        }
        let swap = arr[i];
        arr[i] = arr[min];
        arr[min] = swap;
    }
}

selectionSort(arr)
console.log(arr)