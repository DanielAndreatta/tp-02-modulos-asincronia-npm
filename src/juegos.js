
// El informe debe incluir:
// - título general;
// - cantidad total de juegos;
// - numeración de cada registro;
// - título, editorial y año;
// - rango de jugadores;
// - categorías reunidas con join ;
// - estado convertido en Disponible o No disponible mediante un operador condicional.

// CATÁLOGO DE JUEGOS DE MESA
// ==========================
// Cantidad de juegos: 4
// 1. ...(titulo )
//  Editorial y año: ...
//  Participantes: ...
//  Categorías: ...
//  Estado: ...

function formatearJuegos(juego, indice) {
    const editorialAnio = `${juego.editorial}, ${juego.anio}`
    const participantes = `Entre ${juego.jugadoresMin} y ${juego.jugadoresMax} jugadores`
    const estado = juego.disponible ? "Disponible" : "NO Disponible";
    const categorias = juego.categorias.join(", ");
    return `${indice + 1}.Título: ${juego.titulo} \n  Editorial y año: ${editorialAnio} \n  Participantes: ${participantes} \n  Categorias: ${categorias} \n  Estado: ${estado}`;
}

function crearInforme(juegos) {
    const lineas = juegos.map(formatearJuegos);
    return `CATÁLOGO DE JUEGOS DE MESA
===============
Cantidad de Juegos: ${juegos.length}\n
${lineas.join("\n\n")}
`;
}

module.exports = { crearInforme };
