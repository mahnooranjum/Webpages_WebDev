getData().catch(error =>{
                  console.log(error);
                  })

async function getData(){
    const response = await fetch('data/train_house.csv');
    const data = await response.text();
    // document.getElementById('sample-text').innerHTML = data;
    var rows = data.split('\n').slice(1);
    rows.forEach( row => {
        cell = row.split(',') 
        
        console.log(cell[1] + ', '+ cell[3])

    })
}
