let p = new Promise((resolve, reject) => {
    let a = 1+2;
    if (a == 2){
        resolve('success')
    } else{
        reject('failed')
    }

})

const body = document.body;


p.then((message) => {
    div = document.createElement("div");
    div.innerHTML = message;
    document.body.append(div);
}).catch((message) => {
    div = document.createElement("div");
    div.innerHTML = message;
    document.body.append(div); 
})


// console.log(persons);
// console.log(filteredPersons);
// console.log(personNames);


