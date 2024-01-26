function crearPersona (nombre,apellido){
    return {nombre, apellido}
}
const crearPersona2 = (nombre, apellido) => ({nombre,apellido});
const persona = crearPersona2('Fernando' , 'Herrera');
console.log(persona);

const imprimeArgumentos = (edad, ...args) => {
    return args;
}
const [casado,vivo,nombre,saludo] =  imprimeArgumentos(10,true,false,'Fernando','Hola');
console.log({casado,vivo,nombre,saludo})