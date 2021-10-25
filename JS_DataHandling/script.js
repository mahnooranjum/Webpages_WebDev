async function getJSON(){

    const data1 = await fetch('https://api.wheretheiss.at/v1/satellites');
    const data1JSON = await data1.json();
    console.log(data1JSON);

    const data2 = await fetch('https://api.wheretheiss.at/v1/satellites/' + data1JSON[0].id)
    const data2JSON = await data2.json();
    console.log(data2JSON);

}


getJSON()