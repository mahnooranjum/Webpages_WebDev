function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    if (color !== '000000'){
        return  '#' + color;
    }else {
        return getRandomColor()
    }

  }


var noElements = 10;
var colors = []; 
for (i = 0; i < noElements; i++){
    colors.push(getRandomColor());
}

console.log(colors);

const body = document.body;
for (var k=0; k < noElements; k++){
    div = document.createElement('div');
    // div.className = colors.slice(k);
    div.style.backgroundColor = colors[k];
    div.style.width = noElements + '%';
    div.style.height = '400px';
    document.querySelector('.row').appendChild(div);
}