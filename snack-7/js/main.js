// Snack 7

// Generatore di "nomi cognomi" casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.



const listName = ["Angelo","Paolo", "Franco", "Valerio"]
const listSurname= ["Bianchi","Rossi", "Verdi","Blu", "Belli"]

const numPerson = Number(prompt("Inserisci numero invitati"));

const listNameSurname = [];

for (let i = 0; i < numPerson; i++) {
    const name = listName[Math.floor(Math.random() * listName.length)];
    const surname = listSurname[ Math.floor(Math.random() * listSurname.length)];
    console.log(`${i+1}) ${name} ${surname}`); 
    listNameSurname.push(`${name} ${surname}`);
}

console.log(listNameSurname);