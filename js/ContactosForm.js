

var tablaContacto = localStorage.getItem("tablaContactoStorage");
tablaContacto = JSON.parse(tablaContacto);
if (tablaContacto == null) {
    var tablaContacto = [];
}


var idForm = localStorage.getItem("idForm");
idForm = JSON.parse(idForm);
if (idForm == null) {
    var idForm = 0;
}

cargarPagina();

function guardar() {


    Swal.fire({
        title: 'GUARDAR',
        html: 'DESEA GUARDAR LOS CAMBIOS?',
        showDenyButton: true,
        confirmButtonText: 'SI',
        denyButtonText: 'NO'
    }).then(
        (result) => {
            if (result.isConfirmed) {

                console.log("PRESIONO GUARDAR...");
                var objContacto = JSON.stringify({
                    idContacto: (idForm > 0) ? idForm : (tablaContacto.length + 1),
                    nombApellido: document.getElementById("txtNombApellido").value,
                    telefono: document.getElementById("txtTelefono").value,
                    correo: document.getElementById("txtCorreo").value,
                    Foto: document.getElementById("Foto").value,
                    
                });
                console.log(objContacto);
                //EDITAR
                if (idForm > 0) {
                    for (const i in tablaContacto) {
                        var varContacto= JSON.parse(tablaContacto[i]);
                        if (varContacto.idContacto == idForm) {
                            tablaContacto[i] = objContacto;
                            break;
                        }

                    }

                } else {
                    // NUEVOS PACIENTES
                    tablaContacto.push(objContacto);
                }

                localStorage.setItem("tablaContactoStorage", JSON.stringify(tablaContacto));

                Swal.fire('CAMBIOS  GUARDADOS','','success').then(
                    (result)=>{
                        window.location.replace("Contactos.html");
                    }
                );
            }else if (result.isDenied){
                Swal.fire('CAMBIOS NO GUARDADOS','','info');
            }
        }
    );

}

function cargarPagina() {
    if (idForm > 0) {
        // SACAR DATOS DE LA FILA DE LA TABLA Y PONERLO EN EL FORMULARIO
        for (const i in tablaContacto) {
            var varContacto = JSON.parse(tablaContacto[i]);
            if (varContacto.idContacto == idForm) {
                document.getElementById("txtIdContacto").value = varContacto.idContacto;
                document.getElementById("txtNombApellido").value = varContacto.nombApellido;
                
                document.getElementById("txtTelefono").value = varContacto.telefono;
                document.getElementById("txtCorreo").value = varContacto.correo;
                document.getElementById("Foto").value = varContacto.Foto;
                
                break;
            }
        }
    }
}
