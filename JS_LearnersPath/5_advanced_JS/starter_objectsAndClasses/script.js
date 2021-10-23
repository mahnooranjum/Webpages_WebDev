var Data = function(name, values){
    this.name = name;
    this.values = values;
}


var dataset1 = new Data('dataset1', {
    x: [1,2,3],
    y: [4,5,6]
} );

console.log(dataset1.values)
for (const [key, value] of Object.entries(dataset1.values)) {
    e = document.createElement('li');
    e.className = 'list-group-item';
    e.innerHTML = key + ':' + value;
    document.querySelector('.list-group').append(e);
  }
