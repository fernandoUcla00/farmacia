export default class CL_IProducto {

    leerCodigo() {
        return prompt("Ingrese el Codigo del Medicamento");
    }

    leerPrecio() {
        return prompt("Ingrese el Precio del Medicamento");
    }

    leerCantidad() {
        return prompt("Ingrese la Cantidad del Medicamento");
    }
    repoteVuelta() {
        return prompt("presione 1 para continuar o 0 para finalizar");
    }
    reporteProducto(M, c) {
        return `
        el monto vendido por medicamento ${c} es $${M}
        `
    }
}