//comentario  de una sola linea
/*comentario
de mas de 
una linea*/

// para declara variables se usa let y constantes const

let edad;
let direccion;

// inicializacion de variables

edad=54 //tipo numerico
direccion= "9 de julio 234" // si es alpha numerico va con comillas

//  declaracion e inicializacion
let equipo= "river";
let aniioNacimientoUnuion; Cada vez que 

//reasigno un valor
equipo="Boca"
equipo="Racing"

// Constantes no se pueden reasignar
const PI= 3.14;
PI=2.2

// operaciones mqatematicas basicas
let num1 = 7;
let num2 =3;
let suma = num1 + num2; //10
let resta = num1 - num2; 
let multip = num1* num2;
let division = num1 /num2;

// concatenacion
const ESPACIO= "",
let dosCadenas = equipo + ESPACIO + direcciones;  
let cadenaYum = equipo+ ""+ edad;//racing 54

// Consola
console.log("bieenvenidos a la consola");
console.log("el resultado de la suma es"+suma);
console.log("el resultado de la resta es"+resta);
console.log("el resultado de la multiplicacion es"+multip);

// pormpt - ingreso de datos
let usuario = prompt("ingresa tu nombre de usuario")
console.log("Buenos dias"+usuario)

// alert
alert("Buenos dias"+usuario);

// condicionales

let edad= 15
if (edad==18){
    console.log("ya eres mayor de edad")
}

// =para asignar
// ==para comandar

let colorFavorito = prompt("ingresa tu color favorito");

if (colorFavorito =="azul"){
    console.log("el azul tambien es mi color favorito");
}else{
    console.log+"tambien es un lindo color"
}

let usuario=prompt("ingrese nombre de usuario")

console.log("bienbenido"){
if(usuario=="Pepito_007");}
else {
    console.log("usuario no registrado")
}

// else if if else

let fruta = prompt("ingrese la fruta y dire el precio por kg")

if (fruta=="manzana"){
    console.log("el precio de la manzana es 299$"),
}else if(fruta=="durazno"){
    else if (fruta=="frutilla"){
        console.log("elprecio de la frutilla es 899$")
    }else{
        console.log("fruta sin stock");
    }
}



let anioVencimiento = parseInt(prompt("ingrese el vencimiento de su registro"));
const ANIOACTUAL=2022;

if (anioVencimiento <=ANIOACTUAL){
    console.log("el registro esta vencido o por vencer")}else{
        console.log("el registro aun no esta vencido")
    }

    //and &&

    let user=prompt("nombre de usuario")
    let pass= prompt("contraseña")

    if((user= ="daftpunk)&&(pass=="12345)){
        console.log("Bienvenido al sistema"+user+"!");
    }else if (user=="Mike2022")&&(pass=="rivled"){console.log ("buendia mike")}else{
        console.log("usuario y/o contraseña incorrectos")
    }

// function
// funciones sin parametros
function saludar (){
    console.log("buenos dias chicos");
}

saludar;

function sumar() {
    let num1=parentInt("Ingresa el primer numero"));
    let num2=parentInt("Ingresa el segundo numero"));
    let resultado=num1+num2;
    console.log("el resultad es="+resultado);
}

for (let i=1;i<=3;i++)
sumar()

// funciones con parametros 

funciones armarFrase(palabra1,palabra2){
    console.log("la frase es:"+palabra1+""+palabra2+".");
}

armarFrase("Tengo","sueño");
armarFrase("Buenas";"noches");

let p1=prompt("ingresa la primera palabra para la frase");
let p2=prompt("ingresa la segunda palabra para la frase");

armarFrase(p1,p2)








let precioProd=parseFloat(prompt("Ingrsa el precio del producto"))


function calcularIva(precio){
    return precio * 0.21;
}

let ivaCalculado = calcularIva(100);
console.log("El iva= $"+ivaCalculado)

