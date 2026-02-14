export default function handler(req, res) {
  const nombre = req.query.nombre || "anónimo";

  // Lógica del Reto 5: Simular falla
  if (nombre === "error") {
    return res.status(500).json({
      error: "Error simulado intencionalmente"
    });
  }

  res.status(200).json({
    resultado: `Nombre procesado: ${nombre.toUpperCase()}`,
    longitud: nombre.length
  });
}

//Hola, esto es un comentario de prueba para el taller préctico con Sonar