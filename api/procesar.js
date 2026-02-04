export default function handler(req, res) {
  const nombreRaw = req.query.nombre;
  const nombre =
    typeof nombreRaw === "string" ? nombreRaw : "anónimo";

  // Simular error si el nombre es "error"
  if (nombre.toLowerCase() === "error") {
    return res.status(500).json({
      error: "Error interno simulado",
      detalle: "Se recibió la palabra reservada 'error'"
    });
  }

  // Respuesta exitosa con timestamp
  res.status(200).json({
    resultado: `Nombre procesado: ${nombre.toUpperCase()}`,
    timestamp: new Date().toISOString()
  });
}
