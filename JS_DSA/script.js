

const arr = [2,5,99, 7,9,1,10,11,26,3,1]

function mergeSort(arr) {


    const length = arr.length;
    if(length === 1){
        return arr
    }

    const m = Math.floor(length/2);
    const l   = arr.slice(0, m)
    const r   = arr.slice(m)

    return merge(mergeSort(l), mergeSort(r))


}


function merge(l, r){
    const result = []
    let li = 0
    let ri = 0

    while (li < l.length && ri < r.length){
        if (l[li] < r[ri]){
            result.push(l[li])
            li++
        }else{
            result.push(r[ri])
            ri++
        }
    }

    return result.concat(l.slice(li)).concat(r.slice(ri))
}



console.log(mergeSort(arr))