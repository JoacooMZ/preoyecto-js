//variables globales
let nombre= prompt("ingrese su nombre");
let edad= prompt("ingrese su edad");
let nacionalidad= prompt("ingrese su nacionalidad");
let entrada=prompt("presione ENTER para continuar o ESC para salir");




//clases
class usurario {
    constructor (nombre,edad,nacionalidad){
        this.nombre=nombre;
        this.edad=edad;
        this.nacionalidad=nacionalidad;

    }
    
}

class pc { 
    constructor(CPU,GRAFICA) {
    this.CPU=CPU;
    this.GRAFICA=GRAFICA;
}

}
class juego {
    constructor (nombre,GPU,CPU) {
        this.CPU=CPU
        this.GPU=GPU
        this.nombre=nombre
    }
}

completarDatosParaTuPc(entrada);

function completarDatosParaTuPc(entrada){
    while (entrada != "ESC") {
        alert("datos de tu pc, para salir poner ESC")
        let cpuusurario=prompt ("ingrese su cpu ejemplo (ryzen 5 o intel i5)")
        let graficausuraio= prompt ("ingrese su grafica ejemplo (gtx 1060 o rx 570")
        pedirjuego(usuario1,cpuusurario,graficausuraio)
    entrada=prompt("escriba ESC para salir")
    }


}

function pedirjuego(usuario,CPU,GRAFICA){
  let juego=prompt("ingrese el nombre del juego")
  evaluarjuego(juego,CPU,GRAFICA)

    
}

function evaluarjuego(juego,CPU,GRAFICA){
    const juegoencontrado=juegos.find((juegobuscado)=>juegobuscado.nombre===juego)
    comparativa(juegoencontrado,CPU,GRAFICA)
}


function comparativa(juego,CPU,GRAFICA){
    if(juego.CPU==CPU &&juego.GPU==GRAFICA){
        alert(usuario1.nombre + "tu pc te lo corre :)")
    }
    else{
        alert(usuario1.nombre + "tu pc no te lo corre :(")
    }
}














