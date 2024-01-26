const elMayor = (a,b) => (a>b) ? a : b;

console.log(elMayor(10,15));

const nota = 70;
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A' : 'F';

console.log({nota,grado});