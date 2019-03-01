'use strict'

//Parametros REST 

function listadoFrutas(fruta1, fruta2, ...resto_de_elementos){//REST
    console.log("Fruta 1: " + fruta1);
    console.log("Fruta 2: " + fruta2);
    console.log(resto_de_elementos);
}

listadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Melon", "Coco");

//Parametros SPREAD
var frutas = ["Naranja", "Manzana"];
listadoFrutas(...frutas, "Sandia", "Pera", "Melon", "Coco");