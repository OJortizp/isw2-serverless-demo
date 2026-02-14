export default function handler(req, res) {
  // 1. Limpieza y normalización (SonarQube)
  const nombreRaw = req.query.nombre ?? "";
  const normalizado = String(nombreRaw).trim();

  // 2. Lógica de Falla Simulada (Reto 5)
  // Esta es la parte que se borró y que hizo fallar al CI
  if (normalizado === "error") {
    return res.status(500).json({
      error: "Error simulado intencionalmente"
    });
  }

  // 3. Lógica de negocio normal (Reto 1 y 2)
  const finalNombre = normalizado === "" ? "anónimo" : normalizado;
  
  const payload = {
    resultado: `Nombre procesado: ${finalNombre.toUpperCase()}`,
    longitud: finalNombre.length
  };
  
  return res.status(200).json(payload);
}

//Hola, esto es un comentario de prueba para el taller préctico con Sonar