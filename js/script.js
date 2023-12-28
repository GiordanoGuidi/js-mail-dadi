// #Esercizio dei DADI
//RECUPERO ELEMENTI
const userElement = document.getElementById('user-cube')
const computerElement = document.getElementById('computer-cube')
const victoryElement = document.getElementById('victory')

// GENERO NUMERI RANDOM
const userNumber = Math.floor((Math.random() * 6) + 1);
const computerNumber = Math.floor((Math.random() * 6) + 1);

// SCRIVO RISULTATO IN PAGINA
userElement.innerHTML =   `Il numero dell\'utente è :  <strong>${userNumber}</strong>`
computerElement.innerHTML = ` Il numero del computer è : <strong>${computerNumber}</strong>;`

// DICHIARO IL MESSAGGIO E AGGIUNGO IL MESSAGGIO DI PARITA'
let message = '<strong>Parità<strong>'
victoryElement.innerHTML= message

// AGGIUNGO LA VARIABILE
if( userNumber < computerNumber){
    message = ' Il computer ha vinto ' + `<strong>${computerNumber}</strong>` 
    victoryElement.innerHTML = message
} 
else if(userNumber > computerNumber){
    message = ' L\'utente ha vinto ' + `<strong>${userNumber}</strong>`
    victoryElement.innerHTML = message
}

// # Esercizio FINTA LOGIN

// RECUPERO GLI ELEMENTI
const passwordElement= document.getElementById('password');
const buttonElement = document.getElementById('login-button')

// EVENT LISTNER
buttonElement.addEventListener('click', function(){
    // RECUPERO VALORI DAL FORM
    const passwordValue = passwordElement.value.trim()
    
    //PRENDO L'ALERT SUCCESS
    const loginSuccess = document.querySelector('.alert')
    const logidDenied = document.querySelector('.alert-danger')

     // CREO UN ARRAY
     const validPasswords = ['seiungrande', 'ciaobestione', 'entriamo' ]


    for(let i = 0; i < validPasswords.length; i++){

        //! VALIDAZIONE
        if( passwordValue !== validPasswords[i] ){
            logidDenied.classList.remove('d-none');
            loginSuccess.classList.add('d-none');
            passwordElement.value = '';
            passwordElement.focus();
            break;   
        }
        else{ loginSuccess.classList.remove('d-none')
            logidDenied.classList.add('d-none')
            passwordElement.value = '';
            passwordElement.focus();
            break;
        }
    }
    
    
})

