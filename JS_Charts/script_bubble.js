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
  
var x =  [5, 20, 15, 23, 60, 30, 90];
var y = [10, 20, 5, 2, 80, 30, 45];
var r = [10, 20, 5, 2, 80, 30, 45];

var legends = ['My First Dataset'];

var hit = getRandomColor();
var color = '#05' + hit;
var strokeColor = '#AF' + hit;

// console.log(colors)
// console.log(strokeColors)

const data =  {
  datasets: [{
      label: 'My Stats',
      borderColor: strokeColor,
      borderWidth: 1,
      hoverRadius: 15,
      hitRadius: 10,
      backgroundColor: color,
      hoverBackgroundColor: strokeColor,
      hoverBorderColor: 'black',
      // pointStyle: "triangle",
      data: [
        {x: 5, y:10, r:10},
        {x: 15, y:1, r:20},
        {x: 1, y:3, r:22}
      ],
  }]
},

typeGraph = 'bubble';

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
            text: 'Chart.js Bubble Chart'
          }
        }
      },
    };

var myChart = new Chart(
    document.getElementById('myChart'),
    config
  );


