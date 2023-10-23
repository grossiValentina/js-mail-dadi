// array con email valide
const mail = ["Roberto@gmail.com", "Luigi@gmail.com", "Luca@gmail.com", "Mario@gmail.com"];

// chiediamo all'utente la mail
const userMail = prompt("Ciao! scrivi la tua e-mail");
console.log(userMail);
 

if(mail.includes(userMail)) {
    console.log("mail trovata! puoi accedere")
} else {
    console.log("mail non trovata, riprova!")
}

