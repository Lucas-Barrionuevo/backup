const carros = ['Ford','Madza','Honda','Toyota'];
let i = 0
//se ejecuta el ciclor mientras se cumpla la condicion que esta entre parentesis
while(i<carros.length){
    console.log(carros[i]);
    i++;
}
//o, ya que false=null=undenfined, las tres terminan el ciclo
while (carros[i]){
    console.log(carros[i]);
    i++;
}
//do while sirve para que lo que esta adentro del do se ejecute primero y despues pregunte la condicion
const j = 0;
do {
    console.log(carros[j]);
    j++;
}while(carros[j]);