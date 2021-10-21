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
  
const labels = [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                ];

var dataArray = [10, 20, 5, 2, 80, 30, 45];
var legends = ['My First Dataset'];

const tints = ColorTranslator.getTints(getRandomColor(), dataArray.length);
var colors = []; 
var strokeColors = []; 
tints.forEach((c) => {
    colors.push('#05' + c.slice(1));
    strokeColors.push('#AF' + c.slice(1));
});

// console.log(colors)
// console.log(strokeColors)

const data = {
    labels: labels,
    datasets: [{
        label: legends,
        backgroundColor: colors,
        borderColor: strokeColors,
        borderWidth: 3,
        data: dataArray,
        minBarLength: 3,
        fill: true
    }]
};



typeGraph = 'bar';

const selectElement = document.querySelector('.custom-select');
const config = {
    type: typeGraph,
    data: data,
    options: {}
  };

var myChart = new Chart(
    document.getElementById('myChart'),
    config
  );


