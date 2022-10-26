const nome = prompt("inserisci nome");
const cognome = prompt("inserisci cognome");
const colore = prompt("inserisci coloreds");

const fullInfo = nome + cognome + colore;

const h1Saluto = document.getElementById("saluto");

h1Saluto.innerHTML = fullInfo;