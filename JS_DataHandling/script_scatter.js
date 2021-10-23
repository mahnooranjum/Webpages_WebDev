function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    if (color !== '000000'){
        return  color;
    }else {
        return getRandomColor()
    }

  }
  
const labels =  [10, 20, 5, 2, 80, 30, 45];

var dataArray = [10, 20, 5, 2, 80, 30, 45];
var legends = ['My First Dataset'];


var hit = getRandomColor();
var color = '#05' + hit;
var strokeColor = '#AF' + hit;

// console.log(colors)
// console.log(strokeColors)

const data = {
    labels: labels,
    datasets: [{
        label: legends,
        backgroundColor: color,
        borderColor: strokeColor,
        borderWidth: 2,
        data: dataArray,
        pointRadius: 5,
        minBarLength: 3,
    }]
};



typeGraph = 'scatter';

const selectElement = document.querySelector('.custom-select');
const config = {
    type: typeGraph,
    data: data,
    options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Scatter Chart'
          }
        }
      },
    };

var myChart = new Chart(
    document.getElementById('myChart'),
    config
  );


