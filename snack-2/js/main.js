// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.


const parola1 = prompt("Insersci la prima parola");
const parola2 = prompt("Insersci la seconda parola");

parola1.length >= parola2 ? console.log(`${parola2} ${parola1}`) : console.log(`${parola1} ${parola2}`);