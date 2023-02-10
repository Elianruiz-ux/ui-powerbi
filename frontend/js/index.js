var getPrecio = document.getElementById('precio');
var getDescuento = document.getElementById('descuento');

function changeTableroUno(){

    if(getPrecio){
        document.getElementById('tableroUno').style.display = "block";
        document.getElementById('tableroDos').style.display = "none";
    }
}


function changeTableroDos(){

    if(getDescuento){
        document.getElementById('tableroUno').style.display = "none";
        document.getElementById('tableroDos').style.display = "block";
    }

}