
const warzone = {
    GPU_AMD: "RX570",
    GPU_NVIDIA: "GTX1060",
    CPU_INTEL: "i59400f",
    CPU_AMD: "ryzen 5 3400"



}

function GPU_COMPATIBLE(elementos) {
    if ((elementos.replace(/[0-9]+/g, "")) == "RX") {
        if ((elementos.replace(/[^0-9]+/g, "")) >= "570") {
            return true
        }
    } else if ((elementos.replace(/[0-9]+/g, "")) == "GTX") {
        if ((elementos.replace(/[^0-9]+/g, "")) >= "1060") {
            return true
        }
    }
}
function CPU_COMPATIBLE(elemento) {

}
let componente = prompt("ingrese modelo de su GPU(ejemplo GTX1060 ) o 'salir' para salir ")
while (componente!='salir'){
    if (GPU_COMPATIBLE(componente)) {
        alert("GPU")
    
    }
}








