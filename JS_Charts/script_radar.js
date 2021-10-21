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
  labels: [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 90, 81, 56, 55, 40],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }, {
    label: 'My Second Dataset',
    data: [28, 48, 40, 19, 96, 27, 100],
    fill: true,
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgb(54, 162, 235)',
    pointBackgroundColor: 'rgb(54, 162, 235)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(54, 162, 235)'
  }]
},

typeGraph = 'radar';

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
            text: 'Chart.js Radar Chart'
          }
        }
      },
    };

var myChart = new Chart(
    document.getElementById('myChart'),
    config
  );


