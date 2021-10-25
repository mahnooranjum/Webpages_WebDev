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
  


// getData().then(()=>{
//     getChart()
// })

async function getData(){
    xs = []
    ys = []

      const response = await fetch('data/train_house.csv');
      const data = await response.text();
      // document.getElementById('sample-text').innerHTML = data;
      var rows = data.split('\n').slice(1);
      rows.forEach( row => {
          col = row.split(',')  
          console.log(col[1] + ', '+ col[3])
          xs.push(col[1])
          ys.push(col[3])
          
      })
      return {xs, ys}
  }



async function getChart() {
    const dataset = await getData();
    var legends = ['My First Dataset'];
    const color =  getRandomColor();
    // console.log(colors)
    // console.log(strokeColors)
    
    const data = {
        labels: dataset.xs,
        datasets: [{
            label: legends,
            backgroundColor: color,
            borderWidth: 1,
            data: dataset.ys,
            minBarLength: 3,
        }]
    };
    
    typeGraph = 'scatter';
    const config = {
        type: typeGraph,
        data: data,
        options: {}
      };
    
    var myChart = new Chart(
        document.getElementById('sample-chart'),
        config
      );
    
    
}

getChart()