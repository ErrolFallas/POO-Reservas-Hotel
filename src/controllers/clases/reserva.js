import habitacion from "../clases/habitacion.js";
import cliente from "../clases/cliente.js";
import hotel from "../clases/hotel.js";

class reserva {
    constructor(cliente, habitacion, fechas, estado) {
        this.cliente = cliente
        this.habitacion = habitacion
        this.fechas = fechas
        this.estado = estado

    }
    
cancelarReserva(){
    this.estado = "cancelada"
    console.log("Reserva cancelada");
}


mostrarInformacionReserva(){
    console.log("Cliente: " + this.cliente.nombre);
    console.log("Habitacion: " + this.habitacion.numero);
    console.log("Fechas: " + this.fechas);
    console.log("Estado: " + this.estado);
}


}

export default reserva