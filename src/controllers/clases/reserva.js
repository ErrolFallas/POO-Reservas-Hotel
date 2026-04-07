import Habitacion from "./habitacion.js";
import Cliente from "./cliente.js";
class Reserva {
    constructor(cliente, habitacion, fecha, estado="confirmada") {
        this.cliente = cliente;
        this.habitacion = habitacion;
        this.fecha = fecha;
        this.estado = estado;
    }

    cancelar() {
        if (this.estado === "cancelada") {
            console.log("La reserva ya esta cancelada");
            return;
        }

        this.estado = "cancelada";
        this.habitacion.liberar();
        console.log("Reserva cancelada correctamente");
    }

    mostrarInformacion() {
        console.log("Cliente: " + this.cliente.nombre);
        console.log("Habitacion: " + this.habitacion.numero);
        console.log("Fecha: " + this.fecha);
        console.log("Estado: " + this.estado);
    }
}

export default Reserva;