functionclacularPrecioFinal(precio,iva){
    return precio+iva}

    let precioFinal == calcularPrecioFinal(precioProd,ivaCalculando);
    console.log("El precio fianl con iva incluido $"+precioFinal);


    // ambito de una variable (local o global)

    let soyGlobal="Soy un dato qeu esta siempre disponible"

    function ,ostrarMensaje(){
        let soyLocal="soy un dato que vive dentro de mostrar mensaje"
console.log(soyGlobal)
console.log(soyLocal)
return soyLocal
    }
    
    mostrarMensaje():

    console.log(soyGlobal);
    console.log(soyLocal);
    //  este no anda porque la vaariable esta dentro de una funcion debo sacar la variable con return 
    console.log(varableLocal)


// Funcion anonima es de sintaxis simplificada 
const descuento = fuction (precio){return precio *0.10}

console.assert.log(descuento(2000));

// funcion flecha(arrow)

const suma =(num1,num2,num3) => (return num1+num2+num3)

// mas simplificada

const suma =(num1,num2,num3) =>  num1+num2+num3;

console.log(suma(1,2,3));




let bonusPoints = 50
console.log(bonusPoints)

bonusPoints = bonusPoints + 50
console.log(bonusPoints)

bonusPoints = bonusPoints - 75
console.log(bonusPoints)

bonusPoints = bonusPoints + 45
console.log(bonusPoints)

// objetos
const lentesLau = {
    graduación:0.25,
    marco: "metalico"
    color:"dorado"
    cristal:"vidrio"
}

console.log(lentesLau)
console.log("El color del lente es:"+lentesLau.color)

lentesLau.color="amarillo"
console.log(lentesLau)

// function constructores

fuction Persona(nombre, calle, edad){
    this.nombre = nombre;
    this.calle  = calle;
    this.edad = edad;
}

const persona1 = new Persona ("Homero", "siempre viva", 39)

// literal fuction constructora

fuction Persona (literal)(nombre, calle, edad){
    this.nombre = Literal.nombre;
    this.calle  = Literal.calle;
    this.edad = Literal.edad;
}

const persona1 = new Persona ("Homero", "siempre viva", 39)


// fuction constructora es para producir en masa

function Lente(objliteral){
    this.graduacion=objLiteral.graduacion;
    this.marco=objLiteral.marco;
    this.color=objLiteral.color;
    this.cristal=objLiteral.cristal;
    this.cantidad=1;
}
    const lente1= new Lente (lentesLau)
    console.log(lente1);
    
    const lente2 = new Lente({graduacion:2,marco:"plastico",color:"lila",cristal:"policarbonato",precio:1200})
    console.log(lente2);

// longitud del array

let cantedaElementos = listaCompras. lenght;
comnsole.log ("El lsitaddo de compras tiene "+cantidadElemntos+"elementos");

for(let i=0 )

// metodo splice - elimina elementos en cualquier posicion

listaCompras.splice(2,2);
console.log(listaCOmpras)

// metodo join uno tods los elementos en un unico string con separaador
console.log(listaCompras.join("-"))

metodo concat - unr dos arrays


//metodo indexOf - devuelve el indice en el que se encuentra un elemento
const alumnos = ["Gomez","Perez","Gallegos","Torres","Galvez","Aguilar"];

let posicion = alumnos.indexOf("Gallegos");
console.log("El alumno se encuentra en la posicion "+posicion);

posicion = alumnos.indexOf("Marquez");
console.log("El alumno se encuentra en la posicion "+posicion);

let apellido=prompt("Ingresa el apellido del alumno");
posicion = alumnos.indexOf(apellido);

if(posicion != -1){
    console.log("El alumno se encuentra en la posicion "+posicion);
}else{
    console.log("El alumno no se encuentra en éste grupo");
}

//metodo includes - si está el elemento retorna true, sino false
const edades = [11,56,43,23,90,78];
let existe = edades.includes(23);
console.log(existe);


// reverse invierte las poscisiones del array
edades.reverse();
console.log(edades);
