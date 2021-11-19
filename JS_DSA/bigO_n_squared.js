const items = ['a', 'b', 'c', 'd']
function crossLog(array) {
  array.forEach(i => {
    array.forEach(j => {
      console.log(i, j)
    })
  });
}

crossLog(items)