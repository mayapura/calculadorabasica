let resultado;

function calcular(operacion) {
    const operando1 = parseFloat(document.getElementById('operando1').value);
    const operando2 = parseFloat(document.getElementById('operando2').value);
    document.getElementById('resultado').value = "";

    if (isNaN(operando1) || isNaN(operando2)) {
        document.getElementById('resultado').value = 'Ingreso invalido';
        return;
    }

    switch (operacion) {
        case 'sumar':
            resultado = operando1 + operando2;
            break;
        case 'restar':
            resultado = operando1 - operando2;
            break;
        case 'multiplicar':
            resultado = operando1 * operando2;
            break;
        case 'dividir':
            if (operando2 !== 0) {
                resultado = operando1 / operando2;
            } else {
                resultado = 'Division por cero';
            }
            break;
        default:
            resultado = 'Operacion Invalida';
    }
}

function total() {
    document.getElementById('resultado').value = `${resultado}`;
}

function limpiar() {
    document.getElementById('operando1').value = "";
    document.getElementById('operando2').value = "";
    document.getElementById('resultado').value = "";
    resultado = "";
}