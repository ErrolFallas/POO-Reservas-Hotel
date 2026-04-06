class cliente {
    constructor(nombre, identificacion, contacto) {
        this.nombre=nombre
        this.identificacion=identificacion
        this.contacto=contacto
    }

    registrarclientes(){
        console.log("Cliente registrado");
    }

    mostrarInformacionCliente(){
        console.log("Nombre: " + this.nombre);
        console.log("Identificacion: " + this.identificacion);
        console.log("Contacto: " + this.contacto);
    }
}

export default cliente