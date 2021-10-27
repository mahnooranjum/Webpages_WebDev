async function getJSON(){


    
    // Use flask_cors for cor wrapped responses

    var data1 = await fetch('http://127.0.0.1:5000/');
    var dataJSON = await data1.json();

    console.log(dataJSON)

}

getJSON()