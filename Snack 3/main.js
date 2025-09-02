const somma = (a, b) => { a + b };
const moltiplica = (a, b) => { a * b };

const EseguiOperazione = (a, b, operazione) => { operazione(a, b) };

console.log(EseguiOperazione(2, 3, somma()));
console.log(EseguiOperazione(2, 3, moltiplica()));