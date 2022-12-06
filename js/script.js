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
const button = document.getElementById('generate');
const userName = document.getElementById('user-name')
// // console.log(userFinalPrice, userAge, travelKm, button, userName);

button.addEventListener('click', function(){
    // get elements from DOM after click
    const valueAge = parseInt(userAge.value);
    const valueKm = parseInt(travelKm.value);
    
    // age or km not valid
    if (isNaN(valueAge) || isNaN(valueKm) || valueAge === 0 || valueKm === 0){
        alert(`Per favore, inserisci numeri validi`)
    } else {    
        // ticket standard price
        let defaultPrice = (valueKm * 0.21).toFixed(2);
        // discounts variables
        const littleDiscount = defaultPrice * 20 / 144;
        const underAge = 18;
        const bigDiscount = defaultPrice * 40 / 144;
        const overAge = 65;
        // ticket variables
        const valueName = userName.value;
        const ticketName = document.getElementById ('ticket-name');
        let ticketType = document.getElementById ('ticket-type');
        ticketType.innerText = `Biglietto Standard`
        const carriage = document.getElementById ('carriage');
        const cpCode = document.getElementById ('cp-code');

        // discount math
        if (valueAge < underAge){
            defaultPrice = (defaultPrice - littleDiscount).toFixed(2);
            ticketType.innerText = `Biglietto under 18`;
        } else if (valueAge >= overAge){
            defaultPrice = (defaultPrice - bigDiscount).toFixed(2);
            ticketType.innerText = `Biglietto over 65`;
        }
        // // console.log(defaultPrice);
        
        // print on page and console
        userFinalPrice.innerText = `€ ${defaultPrice}`;
        console.log(`€ ${defaultPrice}`);
        ticketName.innerText = valueName;
    }
});