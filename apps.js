document.getElementById("formDataAppointment").addEventListener("submit", saveAppointment);

//Creamos la función que almacenará las citas creadas en la tabla de citas pendientes
function saveAppointment(e) {

    e.preventDefault();

    let appointment = document.getElementById("appointment").value;
    let appointmentHour = document.getElementById("appointmentHour").value;
    let name = document.getElementById("name").value;
    let surname1 = document.getElementById("surname1").value;
    let surname2 = document.getElementById("surname2").value;
    let dni = document.getElementById("dni").value;
    let phone = document.getElementById("phone").value;
    let birthday = document.getElementById("birthday").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;


    const appointmentPacient = {
        appointment: appointment,
        appointmentHour: appointmentHour,
        name: name,
        surname1: surname1,
        surname2: surname2,
        dni: dni,
        phone: phone,
        birthday: birthday,
        email: email,
        message: message,
    };


    let isValid = true;
    let elements = document.getElementById("formDataAppointment").getElementsByTagName("input");

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].value.length < 1) {
            isValid = false;
        }
    }

    if (isValid) {
        document.getElementById("formDataAppointment").submit();

        if (localStorage.getItem("appointmentPacientList") === null) {
            let appointmentPacientList = [];
            appointmentPacientList.push(appointmentPacient);
            localStorage.setItem("appointmentPacientList", JSON.stringify(appointmentPacientList));
        } else {
            let appointmentPacientList = JSON.parse(localStorage.getItem("appointmentPacientList"));
            appointmentPacientList.push(appointmentPacient);
            localStorage.setItem("appointmentPacientList", JSON.stringify(appointmentPacientList));
        }
    } else {
        alert("Rellena todos los campos");
    }

}


//Función de bootstrap para deshabilitar el envío del formulario si algún campo no es correcto
(() => {
    'use strict'

    // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()


// Función para obtener las citas y mostrarlas en la tabla creada con javascript
function getAppointment() {
    let appointmentPacientList = JSON.parse(localStorage.getItem("appointmentPacientList"));
    let appointmentView = document.getElementById("PacientData");

    //Si la tabla no tiene citas, mostrará una fila con "dato vacío"
    if (appointmentPacientList === null) {
        let noData = "Dato vacío";
        let rowempty = document.createElement("tr");

        let colempty = document.createElement("td");
        colempty.innerText = noData;
        appointmentView.appendChild(rowempty);

        colempty = document.createElement("td");
        colempty.setAttribute("colspan", "12")
        colempty.setAttribute("class", "text-center")
        colempty.innerText = noData;
        rowempty.appendChild(colempty);

        appointmentView.appendChild(rowempty);
    }


    for (let i = 0; i < appointmentPacientList.length; i++) {

        //Creamos una variable con el valor de la fecha y hora actual
        let id = new Date(document.lastModified);

        let appointment = appointmentPacientList[i].appointment;
        let appointmentHour = appointmentPacientList[i].appointmentHour;
        let name = appointmentPacientList[i].name;
        let surname1 = appointmentPacientList[i].surname1;
        let surname2 = appointmentPacientList[i].surname2;
        let dni = appointmentPacientList[i].dni;
        let phone = appointmentPacientList[i].phone;
        let birthday = appointmentPacientList[i].birthday;
        let email = appointmentPacientList[i].email;
        let message = appointmentPacientList[i].message;

        //Creamos los elementos fila y columna en la tabla
        let row = document.createElement("tr");

        let col = document.createElement("td");


        /* Añadimos la fecha de creación que solo será visible para el desarrollador pero no para el usuario.
         Y en su lugar, se pondrá un valor numérico empezando desde el 1. */
        col.innerText = `${id.toLocaleString()}`;
        row.appendChild(col).style.display = "none";
        document.getElementsByTagName("appointmentPacientList");


        //Se empieza a agregar los valores de cada columna, incluyendo el ID con el valor numérico.
        let table = document.getElementById('table');
        let rowLength = table.rows.length;
        col = document.createElement("td");
        col.innerText = `${rowLength}`;
        row.appendChild(col);

        col = document.createElement("td");
        col.innerText = `${appointment}`;
        row.appendChild(col);

        col = document.createElement("td");
        col.innerText = `${appointmentHour}`;
        row.appendChild(col);

        col = document.createElement("td");
        col.innerText = `${name}`;
        row.appendChild(col);

        col = document.createElement("td");
        col.innerText = `${surname1}`;
        row.appendChild(col);

        col = document.createElement("td");
        col.innerText = `${surname2}`;
        row.appendChild(col);

        col = document.createElement("td");
        col.innerText = `${dni}`;
        row.appendChild(col);

        col = document.createElement("td");
        col.innerText = `${phone}`;
        row.appendChild(col);

        col = document.createElement("td");
        col.innerText = `${birthday}`;
        row.appendChild(col);

        col = document.createElement("td");
        col.innerText = `${email}`;
        row.appendChild(col);

        col = document.createElement("td");
        col.innerText = `${message}`;
        row.appendChild(col);


        //Creando los botones editar y eliminar
        col = document.createElement("td");
        let editButton = document.createElement("button");
        let iconImgEdit = document.createElement("img");
        iconImgEdit.setAttribute("src", "media/img/pencil.svg");
        iconImgEdit.setAttribute("width", "18px");
        editButton.classList.add("btn", "btn-success");
        row.appendChild(col);
        col.appendChild(editButton);
        editButton.appendChild(iconImgEdit);

        col = document.createElement("td");
        let iconImgRemove = document.createElement("img");
        iconImgRemove.setAttribute("src", "media/img/trash.svg");
        iconImgRemove.setAttribute("width", "18px");
        let removeButton = document.createElement("button");
        removeButton.classList.add("btn", "btn-danger", "mx-1");
        removeButton.setAttribute("id", "remove");
        removeButton.setAttribute("type", "submit");
        row.appendChild(col);
        col.appendChild(removeButton);
        removeButton.appendChild(iconImgRemove);


        //Creando funcionalidad del botón remove
        removeButton.onclick = buttonAppointment;

        function buttonAppointment() {
            localStorage.removeItem(appointmentPacientList);
        }


        appointmentView.appendChild(row);

    }
}

getAppointment();

