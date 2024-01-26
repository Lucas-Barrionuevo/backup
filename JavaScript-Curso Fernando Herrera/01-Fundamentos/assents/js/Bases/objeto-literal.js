let personaje = {
    nombre : 'Tony Stark',
    codeName : 'Ironman',
    vivo: false ,
    edad: 40,
    coords : {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I','Mark V','HulkBuster'],
    direccion: {
        zip: '10880,90265',
        ubicacion: 'Malibu, California'
    },
    'ultima pelicula': 'Infinity war' //para poner un espacio en una propiedad
};

console.log(personaje);
console.log('Nombre ', personaje.nombre);
console.log('Nombre ', personaje['nombre']);
console.log('Coors ', personaje.coords);
console.log('Lat ', personaje.coords.lat)
console.log('No trajes', personaje.trajes.length)
console.log('Ultimo Traje', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo',personaje[x]);

console.log('Ultima pelicula',personaje['ultima pelicula']);

//mas detalles

delete personaje.edad //para eliminar una propiedad

const entriesPares = Object.entries(personaje); //te guarda las propiedades con sus valores en un array
console.log(entriesPares); 

personaje.casado = true; //para agregarle una propiedad al objeto

Object.freeze(personaje); //para no dejar que se pueda hacer cambios en el objeto personaje, pero si puedo cambiar lo arrays que estan adentro de mi objeto

const propiedades = Object.getOwnPropertyNames(personaje); // me devuelve todos los nombres de las propiedades del objeto
const valores = Object.values(personaje); //me devuelve los valores que posee el objeto