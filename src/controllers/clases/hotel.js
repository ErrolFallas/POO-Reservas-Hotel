import Reserva from "./reserva.js";

class Hotel {
    constructor(nombre, direccion, habitaciones = []) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.habitaciones = habitaciones;
        this.listaClientes = [];
        this.listaReservas = [];
    }

    registrarHabitacion(habitacion) {
        this.habitaciones.push(habitacion);
        console.log("Habitacion registrada");
    }

    registrarCliente(cliente) {
        this.listaClientes.push(cliente);
        console.log("Cliente registrado");
    }

    crearReserva(cliente, habitacion, fecha) {
        if (habitacion.estado === "ocupada") {
            console.log("Error: la habitacion esta ocupada");
            return;
        }

        habitacion.ocupar();

        const nuevaReserva = new Reserva(cliente, habitacion, fecha);
        this.listaReservas.push(nuevaReserva);

        console.log("Reserva creada correctamente");
    }

    cancelarReservaPorCliente(cliente) {
        const reservaEncontrada = this.listaReservas.find(reserva =>
            reserva.cliente === cliente && reserva.estado === "confirmada"
        );

        if (!reservaEncontrada) {
            console.log("No hay reserva activa para este cliente");
            return;
        }

        reservaEncontrada.cancelar();
    }

    mostrarReservas() {
        console.log("Reservas del hotel " + this.nombre);

        this.listaReservas.forEach(reserva => {
            reserva.mostrarInformacion();
        });
    }
}

export default Hotel;