const heroes = ['batman','superman' , 'aquaman','mujer maravilla'];

for(let i= 0 ;i<5 ;i++ ){
    console.log(heroes[i]);
}
//for in: hace lo mismo que el for pero hace el autoincremento solo
for (let i in heroes){
    console.log(heroes[i]);
}
//for of: recorre el array hasta que este vacio
for (let heroe of heroes){
    console.log(heroe);
}