export default class CL_Farmacia {

    constructor() {
        this.conProducto = 0;
        this.acumProducto = 0;
        this.menorVendido = 100;
        this.codigoMenor;

    }
    montoTotalVendido() {
        return this.acumProducto;
    }

    medicamentoMenosVendido() {
        return this.codigoMenor;
    }

    procesarProducto(produc) {
        this.acumProducto += produc.montoVendidoMedicamento();

        if (produc.cantidad < this.menorVendido) {
            this.menorVendido = produc.cantidad;
            this.codigoMenor = produc.codigo;
        }
    }
}