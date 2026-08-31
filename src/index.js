
//importar node:path ;
const path = require("node:path");
//importar picocolors ;
const picocolors = require("picocolors");
// importar las funciones de los dos módulos propios mediante rutas relativas;
const { leerJson, escribirTexto } = require("./archivos.js");
const { crearInforme } = require("./juegos.js");

//construir la ruta de datos/juegos.json desde __dirname ;
const rutaDatos = path.join(__dirname, "..", "datos", "juegos.json");

//construir la ruta de salida/catalogo-juegos.txt desde __dirname ;
const rutaSalida = path.join(__dirname, "..", "salida", "catalogo-juegos.txt");

async function main() {
    try {
        //esperar la lectura del JSON;
        console.log(picocolors.cyan("Leyendo juegos..."));
        const juegos = await leerJson(rutaDatos);
        //generar el catálogo mediante el módulo de juegos;
        const informe = crearInforme(juegos);
        //esperar la escritura del resultado;
        await escribirTexto(rutaSalida, informe);
        //mostrar el catálogo y un mensaje de éxito coloreado;
        console.log(informe);
        console.log(picocolors.green(`Informe generado en: ${rutaSalida}`));
    } catch (error) {
        //mostrar un mensaje de error coloreado y asignar process.exitCode = 1 cuando el proceso falle;
        console.error(picocolors.red(`No se pudo generar el informe: ${error.message}`));
        process.exitCode = 1;
    }
}
//ejecutar main al final del archivo.
main();