
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
