// Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.


let num=0; 

for (let i = 0; i < 10; i++) {
    num += Number(prompt('inserisci un numero'));    
}

console.log(`somma= ${num}`);