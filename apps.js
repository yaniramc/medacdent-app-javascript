
// Creación del objeto Cita


document.getElementById("formDataAppointment").addEventListener("submit", saveAppointment);

// Creamos la funcion que almacenará las citas creadas en la lista de citas pendientes
function saveAppointment(e) {

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
    };

    if (localStorage.getItem("appointmentPacientList") === null ) {
        let appointmentPacientList = [];
        appointmentPacientList.push(appointmentPacient);
        localStorage.setItem("appointmentPacientList", JSON.stringify(appointmentPacientList));
    } else {
        let appointmentPacientList = JSON.parse(localStorage.getItem("appointmentPacientList"));
        appointmentPacientList.push(appointmentPacient);
        localStorage.setItem("appointmentPacientList", JSON.stringify(appointmentPacientList));
    }

    e.preventDefault();
}

// Funcion para obtener las citas y mostrarlas en la tabla
function getAppointment() {
    let appointmenPacienttList = JSON.parse(localStorage.getItem("appointmentPacientList"));
    let appointmentView = document.getElementById("PacientData");

    appointmentView.innerHTML = "";

    for(let i = 0; i < appointmenPacienttList.length; i++) {

        let appointment = appointmenPacienttList[i].appointment;
        let appointmentHour = appointmenPacienttList[i].appointmentHour;
        let name = appointmenPacienttList[i].name;
        let surname1 = appointmenPacienttList[i].surname1;
        let surname2 = appointmenPacienttList[i].surname2;
        let dni = appointmenPacienttList[i].dni;
        let phone = appointmenPacienttList[i].phone;
        let birthday = appointmenPacienttList[i].birthday;
        let email = appointmenPacienttList[i].email;
        let message = appointmenPacienttList[i].message;

        for (let j = 0; j < appointmenPacienttList.length; j++) {

            let cell = document.createElement("td");
            cell.innerText = `${name}`;
            document.getElementById("PacientData").appendChild(cell);

        }

    }






/*
    let row = document.createElement("td");
    row.innerText = `${name}`;
    document.getElementById("PacientData").appendChild(row);
*/



        /* appointmentView.innerHTML += `<tr><td>${name}</td></tr> +
        <tr><td>${surname1}</td></tr>` */
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























