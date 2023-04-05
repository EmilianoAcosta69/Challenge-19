// Realice un programa que dada la vida de un personaje, indique una acción: 
// ∙ Si la vida es menor a 50, que cure nuestro personaje con una poción grande de vida y nos muestre la vida actual después de haberlo curado.
// ∙ Si la vida es menor a 75, que cure nuestro personaje con una poción chica de vida y nos muestre la vida actual después de haberlo curado.
// ∙ Si la vida es mayor o igual a 75 que no cure a nuestro personaje y nos informe de ello.
// ∙ la poción de vida chica cura 25 y la grande 50.

let vida = parseInt(prompt('Ingrese su vida actual'));
let pocionChica = 25;
let pocionGrande = 50;


if(isNaN (vida) || vida > 100){
    alert('No ingresaste un valor correcto.');
}else if( vida == 0){
    alert('Tu personaje murio :(');
}else if( vida <= 50){
    alert('Tu personaje necesita curarse con una pocion grande de vida.');
    alert(`Ya te curaste, ahora tu vida actual es de: ${vida + pocionGrande}HP.`);
}else if( vida <= 75){
    alert('Tu personaje necesita curarse con una pocion chica de vida.');
    alert(`Ya te curaste, ahora tu vida actual es de: ${vida + pocionChica}HP.`);
}else if( vida > 75 && vida <=100){
    alert(`No es necesario que cures a tu personaje. Tu vida actual es de : ${vida}HP.`);
}