// El archivo app.js es el archivo de ejecución de nuestronaplicativo web
// vamos a configurar nuestro servidor con express y vamos configurar todo lo relacionando co la logica del negocio,conexión de base de datos, gestionando peticiones y respuestas.

//1. IMPORTAR LAS DEPENCIAS EN MODULOSQUE NECESITAMOS
import express from "express"; // ECMASCRIPT6

// 2. configurar el uso de nuestro servidor 
const app = express ();
const port = 3000; // 6000, 9000

// 3. ejecutar el servidor en nuestro computador 
app.listen (port,()=> {
    console.log( "el servidor esta ejecutandose correctamente en el puerto",port)
});
