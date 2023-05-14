
var tablaContacto = localStorage.getItem("tablaContactoStorage");
tablaContacto = JSON.parse(tablaContacto);
if(tablaContacto == null){
    var tablaContacto = [];
}

listar();

function listar() {
    console.log("INGRESANDO A LISTAR...");

    var dataFila = '';

    if(tablaContacto.length > 0){
        for(const i in tablaContacto){
            var varContacto = JSON.parse(tablaContacto[i]);
            dataFila += "<tr>";
            dataFila += "<td>"+varContacto.idContacto+"</td>";
            dataFila += "<td>"+varContacto.nombApellido+"</td>";

            dataFila += "<td>"+varContacto.telefono+"</td>";
            dataFila += "<td>"+varContacto.correo+"</td>";
            
            dataFila += "<td>"+
                        "<center>"+
                        "<button type='button' class='btn btn-secondary' onclick='abrirForm("+varContacto.idContacto+")'>EDITAR</button>"+
                        "<button type='button' class='btn btn-danger' onclick='eliminarItem("+varContacto.idContacto+")'>ELIMINAR</button>"+
                        "</center>";
                        "</td>";
            dataFila += "</tr>";

        }
        document.getElementById("dataContacto").innerHTML = dataFila;
    }
    else{
        document.getElementById("dataContacto").innerHTML = "<tr><td colspan='7'>No hay datos</td></tr>";
    }
}



function abrirForm(idForm){
    localStorage.setItem("idForm", JSON.stringify(idForm));
    window.location.replace("ContactosForm.html");
}

function eliminarItem(idItem){
    for(const i in tablaContacto){
        var varContacto = JSON.parse(tablaContacto[i]);
        if(varContacto.idContacto == idItem){
            tablaContacto.splice(i,1);
            localStorage.setItem("tablaContactoStorage", JSON.stringify(tablaContacto));
        }
    }
    listar()
}

