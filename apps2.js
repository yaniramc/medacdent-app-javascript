/*
// CREAMOS LA CLASE CITA
class Appointment {

    appointment = document.getElementById("appointment").value;
    appointmentHour = document.getElementById("appointmentHour").value;
    name = document.getElementById("name").value;
    surname1 = document.getElementById("surname1").value;
    surname2 = document.getElementById("surname2").value;
    dni = document.getElementById("dni").value;
    phone = document.getElementById("phone").value;
    birthday = document.getElementById("birthday").value;
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;

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


    //MÉTODOS DE LA CLASE CITA
    addAppointment() {
        if (localStorage.getItem("appointmentPacientList") === null) {
            let appointmentPacientList = [];
            appointmentPacientList.push(dataPacient);
            localStorage.setItem("appointmentPacientList", JSON.stringify(appointmentPacientList));
        } else {
            let appointmentPacientList = JSON.parse(localStorage.getItem("appointmentPacientList"));
            appointmentPacientList.push(dataPacient);
            localStorage.setItem("appointmentPacientList", JSON.stringify(appointmentPacientList));
        }
    }

    modifyAppointment() {

    }

    removeAppointment() {

    }

}

let dataPacient = new Appointment(
    this.appointment,
    this.appointmentHour,
    this.name,
    this.surname1,
    this.surname2,
    this.dni,
    this.phone,
    this.birthday,
    this.email,
    this.message,
)

dataPacient.addAppointment();

//CREAMOS EL ADDEVENTLISTENER DEL BOTÓN CREAR CITA
document.getElementById("formDataAppointment").addEventListener("submit", Appointment);

*/
