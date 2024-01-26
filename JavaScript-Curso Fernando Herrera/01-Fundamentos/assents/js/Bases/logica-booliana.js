const regresaTrue = ()=> {
    console.log('Regresa True');
    return true;
}
const regresaFalse = ()=> {
    console.log('Regresa False');
    return false;
}
// && operador y
console.log( true && false); // true y true = true, false y false = false, false y true = false. Si se pone primero el false, el true no se ejecuta, pero si se pone primero el true si se ejecuta(esto sirve para remplazar un if aveces)
regresaFalse() && regresaTrue(); //false, y el true no se ejecuta
!regresaFalse() && regresaTrue(); // ! sirve para hacer lo contrario, true
// || operador o
console.log(true || false) ; // true o true = true, false o false = false, true o false = true. Si se pone primero el true , el false no se ejecuta, pero si se pone primero el false si se ejecuta.

regresaTrue() || regresaFalse();



