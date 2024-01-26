const dia=2;

switch (dia) { //lo puesto entre parentesis debe cumplir con los cosas, sino se entrega el mensaje en default.Si cumple con ellos se ejecuta el codigo del caso y todos los de abajo salvo que haya un break
    case 0 :
        console.log('Lunes');
        break;
    case 1:
        console.log('Martes');
        break;
    case 2:
        console.log('Domingo');
        break;
    default:
        console.log('No es lunes, martes o domingo');
}