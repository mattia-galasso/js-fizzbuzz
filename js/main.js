/*
# FizzBuzz

Nome repo: `js-fizzbuzz`

## Consegna

> Scrivi un programma che stampi i numeri da 1 a 100,
> ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
> Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

> Prima di partire a scrivere codice poniamoci qualche domanda:
> Come faccio a sapere se un numero è divisibile per?
> Abbiamo visto qualcosa di particolare che possiamo usare?

### Consigli del giorno:

> - scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
> - proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
*/

//! PSEUDO CODICE

//* Dichiaro il numero di partenza
const countStart = 1;

//* Dichiaro il numero di arrivo
const countEnd = 100;

//* Dichiaro l'intervallo
const countStep = 1;

//* Dichiaro il primo multiplo e la parola da stampare
const firstMultiple = 3;
const firstMultipleWord = "Fizz";

//* Dichiaro il primo multiplo e la parola da stampare
const secondMultiple = 5;
const secondMultipleWord = "Buzz";

//? Elaborazione
//* FINCHE (Il conteggio non arriva a 100 continua a contare 1 numero alla volta)
for (let i = countStart; i <= countEnd; i += countStep) {
  //* SE (Il numero del conteggio è multiplo di 3 e di 5)
  if (i % firstMultiple === 0 && i % secondMultiple === 0) {
    //* Scrive entrambe le parole
    console.log(firstMultipleWord + secondMultipleWord);
  }
  //* ALTRIMENTI SE (il numero è multiplo di 3)
  else if (i % firstMultiple === 0) {
    //* Scrive solo la prima parola
    console.log(firstMultipleWord);
  }
  //* ALTRIMENTI SE (Il numero è multiplo di 5)
  else if (i % secondMultiple === 0) {
    //* Scrive solo la seconda parola
    console.log(secondMultipleWord);
  }
  //* ALTRIMENTI (Il numero non è multiplo ne di 3 e ne di 5)
  else {
    //* Scrive il numero
    console.log(i);
  }
}
