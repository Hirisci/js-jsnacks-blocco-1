// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100.
// MILESTONE 1
// Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// MILESTONE 2
// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
// MILESTONE 3
// Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.



const container = document.querySelector(".container");

for(let i = 1; i<=100; i++){
    let element= document.createElement("div")
    element.classList.add("box")
    if(i%3===0) 
        element.classList.add("fizz")
    if(i%5===0) 
        element.classList.add("buzz")
    element.innerText = i ;
    container.append(element);
}