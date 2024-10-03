/**
 * Una farmacia desea procesar al final del día las ventas de cada uno de los
medicamentos para obtener algunas estadísticas. Por cada medicamento se
solicita: Código del medicamento, precio, cantidad vendida, se requiere:
• Calcular el monto vendido por medicamento.
• También debe reportarse por la farmacia: cuál medicamento fue el
menos destacado (el que se vendió menos) y el monto total vendido.
 */
import CL_Farmacia from "./CL_Farmacia.js";
import CL_IFarmacia from "./CL_IFarmacia.js";
import CL_IProducto from "./CL_IProducto.js";
import CL_Producto from "./CL_Producto.js";
let farmacia = new CL_Farmacia(),
    iFarmacia = new CL_IFarmacia();
let salida = document.getElementById("salida");

let opc = 1;

while (opc == 1) {
    let iProduc = new CL_IProducto(),
        c = iProduc.leerCodigo(),
        p = iProduc.leerPrecio(),
        x = iProduc.leerCantidad();
    let produc = new CL_Producto(c, p, x);

    farmacia.procesarProducto(produc);

    salida.innerHTML += iProduc.reporteProducto(produc.montoVendidoMedicamento(), produc.codigo) + "<br>";
    opc = iProduc.repoteVuelta();
}

"<br>";
salida.innerHTML += iFarmacia.reporteFrmacia(farmacia.montoTotalVendido(), farmacia.medicamentoMenosVendido());