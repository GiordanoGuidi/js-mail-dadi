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

// AGGIUNGO LA VARIABILE
if( userNumber < computerNumber){
    message = ' Il computer ha vinto ' + `<strong>${computerNumber}</strong>` 
} 
else if(userNumber > computerNumber){
    message = ' L\'utente ha vinto ' + `<strong>${userNumber}</strong>`
}
victoryElement.innerHTML = message

// # Esercizio FINTA LOGIN

// RECUPERO GLI ELEMENTI
const passwordElement= document.getElementById('password');
const buttonElement = document.getElementById('login-button')

// CREO UN ARRAY
const validPasswords = ['seiungrande', 'ciaobestione', 'entriamo' ];

// EVENT LISTNER
buttonElement.addEventListener('click', function(){
    // RECUPERO VALORI DAL FORM
    const passwordValue = passwordElement.value.trim()
    console.log(passwordValue)
    
    //PRENDO L'ALERT SUCCESS E L'ALERT DANGER
    const loginSuccess = document.querySelector('.alert-success')
    const loginDenied = document.querySelector('.alert-danger')
    // ! VALIDAZIONE 1
    if(!passwordValue){
        alert('inserisci password')
        return;
    }
    
    let isUserAllowed = false;
    for(let i = 0; i < validPasswords.length && !isUserAllowed; i++){
        
        // //! VALIDAZIONE 2
        if( passwordValue == validPasswords[i]){
            isUserAllowed = true
        }
    }

    if(isUserAllowed){
        loginSuccess.classList.remove('d-none');
        loginDenied.classList.add('d-none')
        passwordElement.value = '';
        passwordElement.focus();
    }
    else{ 
        loginSuccess.classList.add('d-none')
        loginDenied.classList.remove('d-none')
        passwordElement.value = '';
        passwordElement.focus();
    }
})


