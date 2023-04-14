const tariffa = 0.21;

let nome = document.getElementById("nomeUtente");

let distanza = document.getElementById("distanza");

let eta = document.getElementById("eta");

let genera = document.getElementById("genera");

let passeggero = document.getElementById("passeggero");

let offerta = document.getElementById("offerta");

let carrozza = document.getElementById("carrozza");

let codice = document.getElementById("codice");

let costo = document.getElementById("costo");

let prezzo = null;

genera.addEventListener("click",
    function() {
       passeggero.innerText = nome.value;
       
       prezzo = distanza.value * tariffa;

       if (eta.value == "Minorenne") {
        offerta.innerText = "Biglietto Scontato"
        prezzo *= 0.8 
       } else if (eta.value == "Over 65") {
        offerta.innerText = "Biglietto Scontato"
        prezzo *= 0.6
       } else {
        offerta.innerText = "Biglietto Standard"
       }

       carrozza.innerText = Math.ceil(Math.random() * 10);

       codice.innerText = Math.ceil(Math.random() * 100000);

       prezzo = prezzo.toFixed(2)

       costo.innerText = prezzo + `€`;
    }
    )
