import habitacion from "../clases/habitacion.js";
import cliente from "../clases/cliente.js";
import hotel from "../clases/hotel.js";
import reserva from "../clases/hotel.js";

const cliente1 = new cliente("Juan", "123", "8888-8888");
const habitacion1 = new habitacion(101, "Suite", 100);

const reserva1 = new reserva(cliente1, habitacion1, "2026-04-10", "activa");