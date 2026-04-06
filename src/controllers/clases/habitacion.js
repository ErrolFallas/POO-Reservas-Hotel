import hotel from "../clases/hotel.js";
class habitacion extends hotel{
    constructor(nombre, numero, tipo, precio, estado) {
        super(nombre)
        this.numero = numero
        this.tipo = tipo
        this.precio = precio
        this.estado = estado
    }

    registrarHabitaciones() { 
        console.log("Habitacion registrada");
    }

    mostrarInformacionHabitacion(){
        console.log("Numero: " + this.numero);
        console.log("Tipo: " + this.tipo);
        console.log("Precio: " + this.precio);
        console.log("Estado: " + this.estado);
    }
}

export default habitacion