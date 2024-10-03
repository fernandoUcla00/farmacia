export default class CL_Producto {
    constructor(codigo, precio, cantidad) {
        this.codigo = codigo;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    set codigo(codigo) {
        this._codigo = codigo;
    }
    set precio(precio) {
        this._precio = +precio;
    }
    set cantidad(cantidad) {
        this._cantidad = +cantidad;
    }
    get codigo() {
        return this._codigo;
    }
    get precio() {
        return this._precio;
    }
    get cantidad() {
        return this._cantidad;
    }

    montoVendidoMedicamento() {
        return this.precio * this.cantidad;
    }
}