// console.log('about to fetch')
// fetch('data/sample.jpg').then(response => {
//     console.log(response);
//     return response.blob();
// }).then(blob => {
//     console.log(blob);
//     document.getElementById('sample').src = URL.createObjectURL(blob);
// })


// console.log('about to fetch')
// fetch('data/sample.jpg').then(response => {
//     console.log(response);
//     return response.blob();
// }).then(blob => {
//     console.log(blob);
//     document.getElementById('sample').src = URL.createObjectURL(blob);
// }).catch(error =>{
//     console.log(error);
// })

drawImage().catch(error =>{
                  console.log(error);
                  })

async function drawImage(){
    const response = await fetch('data/sample.jpg');
    const blob = await response.blob();
    document.getElementById('sample').src = URL.createObjectURL(blob);
}
