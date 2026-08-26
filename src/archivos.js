
// importar node:fs/promises 
// importar node:path cuando sea necesario
const fs = require("node:fs/promises");
const path = require("node:path");

// función asíncrona para leer e interpretar JSON;
async function leerJson(ruta) {
 const texto = await fs.readFile(ruta, "utf8");
 return JSON.parse(texto);
}

// función asíncrona para crear la carpeta contenedora y escribir texto
async function escribirTexto(ruta, contenido) {
 await fs.mkdir(path.dirname(ruta), { recursive: true });
 await fs.writeFile(ruta, contenido, "utf8");
}

// exportar las funciones mediante module.exports
module.exports = {
 leerJson,
 escribirTexto,
};
