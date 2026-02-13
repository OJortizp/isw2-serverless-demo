import test from "node:test";
import assert from "node:assert/strict";
import handler from "../api/procesar.js";

test("procesar convierte el nombre a mayúsculas", () => {
  const req = { query: { nombre: "juan" } };

  const res = {
    statusCode: null,
    body: null,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.body = payload;
      return this;
    }
  };

  handler(req, res);

  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, { resultado: "Nombre procesado: JUAN", longitud: 4 });
});

test("procesar maneja nombre ausente", () => {
  const req = { query: {} };

  const res = {
    statusCode: null,
    body: null,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.body = payload;
      return this;
    }
  };

  handler(req, res);

  assert.equal(res.statusCode, 200);
  assert.ok(res.body.resultado.includes("ANÓNIMO"));
});

test("procesar respeta la estructura y tipos de datos del JSON", () => {
  const req = { query: { nombre: "calidad" } };
  const res = {
    statusCode: null,
    body: null,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.body = payload;
      return this;
    }
  };

  handler(req, res);

  // Regla 1: Validar que existan las llaves obligatorias del contrato
  const llaves = Object.keys(res.body);
  assert.ok(llaves.includes("resultado"), "El JSON debe tener la llave 'resultado'");
  assert.ok(llaves.includes("longitud"), "El JSON debe tener la llave 'longitud'");

  // Regla 2: Validar la calidad de los datos (tipos correctos)
  assert.equal(typeof res.body.resultado, "string", "'resultado' debe ser texto");
  assert.equal(typeof res.body.longitud, "number", "'longitud' debe ser número");
});

