class Cliente {
    constructor(nombre, identificacion, contacto) {
        this.nombre = nombre;
        this.identificacion = identificacion;
        this.contacto = contacto;
    }

    registrarCliente() {
        console.log("Cliente registrado");
    }

    mostrarInformacion() {
        console.log("Nombre: " + this.nombre);
        console.log("Identificacion: " + this.identificacion);
        console.log("Contacto: " + this.contacto);
    }
}

export default Cliente;