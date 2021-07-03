//primera instruccion en js
//console.log('Hola Mundo')

// Tipos de datos en JS
// String -> cadena de caracteres. 'a' 'hola' 'hola mundo' o bien "Hola" "Hola Mundo" etc.
// boolean -> solo puede contener solo dos valores Verdadero o Falso.
// Null -> valor nulo, o variable se encuentra vacia.
// Number -> cualquier numero que se quiera describir en jS. EX: 1, 23, 123123, etc.
// "123" es distinto a 123. El primero es String el segundo en tanto, es number.
// Undefined -> es una variable que NO ha sido definida.
// object -> es un objeto, puede tener cualquier combinacion de los tipos de datos.

// variables
// var -> hacemos referencias a la forma antigua de definir variables en js
// ex: var mivariable ='lala'
// let -> 
//let miPrimeraVariable ='Chao Mundo Culiao'
//console.log(miPrimeraVariable);
// mutabilidad -. cambiar el valor a una variable con otro valor.
//miPrimeraVariable ='Hola Mundo Culiao'
//console.log(miPrimeraVariable);
// asignar un boolean
//let miBoolean = true
//let otroBoolean = false
// nuestros primeros numeros
//let miNumero1 = 0
//let miNumero2 = 12
//let miNumero3 = -2
//imprimiendo los anteriores
//console.log(miNumero1, miNumero2, miNumero3, miBoolean, otroBoolean);
// indefinido -> 
//let undef
//console.log(undef);
//Nulo
//let nulo = null
//console.log(nulo);
//objetos  -> agrupacion de datos, tienen sentido entre si.
// objetp vacio, pq no contiene ningun dato.
//const miPrimerObjeto = { }
//nuevo objeto.
//const miObjeto = {
    //unNumero: 12,
    //unString: 'Esta cadena de caracteres',
    //unaCondicion: true,
//}

//console.log(miObjeto);
//imprimiendo secciones especificas del objeto
//console.log(miObjeto.unaCondicion);

//Arrays o Arreglos
//const arrVacio = []
//const arr = [1, 2, 'hola', 'mundo', miObjeto]
//console.log(arrVacio);
//console.log(arr);
// con push agregamos un elemento nuevo al array definido como arr
//arr.push (5)
//arr.push (45)
//arr.push (363545)
//arr.push (878)
//arr.push ('by mundo')

//console.log(arr);

// Operaciones matematicas

//const suma = 1 + 2
//const resta = 1 - 2
//const multiplicar = 1 * 2
//const division = 1 / 2

//console.log('suma es :',suma, 'ressta es :', resta, 'multiplicacion es :',multiplicar, 'division es :',division);
//console.log(suma, resta, multiplicar, division);

//const modulo = 10 % 3
//console.log(modulo);
// const vs let -> const no permite cambiar el valor de las variables.
//let num = 5
// incrementar
//num++
// decremento
//num--
//num--
//console.log(num);

// operadores de asignacion
//num += 5
//console.log(num);
//num -= 6
//console.log(num);
//um *= 5
//console.log(num);
//num /= 5
//console.log(num);

// operadores de comparacion en distintos tipos de datos.

//igualdad estricta
//const resultado1 = 5 === 6
//console.log(resultado1);
// igualdad no estricta -> string 'pueden' ser iguales si el valor es el mismo.
//const resultado2 = 5 == 6
//console.log(resultado2);

//const resultado3 = 5 == '5'
//console.log(resultado3);

//const resultado4 = 5 === '5'
//console.log(resultado4);

//mayor y menor que
//const resultado5 = 5 < 5
//console.log(resultado5);

//const resultado6 = 5 > 4
//console.log(resultado6);

// menor igual y mayor igual
//const resultado7 =  5 <= 5
//console.log(resultado7);

//const resultado8 = 5 >= 6
//console.log(resultado8);

// desigualdades

//const resultado9 = 5 !== 6
//console.log(resultado9);

