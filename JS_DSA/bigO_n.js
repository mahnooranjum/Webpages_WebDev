
// const items = ['id1'];
// const items = new Array(1000).fill('id1')
const items = new Array(100000).fill('id1')

function findItem(array, toFind) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++){
    if(array[i] === toFind) {
      console.log("found " + toFind);
    }
   }

  let t1 = performance.now();
  console.log("[INFO]: executed in "+ (t1 - t0) + " seconds")
}

findItem(items, 'id1')