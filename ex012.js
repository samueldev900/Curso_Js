var agora = new Date();
var hora = agora.getHours();
var minu = agora.getMinutes();

if(minu < 10){
    minu = "0" + minu
}
console.log(`Agora são exatamente ${hora}:${minu}.`)

if(hora < 12){
    console.log('Bom Dia!!')
}
else if(hora < 18){
    console.log('Boa Tarde!!')
}
else{
    console.log('Boa Noite!!')
}

