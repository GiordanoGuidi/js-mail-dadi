console.log('JS OK')


//RECUPERO ELEMENTI

const userElement = document.getElementById('user-cube')
console.log(userElement)
const computerElement = document.getElementById('computer-cube')
console.log(computerElement)
const victoryElement = document.getElementById('victory')
console.log(victoryElement)

// GENERO NUMERI RANDOM
const userNumber = Math.floor((Math.random() * 6) + 1);
console.log(userNumber)
 const computerNumber = Math.floor((Math.random() * 6) + 1);
 console.log(computerNumber)

// SCRIVO RISULTATO IN PAGINA
userElement.innerText =  ' Il numero dell\'utente è : ' + userNumber
computerElement.innerText = ' Il numero del computer è : ' + computerNumber;

// AGGIUNGO LA VARIABILE
let message = 'Parità'
victoryElement.innerText= message

if( userNumber < computerNumber){
    message = ' Il computer ha vinto ' + computerNumber
    victoryElement.innerText = message
    console.log(victoryElement)
} 
else if(userNumber > computerNumber){
    message = ' L\'utente ha vinto ' + userNumber
    victoryElement.innerText = message
}
        
    
