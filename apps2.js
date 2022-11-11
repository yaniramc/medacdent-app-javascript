// CREAMOS LA CLASE CITA
class Appointment {
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

let dataPacient = new Appointment(this.appointment) //Tengo que terminarlo y tengo dudas que se haga asi


//MÉTODOS DE LA CLASE CITA
function addAppointment() {

    if (localStorage.getItem("appointmentPacientList") === null ) {
        let appointmentPacientList = [].sort();
        appointmentPacientList.push(Appointment(appointment,appointmentHour, name, surname1, surname2, dni, phone, birthday, email, message));
        localStorage.setItem("appointmentPacientList", JSON.stringify(appointmentPacientList));
    } else {
        let appointmentPacientList = JSON.parse(localStorage.getItem("appointmentPacientList"));
        appointmentPacientList.push(appointmentPacient);
        localStorage.setItem("appointmentPacientList", JSON.stringify(appointmentPacientList));
    }

}

function modifyAppointment() {

}

function removeAppointment() {

}


addAppointment()