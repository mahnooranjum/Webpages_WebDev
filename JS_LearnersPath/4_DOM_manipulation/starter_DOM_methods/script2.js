const body = document.body;



for (i=0; i<10; i++){
    var div = document.createElement("div");
    div.innerText = "Hellllow world" + i;
    document.body.append(div);
}
