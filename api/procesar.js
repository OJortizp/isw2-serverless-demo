export default function handler(req, res) {
  const nombre = req.query.nombre ?? "";

  const normalizado = String(nombre).trim();
  const finalNombre = normalizado === "" ? "anónimo" : normalizado;

  const payload = {
    resultado: `Nombre procesado: ${finalNombre.toUpperCase()}`,
    longitud: finalNombre.length
  };

  return res.status(200).json(payload);
}

//Hola, esto es un comentario de prueba para el taller préctico con Sonar