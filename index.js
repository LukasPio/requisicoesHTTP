const buttonGET = document.querySelector('.getButton')
const buttonPOST = document.querySelector('.postButton')
const buttonPUT = document.querySelector('.putButton')
const buttonDELETE = document.querySelector('.deleteButton')
const people = document.querySelector('.People')

function createPeople(Person) {
    const name = Person.Name;
    const nameArea = document.createElement('h2');
    nameArea.innerText = `Name: ${name}`;

    const age = Person.Age;
    const ageArea = document.createElement('h3');
    ageArea.innerText = `Age: ${age}`;

    const city = Person.City;
    const cityArea = document.createElement('h4');
    cityArea.innerText = `City: ${city}`;

    const id = Person.id;
    const idArea = document.createElement('p');
    idArea.innerText = `id: ${id}`;

    const divPerson = document.createElement('div');

    divPerson.append(nameArea, ageArea, cityArea, idArea, document.createElement('hr'));
    people.append(divPerson);
}

async function getRequision() {
    axios.get('http://localhost:3000/Pessoas').then((res) => {
        const data = res.data;
        data.forEach((Person) => {
            createPeople(Person);
        })
    });
    document
    const titulo = document.createElement('h1');
    titulo.textContent = "People"
    people.insertBefore(titulo, people.firstChild)
}

async function postRequisition() {
    const namePOST = document.getElementById('namePOST').value
    const agePOST = document.getElementById('agePOST').value
    const cityPOST = document.getElementById('cityPOST').value

    if (!(namePOST.trim() && !agePOST && cityPOST.trim())) {
        alert("All camps must be filled")
        throw new Error("All camps must be filled!")
    }

     axios.post('http://localhost:3000/Pessoas', {
            Name: namePOST,
            Age: agePOST,
            City: cityPOST
        }) 
        alert(`${namePOST} was saved in the database`)
}

async function putRequisition() {
    const namePUT = document.getElementById('namePUT').value
    const agePUT = document.getElementById('agePUT').value
    const cityPUT = document.getElementById('cityPUT').value
    const idPUT = document.getElementById('idPUT').value
    const updateData = {
        Name: namePUT,
        Age: agePUT,
        City: cityPUT
    }
    if (!(namePUT.trim() && agePUT.trim() && cityPUT.trim())) {
        alert("At least one field must be changed")
        throw new Error("At least one field must be changed!")
    }
    if(!idPUT) {
        alert("ID must be specified")
        throw new Error("ID must be specified!")
    }
    axios.put(`http://localhost:3000/Pessoas/${idPUT}`, updateData)
        alert(`${namePUT} was updated`)
}

async function deleteRequisition() {
    const idDELETE = document.getElementById('idDELETE').value

    if (!idDELETE) {
        alert("ID must be specified")
        throw new Error("ID must be specified")
    }
    axios.delete(`http://localhost:3000/Pessoas/${idDELETE}`)
}


buttonGET.addEventListener('click', getRequision);
buttonPOST.addEventListener('click', postRequisition);
buttonPUT.addEventListener('click', putRequisition);
buttonDELETE.addEventListener('click', deleteRequisition);