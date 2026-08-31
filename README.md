# Trabajo práctico 02

## Descripción
Trabajo Práctico 02 del Módulo 3: "Back End Node.js" de la Cohorte 6 de la Diplomatura en Desarrollo Web con Javascript.

Este proyecto es una aplicación de consola desarrollada en Node.js que lee un catálogo de juegos de mesa desde un archivo JSON, transforma sus registros de forma asíncrona y genera un informe de texto formateado. Se destaca el uso de módulos propios, el manejo de asincronía mediante `async/await` y la gestión de paquetes con NPM.

## Instalación
Para preparar el entorno de ejecución, asegúrate de tener Node.js instalado, abre una terminal en la raíz del proyecto y ejecuta el siguiente comando para instalar las dependencias necesarias:

```bash
npm install
```

## Ejecución
Para verificar la sintaxis de los módulos del proyecto antes de ejecutarlo, utiliza:
```bash
npm run check
```

Para iniciar el programa y generar el catálogo, utiliza el comando:
```bash
npm start
```

**Archivo generado:**
Al ejecutar `npm start`, el programa leerá los datos originales, creará automáticamente una carpeta llamada `salida` en el directorio principal (si no existe) y generará el archivo `catalogo-juegos.txt` con el informe formateado de los juegos de mesa.

## Estructura del proyecto
El proyecto está dividido en módulos para mantener una correcta separación de responsabilidades:

*   **`datos/juegos.json`**: Contiene el arreglo original de objetos con los datos de los juegos de mesa.
*   **`src/archivos.js`**: Su responsabilidad exclusiva es el acceso al sistema de archivos. Se encarga de la lectura del JSON y la creación/escritura del archivo de salida.
*   **`src/juegos.js`**: Su responsabilidad es la lógica de negocio y transformación. Recibe los datos, los procesa y construye el texto del informe con el formato requerido.
*   **`src/index.js`**: Es el módulo principal. Coordina la aplicación, construye las rutas, orquesta las llamadas a los otros módulos y maneja los posibles errores del proceso.

## Flujo asíncrono
El proyecto utiliza un flujo asíncrono controlado para garantizar que la información se lea correctamente antes de procesarla, y que el programa no se bloquee mientras se interactúa con el sistema de archivos.

*   **Diferencia entre exportar y ejecutar una función:** Exportar una función simplemente la hace disponible para que otros módulos puedan importarla y usarla más adelante. Ejecutarla (invocándola, por ejemplo `miFuncion()`) es la acción real de iniciar las instrucciones que contiene esa función en ese preciso momento.
*   **¿Qué representa la promesa devuelta por `fs.readFile`?** Representa el estado de una operación de lectura en progreso. Promete que, en el futuro, devolverá el contenido del archivo si la operación tiene éxito, o devolverá un error si algo falla (por ejemplo, si el archivo no se encuentra).
*   **¿Por qué `await` se utiliza dentro de una función `async`?** Porque `await` indica a JavaScript que pause la ejecución de esa función específica hasta que la promesa se resuelva (o rechace). El motor de JavaScript exige que cualquier función que contenga `await` esté declarada con la palabra clave `async`.
*   **Errores que pueden llegar al `catch` de `main`:** Podrían llegar errores de lectura (ej. ruta incorrecta o archivo inexistente), errores de formato (ej. si `juegos.json` tiene un JSON inválido y falla el `JSON.parse`), o errores de escritura (ej. falta de permisos en el sistema para crear la carpeta `salida`).

## Dependencias
El proyecto utiliza los módulos nativos `node:fs/promises` y `node:path`, además de depender de paquetes externos gestionados vía NPM.

*   **Archivos de configuración NPM:** Se publican `package.json` y `package-lock.json` en el repositorio porque contienen el listado exacto de las dependencias y versiones que necesita el proyecto. La carpeta `node_modules` **no se publica** porque es muy pesada y se genera automáticamente; cualquier persona que clone el repositorio puede reconstruirla ejecutando `npm install`.
*   **Uso de `picocolors`:** Es una librería externa que se utiliza para dar formato y color a los mensajes que se imprimen en la terminal (para resaltar el éxito o los errores). Figura explícitamente en `dependencies` dentro del `package.json` porque es un paquete necesario para que el programa se ejecute correctamente en producción, no solo una herramienta de desarrollo.