// // console.log("js ok");
/* Steps
1- chiedere utente l'età e chilometraggio
1b- definire prezzo al km (0.21€)
2. definire sconti -20% e -40%
se utente minorenne
3- calcolo prezzo -20%
se utente over 65
4- calcolo prezzo -40%
5* gestire casistiche (validazione)
6- stampa in pagina **DONE**

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console. **DONE**

MILESTONE 2:
Realizzare un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
*/

// get elements from DOM
const userFinalPrice = document.getElementById('final-price');
const userAge = document.getElementById('user-age');
const travelKm = document.getElementById('kms');
const userName = document.getElementById('user-name')
const button = document.getElementById('generate');
const ticketName = document.getElementById ('ticket-name');
const ticketType = document.getElementById ('ticket-type');
const carriage = document.getElementById ('carriage');
const cpCode = document.getElementById ('cp-code');

button.addEventListener('click', function(){
    // DOM element values
    const valueAge = userAge.value;
    const valueKm = parseInt(travelKm.value);
    const valueName = userName.value;

    // age or km not valid
    if (isNaN(valueKm) || valueKm === 0){
        alert(`Per favore, inserisci numeri validi!`);
    } else {    
        // ticket & discount
        let defaultPrice = (valueKm * 0.21);
        let rateName = 'Biglietto Standard';
        const littleDiscount = defaultPrice * 20 / 100;
        const bigDiscount = defaultPrice * 40 / 100;
        
        if (valueAge == 'under'){
            defaultPrice = (defaultPrice - littleDiscount);
            rateName = `Biglietto under 18`; 
        } else if (valueAge == 'over'){
            defaultPrice = (defaultPrice - bigDiscount);
            rateName = `Biglietto over 65`;
        }

        // random variables
        const random = Math.random();
        const max = 10;
        const maxCp = 9999;

        // carriage math
        carriage.innerText = Math.floor(random * max) + 1;

        // cp math
        cpCode.innerText = Math.floor(random * maxCp) + 1;

        // print on page and console
        userFinalPrice.innerText = '€' + (defaultPrice).toFixed(2);
        // // console.log(`€ ${defaultPrice}`);
        ticketName.innerText = valueName;
        ticketType.innerText = rateName;
    }
});