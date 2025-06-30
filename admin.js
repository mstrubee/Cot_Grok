function verificarClave() {
  const clave = document.getElementById("adminClave").value;
  if (clave === "6658") {
    document.querySelector(".login-container").style.display = "none";
    document.getElementById("adminPanel").style.display = "block";
  } else {
    document.getElementById("errorClave").innerText = "Clave incorrecta";
  }
}

function cargarExcel() {
  const fileInput = document.getElementById("archivoExcel");
  const file = fileInput.files[0];
  if (!file) {
    alert("Selecciona un archivo Excel.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const hoja = workbook.SheetNames[0];
      const hojaDatos = XLSX.utils.sheet_to_json(workbook.Sheets[hoja], { header: 1 });

      const resultado = procesarDatos(hojaDatos);
      localStorage.setItem("precios", JSON.stringify(resultado));
      document.getElementById("resultadoCarga").innerText = JSON.stringify(resultado, null, 2);
      alert("Precios cargados exitosamente.");
    } catch (e) {
      alert("Error al procesar el archivo Excel: " + e.message);
    }
  };
  reader.readAsArrayBuffer(file);
}

function procesarDatos(filas) {
  const json = {
    vidrios: [],
    separadores: [],
    terminaciones: [],
    perforaciones: [],
    destajados: []
  };

  for (let fila of filas) {
    const nombre = fila[0];
    const espesor = fila[1];
    const valor = fila[2];

    if (!nombre || !espesor || valor === undefined) continue;

    const obj = {
      nombre: nombre.toString().trim(),
      espesor: parseFloat(espesor),
      precio: typeof valor === "number" ? Math.round(valor) : valor.toString().trim()
    };

    if (nombre.toLowerCase().includes("separador")) {
      json.separadores.push({ ...obj, tipo: "Separador", precio_ml: obj.precio });
    } else if (nombre.toLowerCase().includes("terminacion") || nombre.toLowerCase().includes("botado")) {
      json.terminaciones.push({ ...obj, tipo: "Terminacion", precio_ml: obj.precio });
    } else if (nombre.toLowerCase().includes("perforado")) {
      json.perforaciones.push({ ...obj, tipo: "Perforacion", precio: obj.precio });
    } else if (nombre.toLowerCase().includes("destajado")) {
      json.destajados.push({ ...obj, tipo: "Destajado", precio: obj.precio });
    } else {
      json.vidrios.push({ ...obj, tipo: "Vidrio", precio_m2: obj.precio });
    }
  }

  return json;
}