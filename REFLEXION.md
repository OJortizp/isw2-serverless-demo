# Reflexión sobre Calidad y CI

## 1. ¿Qué tipo de error evita el CI?
El CI actúa como un protector automatizado que evita principalmente los errores de regresión. Esto sucede cuando un cambio nuevo descompone sin intención una funcionalidad que ya existía y funcionaba correctamente.
* **Ejemplo del taller:** Cuando se cambió `.toUpperCase()` por `.toLowerCase()`, el CI detectó inmediatamente que lo que se esperaba recibir se había roto.
* Evita el problema de funciona en mi máquina pero en las otras no.

## 2. ¿Qué tipo de error no evita?
El CI no resuleve todo, **no puede evitar errores de lógica que no estén cubiertos por una prueba**.
* Si la prueba está mal escrita o si hay un edge case que no se consideró en los tests, el CI pasará en verde aunque el bug exista.
* Tampoco detecta problemas de usabilidad (si el sistema es difícil de usar) o errores de la arquitectura, a menos que existan herramientas específicas configuradas para eso.

## 3. ¿Qué pasaría si un equipo ignora el CI?
Si se ignora el CI, la calidad del software pasa a depender exclusivamente de la memoria humana, lo cual es propenso a fallar.
* **Consecuencias:**
    * El feedback es lento ya que se enteran del error hasta que el usuario se queja, no al hacer push.
    * Miedo a desplegar, los desarrolladores temen tocar código antiguo por miedo a romperlo sin saberlo.
    * Se pierde la confianza en el repositorio como fuente de la verdad.