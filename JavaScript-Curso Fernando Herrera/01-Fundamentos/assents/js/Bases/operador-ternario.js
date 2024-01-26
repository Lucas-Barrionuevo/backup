//un local en la semana abre a las 11 y los fines de semana a las 9 
const dia= 1;
const horaActual = 11;

let horaApertura;
let mensaje;

/*if (dia == 0 || dia == 6){
if ([0,6].includes(dia)){ // array de 0 a 6, incluides funciona como un si.... y ponemos el dia entre parentesis, entonces si el dia es igual al array... ejecuta el if
    console.log('Fin de semana');
    horaApertura= 9;
} else {
    console.log('Dia de semana');
    horaApertura = 11;
}*/
horaApertura = ([0,6].includes(dia)) ? 9 : 11; // esto funcionaria como el if de arriba pero mas resumido, si es true lo que dijimos se ejecuta lo que sigue del ?, pero en caso contrario, lo que va desp del :

/*if (horaActual >= horaApertura){
    mensaje = 'Esta abierto';
} else{
    mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`; //Sirve para evitar concatenar con + ya que puede ser confunso debido a que js no se define el tipo de variable, entonce ssi se pone un numero lo suma
}*/
mensaje= (horaActual >= horaApertura) ? 'Esta abierto' : `Esta cerrado, hoy abrimos a las ${horaApertura}`;

console.log({horaApertura,mensaje});