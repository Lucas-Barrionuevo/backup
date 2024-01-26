function saludar(nombre){
    console.log('Hola ' + nombre)
    return 1;
}
const saludar2 = function (nombre){
    console.log('Hola ' + nombre)
}
 const saludarFlecha = (nombre) => {
    console.log('Hola ' + nombre)
 }
const returnDeSaludar = saludar('Ricardo');
console.log( {returnDeSaludar});
