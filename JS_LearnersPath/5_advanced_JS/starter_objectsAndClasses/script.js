var Data = function(name, raw){
    this.name = name;
    this.raw = raw;
}

Data.prototype.print = function() {
    e = document.createElement('li');
    e.className = 'list-group-item';
    e.innerHTML = JSON.stringify(this.raw);
    document.querySelector('.list-group').append(e);
    ;
}


var dataset1 = new Data('dataset1', {
    x: [1,2,3],
    y: [4,5,6]
} );

dataset1.print()

// console.log(dataset1.raw)
// for (const [key, value] of Object.entries(dataset1.raw)) {
//     e = document.createElement('li');
//     e.className = 'list-group-item';
//     e.innerHTML = key + ':' + value;
//     document.querySelector('.list-group').append(e);
//   }


