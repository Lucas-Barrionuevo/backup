let mensaje: string = "Hola mundo";

mensaje = "chanchito feliz";

mensaje = "chao mundo";

console.log(mensaje);

/*
tipos de js
number
string
boolean
null
undefined
object : array
function
*
tipos de TS
any
unknown
never
arrays
tuplas
Enums
*/
//Si inicializas una variable con un valor no es necesario definir el tipo de dato, ts lo hace por vos, pero si no le definis el valor si en necesario.

let extincionDinosaurios = 76_000_000 // se puede poner _ para separar los numeros por miles y millones para prolijidad, pero js lo toma como si no estuviera
let dinosaurioFavorito = "T-Rex"
let extintos =true

let num: number ;

function chanchitoFeliz (config :any) {
    return config
}

let animales: string[] = ['chanchito' , 'feliz' , 'felipe']
let nums: number [] = [1,2,3]
let checks : boolean [] = []
let nums2 : Array<number> = []

//nums.map(x => x.)//  sirve para recorrer un array y aplicarle una funcion
//Tuplas
let tupla : [number, string[]] = [1, ['chanchito feliz' , 'chanchito felipe']]

const chica = 's'
const mediana = 'm'
const grande = 'l'
const extragrande = 'xl'
//Enums
//PascalCase 
enum Talla {Chica = 's' , Mediana = 'm' , Grande = 'l' , ExtraGrande = 'xl'}

const variable1 = Talla.Grande
console.log(variable1)

const enum LoadingState {Idle , Loading, Succes, Error }
const estado = LoadingState.Succes

type Direccion = {
    numero : number,
    calle : string, 
    pais : string
}

type Persona = {
    readonly id : number // readonly es para que no se pueda modificar, solo leer
    nombre : string
    talla : Talla
    direccion: Direccion
}

const objeto : Persona = {
    id: 1,
    nombre:'Hola mundo',
    talla:  Talla.Mediana,
    direccion : {
        numero:1,
        calle:'Simepre viva',
        pais : 'Chanchitolandia'
    }
}