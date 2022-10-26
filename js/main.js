const nome = prompt("inserisci nome");
const upper = nome.charAt(0).toUpperCase() + nome.slice(1)
const cognome = prompt("inserisci cognome");
const colore = prompt("inserisci colore");

const fullInfo = upper + cognome + colore;

const h2Password = document.getElementById("password");

h2Password.innerHTML = fullInfo + "." +21;