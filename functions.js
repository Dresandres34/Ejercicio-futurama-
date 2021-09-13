
//crear una función 
function mostrarAlerta() {

    //variables 
    const numero_1 = 10;
    var numero_2 = 5;
    let mensaje = "Primera función en JS"; //se usa para crear variables locales, ejemplo en una funcion

    alert(mensaje);
}

function eliminar() {
    console.log("personaje eliminado");
    console.error("error al eliminar");
    console.table({ "clave_1": "valor_1", "clave_2": "valor_2" });
    alert("Eliminar");
}

/* Ejemplo de uso ciclos y condicionales
function actualizar() {
    alert("Actualizar");
    for (let i = 0; i < 4; i++) {
        alert("Actualizar");
    }

    //condicionales
    let num1 = 5;
    let num2 = 10;
    if (num1 < num2) {
        console.log("es menor");
    } else {
        console.log("es mayor");
    }
}
*/

function actualizar() {
    document.getElementById ("imgPersonaje");

}
