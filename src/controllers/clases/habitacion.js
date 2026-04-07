class Habitacion {
    constructor(numero, tipo, precio) {
        this.numero = numero;
        this.tipo = tipo;
        this.precio = precio;
        this.estado = "disponible";
    }

    ocupar() {
        this.estado = "ocupada";
    }

    liberar() {
        this.estado = "disponible";
    }

    mostrarInformacion() {
        console.log("Numero: " + this.numero);
        console.log("Tipo: " + this.tipo);
        console.log("Precio: " + this.precio);
        console.log("Estado: " + this.estado);
    }
}

export default Habitacion;