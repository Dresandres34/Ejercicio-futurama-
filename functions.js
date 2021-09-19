
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
    let alt = document.getElementById("imgPersonaje").alt;
    if (alt== "imagen1"){
        //acceder a un elemento del documento html por el id 
        document.getElementById ("imgPersonaje").src = "https://vignette.wikia.nocookie.net/en.futurama/images/0/0d/Hermes.png/revision/latest?cb=20170719011119";

        //cambiamos el alt de la imagen
        document.getElementById("imgPersonaje").alt= "imagen2";
    }else{
        document.getElementById("imgPersonaje").src="https://vignette.wikia.nocookie.net/en.futurama/images/7/74/Albert.jpg/revision/latest/scale-to-width-down/350?cb=20090723101946"
        //cambiamos el alt de la imagen
        document.getElementById("imgPersonaje").alt= "imagen1"; 
    }
}

//Funcion de llamado a la api de futurama 
//async para convertir la funcion padre en asincronica y que el await que se utiliza en el fecth o las petciones fucionnen, en otras palabras las funciones que se convierten en sicronicas deben convertir al padre en asincronicas

async function cargarPersonajes(){
    //conectar / llamar a la api, creando una constante en la cual guardar la iformacion de la api
    const peticion= await fetch("https://futuramaapi.herokuapp.com/api/v2/characters");
    console.log("-----petición-----")
    console.log(peticion)
    console.log("------------------")
    const data = await peticion.json();
    console.log("--------data--------")
    console.log(data);
    console.log("--------------------")
/***** Recorrer el arreglo obtenido en la peticion de la appi  */
    data.forEach(element => {
    //console.log(element.Name);
    let tarjeta= "<div class='card' style='width: 18rem;'>";
    tarjeta += "<img id='imgPersonaje' src='"+element.PicUrl+"'";
    tarjeta += "class='card-img-top imgPersonaje' alt='imagen1'>";
    tarjeta += "<div class='card-body'>"; 
    tarjeta += "<h5 class='card-title'>Bender</h5>"
    tarjeta += "<label>Profesión:</label>";
    tarjeta += "<br> <label>Especie:</label> <br>"; 
    tarjeta += "<label>Planeta:</label><br><br>";          
    tarjeta += "<button type='button' class='btn btn-danger' onclick='eliminar()'>Eliminar</button>";
    tarjeta += "&nbsp;";            
    tarjeta += "<button type='button' class='btn btn-primary' onclick='actualizar()'>Actualizar</button>";
    tarjeta += "</div><div>";           
    /****agregar estructura /card al div */
    document.getElementById("cuerpo").innerHTML += tarjeta;
    });

}