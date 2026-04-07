const hotel = new Hotel("Hotel Paraiso", "Puntarenas");

// ===== CREAR CLIENTES =====
const cliente1 = new Cliente("Juan", "123", "8888-8888");   // reserva y luego cancela
const cliente2 = new Cliente("Maria", "456", "7777-7777");  // reserva y se queda
const cliente3 = new Cliente("Carlos", "789", "6666-6666"); // intenta y luego logra

// ===== CREAR HABITACIONES =====
const habitacion1 = new Habitacion(101, "Suite", 100);
const habitacion2 = new Habitacion(102, "Doble", 80);

// ===== REGISTRAR EN EL HOTEL =====
hotel.registrarCliente(cliente1);
hotel.registrarCliente(cliente2);
hotel.registrarCliente(cliente3);

hotel.registrarHabitacion(habitacion1);
hotel.registrarHabitacion(habitacion2);

// ===== RESERVAS INICIALES =====

// Cliente1 reserva habitacion 101
hotel.crearReserva(cliente1, habitacion1, "2026-04-10");

// Cliente2 reserva habitacion 102
hotel.crearReserva(cliente2, habitacion2, "2026-04-10");

// Cliente3 intenta reservar habitacion 101 (debe fallar)
console.log("------ INTENTO FALLIDO DE CLIENTE 3 ------");
hotel.crearReserva(cliente3, habitacion1, "2026-04-11");

// ===== MOSTRAR ESTADO =====
console.log("------ ESTADO DE RESERVAS ------");
hotel.mostrarReservas();

// ===== CANCELACION =====
console.log("------ CLIENTE 1 CANCELA SU RESERVA ------");
hotel.cancelarReservaPorCliente(cliente1);

// ===== NUEVO INTENTO =====
console.log("------ CLIENTE 3 INTENTA DE NUEVO ------");
hotel.crearReserva(cliente3, habitacion1, "2026-04-12");

// ===== RESULTADO FINAL =====
console.log("------ ESTADO FINAL ------");
hotel.mostrarReservas();