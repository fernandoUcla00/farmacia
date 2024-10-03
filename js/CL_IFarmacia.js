export default class CL_IFarmacia {

    reporteFrmacia(vt, mm) {
        return `
        <br> se vendio un total de: $${vt}
        <br>el medicamento menos vendido fue:  ${mm}
        `
    }
}