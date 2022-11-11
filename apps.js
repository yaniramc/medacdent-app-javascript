
// Creación del objeto Cita


document.getElementById("formDataAppointment").addEventListener("submit", saveAppointment);

// Creamos la funcion que almacenará las citas creadas en la lista de citas pendientes
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

   let id = new Date(document.lastModified);
   document.getElementById("saveData").innerHTML = JSON.stringify(id);

    const appointmentPacient = {
        appointment: appointment,   //En versiones actuales ya no se escribe de esta manera, sino solamente la palabra appointment
        appointmentHour: appointmentHour,
        name: name,
        surname1: surname1,
        surname2: surname2,
        dni: dni,
        phone: phone,
        birthday: birthday,
        email: email,
        message: message,
        id: id,
    };

    if (localStorage.getItem("appointmentPacientList") === null ) {
        let appointmentPacientList = [].sort();
        appointmentPacientList.push(appointmentPacient);
        localStorage.setItem("appointmentPacientList", JSON.stringify(appointmentPacientList));
    } else {
        let appointmentPacientList = JSON.parse(localStorage.getItem("appointmentPacientList"));
        appointmentPacientList.push(appointmentPacient);
        localStorage.setItem("appointmentPacientList", JSON.stringify(appointmentPacientList));
    }
}



// Funcion para obtener las citas y mostrarlas en la tabla
function getAppointment() {
    let appointmentPacientList = JSON.parse(localStorage.getItem("appointmentPacientList"));
    let appointmentView = document.getElementById("PacientData");

    for(let i = 0; i < appointmentPacientList.length; i++) {

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
        let id = appointmentPacientList[i].id;

        let key = localStorage.key("appointmentPacientList"); //Esto no funciona todavia, estoy probando cosas.

        let row = document.createElement("tr");

        let col = document.createElement("td");

        /*
        col.innerText = `${id}`;
        row.appendChild(col).style.visibility = "hidden";
        document.getElementsByTagName("appointmentPacientList");
        */

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

        appointmentView.appendChild(row);

    }
}

getAppointment();


/*
class Cita {
    constructor(appointment, appointmentHour, name, surname1, surname2, dni, phone, birthday, email, message) {
        this.appointment = appointment;
        this.appointmentHour = appointmentHour;
        this.name = name;
        this.surname1 = surname1;
        this.surname2 = surname2;
        this.dni = dni;
        this.phone = phone;
        this.birthday = birthday;
        this.email = email;
        this.message = message;
    }
}
*/























