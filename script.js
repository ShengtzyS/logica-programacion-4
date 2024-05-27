// Debe solicitar al usuario un número por prompt o por input y guardarlo.
// Debe imprimir la serie de fibonacci dependiendo del número recibido, es decir, si el programa recibe un 8, debe mostrar 8 números de la serie de Fibonacci.
// Debe imprimir el resultado por consola o por el DOM.
// Debe ser capaz de identificar si el dato de entrada es de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar el dato.


// Desarrollo función
function calculoFibonacci() {
    let cantidadNumeros = prompt("Ingrese la cantidad de números de la serie Fibonacci que desee ver: ");
    let num = parseInt(cantidadNumeros);

    // Para indicar error si no es número
    if (isNaN(num) || num <= 0) {
        alert("Error. Debes ingresar un número entero positivo.");
        calculoFibonacci();
        return;
    }

    let num1 = 0;
    let num2 = 1;
    let cuentaNumeros = 0;

    console.log("Serie Fibonacci de " + num + " números:");

    while (cuentaNumeros < num) {
        console.log(num1);
        let siguiente = num1 + num2;
        num1 = num2;
        num2 = siguiente;
        cuentaNumeros++;
    }
}

calculoFibonacci();

