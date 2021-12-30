async function getJSON(){
    // const myHeaders = new Headers();
    var data1 = await fetch('http://127.0.0.1:5000/');
    var dataJSON = await data1.json();
    return dataJSON
  }


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

var c = getRandomColor()


setInterval(function(){ 
  chartit();
  console.log("This has been refreshed")
}, 100); 

var count_rep = null;


var dhtval = null
var rateval = null
var statusval = null

async function chartit() {
    data_json = await getJSON();
    console.log(data_json)

    dhtval = document.getElementById('dht-val')
    rateval = document.getElementById('rate-val')
    statusval = document.getElementById('status-val')

dhtval.innerHTML = data_json.data1.slice(-1)[0] 
rateval.innerHTML = data_json.data2.slice(-1)[0] 
if (data_json.data3.slice(-1)[0] == 0) {
  statusval.innerHTML = "OK"
}else{
  statusval.innerHTML = "ALERT"
  alert("Pulse Unstable")
}


const data = {
    labels: [1,2,3,4,5,6,7,8,9],
    datasets: [{
        label: "DHT Chart",
        backgroundColor: '#15' + 'f7f86b',
        borderColor: '#af' + 'f7f86b',
        borderWidth: 3,
        data: data_json.data1,
        minBarLength: 3,
        fill: true
    }]
};


const data2 = {
  labels: [1,2,3,4,5,6,7,8,9],
  datasets: [{
      label: "Heart Rate Chart",
      backgroundColor: '#05' + 'f7786b',
      borderColor: '#AF' + 'f7786b',
      borderWidth: 3,
      data: data_json.data2,
      minBarLength: 3,
      fill: true
  }]
};


typeGraph = 'line';

// const selectElement = document.querySelector('.custom-select');
const config = {
    type: typeGraph,
    data: data,
    options: {responsive: true, animation:  {duration: 50}}
    
  };
  const config2 = {
    type: typeGraph,
    data: data2,
    options: {responsive: true, animation: {duration: 50}}
    
  };
  if (count_rep != null){
    myChart = Chart.getChart('myChart');
    myChart.data.datasets[0].data = data_json.data1
    myChart.update();
    console.log("Updated")


    myChart2 = Chart.getChart('myChart2');
    myChart2.data.datasets[0].data = data_json.data2
    myChart2.update();
    console2.log("Updated")
    // myChart = new Chart(
    //   document.getElementById('myChart'),
    //   config
    // );
  }    
      else {
        var myChart = new Chart(
          document.getElementById('myChart'),
          config
        );

        var myChart2 = new Chart(
          document.getElementById('myChart2'),
          config2
        );
        count_rep = 1;
      }


}