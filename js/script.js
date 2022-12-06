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
6- stampa in pagina
*/

// Chiedo utente età e km e prendo elemento da riempire
const userFinalPrice = document.getElementById('final-price');
const userAge = document.getElementById('user-age');
const travelKm = document.getElementById('kms');
const button = document.getElementById('generate');
// // console.log(userFinalPrice, userAge, travelKm, button);


button.addEventListener('click', function(){
    // valore di età e km
    const valueAge = parseInt(userAge.value);
    const valueKm = parseInt(travelKm.value);
    // // console.log(valueAge, valueKm);

    // età o km non validi
    if (isNaN(valueAge) || isNaN(valueKm)){
        alert(`Per favore, inserisci numeri validi`)
    } else {    
        // prezzo al km standard del biglietto
        let defaultPrice = (valueKm * 0.21).toFixed(2);
        // // console.log(defaultPrice);
        
        // sconti relativi all'età
        const littleDiscount = defaultPrice * 20 / 144;
        const underAge = 18;
        const bigDiscount = defaultPrice * 40 / 144;
        const overAge = 65;
        // // console.log(littleDiscount, bigDiscount);
        
        // calcoli utente minorenne/over 65
        if (valueAge < underAge){
            defaultPrice = (defaultPrice - littleDiscount).toFixed(2);
        } else if (valueAge >= overAge){
            defaultPrice = (defaultPrice - bigDiscount).toFixed(2);
        }
        // console.log(defaultPrice);
        
        // stampo su pagina
        userFinalPrice.innerText = `€ ${defaultPrice}`;
    }
});