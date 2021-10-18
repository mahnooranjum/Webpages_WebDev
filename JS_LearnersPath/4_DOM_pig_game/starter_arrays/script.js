
const persons = [
    { name: 'mahnoor', status: 'sleeping'}, 
    { name: 'usman', status: 'working wajahat'}, 
    { name: 'umer', status: 'dota'}, 
    { name: 'abdullah', status: 'skype'}, 
    { name: 'joker', status: 'serious'}, 
    { name: 'adele', status: 'on the other side'}, 
]


const filteredPersons = persons.filter((person) => {
    return person.status === 'sleeping';
})

const personNames = persons.map((person) => {
    return person.name
})

const findPerson = persons.find((person) => {
    return person.name === 'mahnoor'
})


persons.forEach((person) => {
    console.log(person.name)
})

// every 
const isSleeping = persons.some((person) => {
    return person.status == 'sleeping'
})

const allStats = persons.reduce((currentString, person) => {
    return currentString + " " + person.status
}, "")

// console.log(persons);
// console.log(filteredPersons);
// console.log(personNames);

const body = document.body;
div = document.createElement("div");
div.innerHTML = JSON.stringify(persons, null, 2);
document.body.append(div);

div = document.createElement("div");
div.innerHTML = JSON.stringify(filteredPersons, null, 2);
document.body.append(div);

div = document.createElement("div");
div.innerHTML = personNames;
document.body.append(div);

div = document.createElement("div");
div.innerHTML = JSON.stringify(findPerson, null, 2);
document.body.append(div);


div = document.createElement("div");
div.innerHTML = JSON.stringify(isSleeping, null, 2);
document.body.append(div);


div = document.createElement("div");
div.innerHTML = JSON.stringify(allStats, null, 2);
document.body.append(div);