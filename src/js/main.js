import habitacion from "../controllers/clases/habitacion.js";
import cliente from "../controllers/clases/cliente.js";
import reserva from "../controllers/clases/reserva.js";

const cliente1 = new cliente("Juan", "123", "8888-8888");
const habitacion1 = new habitacion(101, "Suite", 100);

const reserva1 = new reserva(cliente1, habitacion1, "2026-04-10", "activa");
reserva1.cancelarReserva("cancelar")
reserva1.mostrarInformacionReserva()