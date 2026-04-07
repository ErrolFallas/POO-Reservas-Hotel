import Hotel from "../controllers/clases/hotel.js";
import Cliente from "../controllers/clases/cliente.js";
import Habitacion from "../controllers/clases/habitacion.js";

const hotel = new Hotel("Hotel Puerto Azul", "Puntarenas");


const cliente1 = new Cliente("Juan", "123", "8888-8888");   
const cliente2 = new Cliente("Maria", "456", "7777-7777");  
const cliente3 = new Cliente("Carlos", "789", "6666-6666"); 


const habitacion1 = new Habitacion(101, "Suite", 100);
const habitacion2 = new Habitacion(102, "Doble", 80);


hotel.registrarCliente(cliente1);
hotel.registrarCliente(cliente2);
hotel.registrarCliente(cliente3);

hotel.registrarHabitacion(habitacion1);
hotel.registrarHabitacion(habitacion2);

hotel.crearReserva(cliente1, habitacion1, "2026-04-10");
hotel.crearReserva(cliente2, habitacion2, "2026-04-10");

console.log("------ INTENTO FALLIDO DE CLIENTE 3 ------");
hotel.crearReserva(cliente3, habitacion1, "2026-04-11");

console.log("------ ESTADO DE RESERVAS ------");
hotel.mostrarReservas();


console.log("------ CLIENTE 1 CANCELA SU RESERVA ------");
hotel.cancelarReservaPorCliente(cliente1);


console.log("------ CLIENTE 3 INTENTA DE NUEVO ------");
hotel.crearReserva(cliente3, habitacion1, "2026-04-12");


console.log("------ ESTADO FINAL ------");
hotel.mostrarReservas();
