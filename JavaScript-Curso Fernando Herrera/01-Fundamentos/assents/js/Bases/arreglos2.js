let juegos = ['Zelda', 'Mario','Metroid', 'Chrono'];
console.log('Largo: ' , juegos.length)

let primero = juegos[0]; //muestra el array en la posicion especificada
let ultimo = juegos[juegos.length-1];
console.log({primero,ultimo}); //Muestra tipo.... primero: "valor" ,ultimo : "valor"

let nuevaLongitud = juegos.push('F-Zero'); //carga un elemento al array en la ultima posicion
console.log({nuevaLongitud,juegos});

nuevaLongitud = juegos.unshift('Fire Emblem') ;//carga un elemento en el array en la primera posicion
console.log({nuevaLongitud,juegos});

let juegoBorrado = juegos.pop(); //borra el ultimo valor cargado al array
console.log({juegoBorrado,juegos});

let pos = 1;

let juegosBorrados = juegos.splice(pos,2); //borra desde pos incluido, borra 2 elementos
console.log({juegosBorrados,juegos});

let metroidIndex= juegos.indexOf('Metroid'); //te dice en que posicion se encuentra el elemento indicado, si no se encuentra te devuelve -1
console.log({metroidIndex});