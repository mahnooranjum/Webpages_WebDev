const body = document.body;



for (i=0; i<10; i++){
    var div = document.createElement("div");
    div.innerHTML = `<em>Hellllow world ${i}</em>`;
    document.body.append(div);
}


document.querySelector('div').remove();