//const resultado10 = 5 != 6
//console.log(resultado10);

// operadores logicos OR AND NOT

// or -> || 
//const resultadoOr1 = false || true
//console.log(resultadoOr1);

//const resultadoOr2 = true || true
//console.log(resultadoOr2);

//const resultadoOr3 = true || false
//console.log(resultadoOr3);

//const resultadoOr4 = false || false
//console.log(resultadoOr4);

// and -> &&
//const resultadoAnd1 = false && true
//console.log(resultadoAnd1);

//const resultadoAnd2 = true && true
//console.log(resultadoAnd2);

//const resultadoAnd3 = true && false
//onsole.log(resultadoAnd3);

//const resultadoAnd4 = false && false
//console.log(resultadoAnd4);

// Not -> !
//const resultadoNot1 = !false
//console.log(resultadoNot1);

//  Control de Flujo

// if
//if (true){
    //console.log('estoy dentro de un if');
//}

//if (false){
    //console.log('estoy no dentro de un if');
//}

//const edad = 5
//if (edad > 5 && edad < 18){
    //console.log('Puede jugar');
//} else{
    //console.log('no puede');
//}

// while
//let x = 0
//while (x < 5) {
    //console.log(x);
    //x++
//}
//console.log('fin del loop');

// switch
//let y =3;

 //switch(y){
     //case 1:{
        //console.log('yo soy el caso 1');
        //break;
     //}
     //case 2:{
        //console.log('chanchito feliz');
        //break;
     //}
     //case 3:
        //console.log('gato lopez baila ska');
       // break;
    //default:
    //console.log('el multiricachon');
        //break;
 //}

 // for

 //for (let i = 0; i < 10; i++) {
     //console.log(i);
 //}

 // accediendo a los elementos de un arreglo.
 
 //const numeros = [1, 2, 3, 4, 5]
 
 //console.log(numeros[4]);

 //for (let i = 0; i < numeros.length; i++) {
    //console.log(numeros[i]);
//}

// funciones.

//function iterar(){
    //const numeros = [1, 2, 3, 4, 5]
    //for (let i = 0; i < numeros.length; i++) {
        //console.log(numeros[i]);
    //}
//}

//iterar()
//iterar()

//function iterar(arg1){
//    for (let i = 0; i < arg1.length; i++) {
//        console.log(arg1[i]);
//    }
//}
//const numeros = [1, 2, 3, 4, 5]
//const nombres = ['Pedro', 'Juan', 'Felipe', 'Tomas', 'Matias']

//iterar(numeros)
//iterar(nombres)

// functions o funciones.

//function adicion(a,b) {
//    return a+b;
//}

//const resultadoAdicion1 = adicion(2, 4);
//const resultadoAdicion2 = adicion(6, 657);
//const resultadoAdicion3 = adicion(resultadoAdicion1, resultadoAdicion2);

//console.log('resultado suma 1 y 2 es : ', resultadoAdicion3);

// callbacks pasando una funcion al final de la funcion original 
//function sumando (a , b , cb) {
//    const resultadode = a + b
//    cb(resultadode)
//}

//function callback(result){
//    console.log('resultado es: ', result);
//}
// callback(6)
//sumando (2, 3, callback)

// las funciones en js se consideran como valores 
//y se pueden pasar como argumentos a otras funciones.

// fat arrow functions 
//const miFatArrowFunction =  (a, b) => a + b
//const r = miFatArrowFunction(1, 3)
//console.log(r);

// otra FAF

//const otraFAF = (a , b) => {
//    return a + b
//}

//const res = otraFAF(1, 3)
//console.log(res);

// funciones anonimas
//function sumando (a , b , cb) {
//    const resultadode = a + b
//    cb(resultadode)
//}

//sumando(2, 3, function(r) {
//    console.log('soy una maldita funcion anonima, mi resultado es : ', r);
// } )

// ============================= fin de la primera parte =============================

// Accediendo al DOM
