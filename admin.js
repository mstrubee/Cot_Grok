function verificarClave() {
  const clave = document.getElementById("adminClave").value;
  console.log("Verificando clave de administrador:", clave);
  if (clave === "6658") {
    console.log("Clave de administrador correcta, mostrando panel");
    document.querySelector(".login-container").style.display = "none";
    document.getElementById("adminPanel").style.display = "block";
    inicializarPreciosPorDefecto();
  } else {
    console.log("Clave de administrador incorrecta");
    document.getElementById("errorClave").innerText = "Clave de administrador incorrecta";
  }
}

function inicializarPreciosPorDefecto() {
  if (localStorage.getItem("precios")) {
    console.log("Precios ya existen en localStorage, omitiendo inicialización por defecto");
    return;
  }

  const preciosPorDefecto = {
    vidrios: [
      { tipo: "Vidrio", nombre: "Incoloro", espesor: 4, precio_m2: 8165 },
      { tipo: "Vidrio", nombre: "Incoloro", espesor: 5, precio_m2: 9531 },
      { tipo: "Vidrio", nombre: "Incoloro", espesor: 6, precio_m2: 11221 },
      { tipo: "Vidrio", nombre: "Incoloro", espesor: 8, precio_m2: 14867 },
      { tipo: "Vidrio", nombre: "Incoloro", espesor: 10, precio_m2: 17935 },
      { tipo: "Vidrio", nombre: "Incoloro", espesor: 12, precio_m2: 24481 },
      { tipo: "Vidrio", nombre: "Mateluz", espesor: 4, precio_m2: 16623 },
      { tipo: "Vidrio", nombre: "Mateluz", espesor: 5, precio_m2: 24769 },
      { tipo: "Vidrio", nombre: "Mateluz", espesor: 6, precio_m2: 27597 },
      { tipo: "Vidrio", nombre: "Templado", espesor: 4, precio_m2: 15930 },
      { tipo: "Vidrio", nombre: "Templado", espesor: 5, precio_m2: 18845 },
      { tipo: "Vidrio", nombre: "Templado", espesor: 6, precio_m2: 22373 },
      { tipo: "Vidrio", nombre: "Templado", espesor: 8, precio_m2: 29810 },
      { tipo: "Vidrio", nombre: "Templado", espesor: 10, precio_m2: 36608 },
      { tipo: "Vidrio", nombre: "Templado", espesor: 12, precio_m2: 50400 },
      { tipo: "Vidrio", nombre: "Laminado_templado", espesor: 8, precio_m2: 47860 },
      { tipo: "Vidrio", nombre: "Laminado_templado", espesor: 10, precio_m2: 53690 },
      { tipo: "Vidrio", nombre: "Laminado_templado", espesor: 13.52, precio_m2: 64746 },
      { tipo: "Vidrio", nombre: "Laminado_templado", espesor: 17.52, precio_m2: 79620 },
      { tipo: "Vidrio", nombre: "Laminado_templado", espesor: 21.52, precio_m2: 93216 },
      { tipo: "Vidrio", nombre: "LowE Eco", espesor: 4, precio_m2: "A PEDIDO" },
      { tipo: "Vidrio", nombre: "LowE Eco", espesor: 5, precio_m2: "A PEDIDO" },
      { tipo: "Vidrio", nombre: "LowE Eco", espesor: 6, precio_m2: "A PEDIDO" },
      { tipo: "Vidrio", nombre: "LowE Plus", espesor: 4, precio_m2: 25352 },
      { tipo: "Vidrio", nombre: "LowE Plus", espesor: 5, precio_m2: 30366 },
      { tipo: "Vidrio", nombre: "LowE Plus", espesor: 6, precio_m2: 34050 },
      { tipo: "Vidrio", nombre: "Laminado_33_1", espesor: 6, precio_m2: 21170 },
      { tipo: "Vidrio", nombre: "Laminado_44_1", espesor: 8, precio_m2: 26889 },
      { tipo: "Vidrio", nombre: "Laminado_55_1", espesor: 10, precio_m2: 33333 },
      { tipo: "Vidrio", nombre: "Laminado_66_1", espesor: 12, precio_m2: 59778 },
      { tipo: "Vidrio", nombre: "Laminado_33_2", espesor: 6, precio_m2: "A PEDIDO" },
      { tipo: "Vidrio", nombre: "Laminado_44_2", espesor: 8, precio_m2: "A PEDIDO" },
      { tipo: "Vidrio", nombre: "Laminado_55_2", espesor: 10, precio_m2: "A PEDIDO" },
      { tipo: "Vidrio", nombre: "Laminado_66_2", espesor: 12, precio_m2: "A PEDIDO" },
    ],
    separadores: [
      { tipo: "Separador", nombre: "Aluminio (sep.PSF)", espesor: 6, precio_ml: 2182 },
      { tipo: "Separador", nombre: "Aluminio (sep.PSF)", espesor: 8, precio_ml: 2182 },
      { tipo: "Separador", nombre: "Aluminio (sep.PSF)", espesor: 10, precio_ml: 2182 },
      { tipo: "Separador", nombre: "Aluminio (sep.PSF)", espesor: 12, precio_ml: 2182 },
      { tipo: "Separador", nombre: "Aluminio (sep.PSF)", espesor: 13, precio_ml: "n/d" },
      { tipo: "Separador", nombre: "Aluminio (sep.PSF)", espesor: 15, precio_ml: 2250 },
      { tipo: "Separador", nombre: "Silicona (sep.SEN)", espesor: 6, precio_ml: 2545 },
      { tipo: "Separador", nombre: "Silicona (sep.SEN)", espesor: 8, precio_ml: 2545 },
      { tipo: "Separador", nombre: "Silicona (sep.SEN)", espesor: 10, precio_ml: 2545 },
      { tipo: "Separador", nombre: "Silicona (sep.SEN)", espesor: 12, precio_ml: 2545 },
      { tipo: "Separador", nombre: "Silicona (sep.SEN)", espesor: 13, precio_ml: "n/d" },
      { tipo: "Separador", nombre: "Silicona (sep.SEN)", espesor: 15, precio_ml: 3636 },
    ],
    terminaciones: [
      { tipo: "Terminación", nombre: "Pulido opaco", espesor: 4, precio_ml: "n/d" },
      { tipo: "Terminación", nombre: "Pulido opaco", espesor: 5, precio_ml: "n/d" },
      { tipo: "Terminación", nombre: "Pulido opaco", espesor: 6, precio_ml: "n/d" },
      { tipo: "Terminación", nombre: "Pulido opaco", espesor: 8, precio_ml: "n/d" },
      { tipo: "Terminación", nombre: "Pulido opaco", espesor: 10, precio_ml: "n/d" },
      { tipo: "Terminación", nombre: "Pulido opaco", espesor: 12, precio_ml: "n/d" },
      { tipo: "Terminación", nombre: "Pulido opaco laminado_33_1", espesor: 6, precio_ml: "n/d" },
      { tipo: "Terminación", nombre: "Pulido opaco laminado_44_1", espesor: 8, precio_ml: "n/d" },
      { tipo: "Terminación", nombre: "Pulido opaco laminado_55_1", espesor: 10, precio_ml: "n/d" },
      { tipo: "Terminación", nombre: "Pulido opaco laminado_66_1", espesor: 12, precio_ml: "n/d" },
      { tipo: "Terminación", nombre: "Pulido brillante", espesor: 4, precio_ml: 0 },
      { tipo: "Terminación", nombre: "Pulido brillante", espesor: 5, precio_ml: 0 },
      { tipo: "Terminación", nombre: "Pulido brillante", espesor: 6, precio_ml: 0 },
      { tipo: "Terminación", nombre: "Pulido brillante", espesor: 8, precio_ml: 0 },
      { tipo: "Terminación", nombre: "Pulido brillante", espesor: 10, precio_ml: 0 },
      { tipo: "Terminación", nombre: "Pulido brillante", espesor: 12, precio_ml: 0 },
      { tipo: "Terminación", nombre: "Pulido brillante", espesor: 15, precio_ml: 0 },
      { tipo: "Terminación", nombre: "Pulido brillante", espesor: 16, precio_ml: 0 },
      { tipo: "Terminación", nombre: "Pulido brillante", espesor: 17, precio_ml: 0 },
      { tipo: "Terminación", nombre: "Pulido brillante", espesor: 18, precio_ml: 0 },
      { tipo: "Terminación", nombre: "Pulido brillante", espesor: 19, precio_ml: 0 },
      { tipo: "Terminación", nombre: "Pulido brillante laminado_33_1", espesor: 6, precio_ml: 0 },
      { tipo: "Terminación", nombre: "Pulido brillante laminado_44_1", espesor: 8, precio_ml: 0 },
      { tipo: "Terminación", nombre: "Pulido brillante laminado_55_1", espesor: 10, precio_ml: 0 },
      { tipo: "Terminación", nombre: "Pulido brillante laminado_66_1", espesor: 12, precio_ml: 0 },
      { tipo: "Terminación", nombre: "Botado arista", espesor: 4, precio_ml: 0 },
      { tipo: "Terminación", nombre: "Botado arista", espesor: 5, precio_ml: 0 },
      { tipo: "Terminación", nombre: "Botado arista", espesor: 6, precio_ml: 0 },
      { tipo: "Terminación", nombre: "Botado arista", espesor: 8, precio_ml: 0 },
      { tipo: "Terminación", nombre: "Botado arista", espesor: 10, precio_ml: 0 },
      { tipo: "Terminación", nombre: "Botado arista x tp", espesor: 4, precio_ml: 0 },
      { tipo: "Terminación", nombre: "Botado arista x tp", espesor: 5, precio_ml: 0 },
      { tipo: "Terminación", nombre: "Botado arista x tp", espesor: 6, precio_ml: 0 },
    ],
    perforaciones: [
      { tipo: "Perforación", nombre: "Perforado normal", espesor: 4, precio: 0 },
      { tipo: "Perforación", nombre: "Perforado normal", espesor: 5, precio: 0 },
      { tipo: "Perforación", nombre: "Perforado normal", espesor: 6, precio: 0 },
      { tipo: "Perforación", nombre: "Perforado normal", espesor: 8, precio: 0 },
      { tipo: "Perforación", nombre: "Perforado normal", espesor: 10, precio: 0 },
      { tipo: "Perforación", nombre: "Perforado normal", espesor: 12, precio: 0 },
      { tipo: "Perforación", nombre: "Perforado normal", espesor: 15, precio: "n/d" },
      { tipo: "Perforación", nombre: "Perforado normal", espesor: 16, precio: "n/d" },
      { tipo: "Perforación", nombre: "Perforado normal", espesor: 17, precio: "n/d" },
      { tipo: "Perforación", nombre: "Perforado normal", espesor: 18, precio: "n/d" },
      { tipo: "Perforación", nombre: "Perforado normal", espesor: 19, precio: "n/d" },
      { tipo: "Perforación", nombre: "Perforado avellanado", espesor: 4, precio: "n/d" },
      { tipo: "Perforación", nombre: "Perforado avellanado", espesor: 5, precio: "n/d" },
      { tipo: "Perforación", nombre: "Perforado avellanado", espesor: 6, precio: "n/d" },
      { tipo: "Perforación", nombre: "Perforado avellanado", espesor: 8, precio: 500 },
      { tipo: "Perforación", nombre: "Perforado avellanado", espesor: 10, precio: 500 },
      { tipo: "Perforación", nombre: "Perforado avellanado", espesor: 12, precio: 500 },
    ],
    destajados: [
      { tipo: "Destajado", nombre: "Destajado normal", espesor: 4, precio: "n/d" },
      { tipo: "Destajado", nombre: "Destajado normal", espesor: 5, precio: 1000 },
      { tipo: "Destajado", nombre: "Destajado normal", espesor: 6, precio: 1000 },
      { tipo: "Destajado", nombre: "Destajado normal", espesor: 8, precio: 1000 },
      { tipo: "Destajado", nombre: "Destajado normal", espesor: 10, precio: 1000 },
      { tipo: "Destajado", nombre: "Destajado normal", espesor: 12, precio: 1000 },
      { tipo: "Destajado", nombre: "Destajado central", espesor: 4, precio: 1000 },
      { tipo: "Destajado", nombre: "Destajado central", espesor: 5, precio: 1000 },
      { tipo: "Destajado", nombre: "Destajado central", espesor: 6, precio: 1000 },
      { tipo: "Destajado", nombre: "Destajado central", espesor: 8, precio: 1000 },
      { tipo: "Destajado", nombre: "Destajado central", espesor: 10, precio: 12000 },
      { tipo: "Destajado", nombre: "Destajado central", espesor: 12, precio: 12000 },
    ],
    servicios: {
      instalacion: { precio: 5000 },
      transporte: { precio: 3000 }
    }
  };

  localStorage.setItem("precios", JSON.stringify(preciosPorDefecto));
  console.log("Precios por defecto inicializados en localStorage");
  mostrarPreciosEnTabla(preciosPorDefecto);
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
      const hojaDatos = XLSX.utils.sheet_to_json(workbook.Sheets[hoja], { header: ["Tipo", "Nombre", "Espesor", "Precio"] });

      const resultado = procesarDatos(hojaDatos);
      localStorage.setItem("precios", JSON.stringify(resultado));
      mostrarPreciosEnTabla(resultado);
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
    destajados: [],
    servicios: {
      instalacion: { precio: 5000 },
      transporte: { precio: 3000 }
    }
  };

  for (let fila of filas) {
    if (!fila.Tipo || !fila.Nombre || fila.Espesor === undefined || fila.Precio === undefined) continue;

    let precio = fila.Precio.toString().trim();
    // Limpiar formato de moneda (por ejemplo, "$ 8,165" → 8165)
    if (precio.startsWith("$")) {
      precio = precio.replace(/[$ ,]/g, "");
      precio = precio === "A PEDIDO" || precio === "n/d" ? precio : parseFloat(precio) || 0;
    } else {
      precio = precio === "A PEDIDO" || precio === "n/d" ? precio : parseFloat(precio) || 0;
    }

    const obj = {
      tipo: fila.Tipo.toString().trim(),
      nombre: fila.Nombre.toString().trim(),
      espesor: parseFloat(fila.Espesor) || 0,
      precio: precio
    };

    if (fila.Tipo.toLowerCase() === "vidrio") {
      obj.precio_m2 = obj.precio;
      json.vidrios.push(obj);
    } else if (fila.Tipo.toLowerCase() === "separador") {
      obj.precio_ml = obj.precio;
      json.separadores.push(obj);
    } else if (fila.Tipo.toLowerCase() === "terminación") {
      obj.precio_ml = obj.precio;
      json.terminaciones.push(obj);
    } else if (fila.Tipo.toLowerCase() === "perforación") {
      json.perforaciones.push(obj);
    } else if (fila.Tipo.toLowerCase() === "destajado") {
      json.destajados.push(obj);
    }
  }

  return json;
}

function mostrarPreciosEnTabla(precios) {
  const tbody = document.querySelector("#tablaPrecios tbody");
  tbody.innerHTML = "";

  const categorias = [
    { nombre: "Vidrios", datos: precios.vidrios, precioKey: "precio_m2" },
    { nombre: "Separadores", datos: precios.separadores, precioKey: "precio_ml" },
    { nombre: "Terminaciones", datos: precios.terminaciones, precioKey: "precio_ml" },
    { nombre: "Perforaciones", datos: precios.perforaciones, precioKey: "precio" },
    { nombre: "Destajados", datos: precios.destajados, precioKey: "precio" },
    { nombre: "Servicios", datos: [
      { nombre: "Instalación", precio: precios.servicios.instalacion.precio, tipo: "Servicio" },
      { nombre: "Transporte", precio: precios.servicios.transporte.precio, tipo: "Servicio" }
    ], precioKey: "precio" }
  ];

  categorias.forEach(categoria => {
    categoria.datos.forEach(item => {
      const row = document.createElement("tr");
      const precioValue = item[categoria.precioKey] || item.precio;
      row.innerHTML = `
        <td>${item.tipo || categoria.nombre}</td>
        <td>${item.nombre}</td>
        <td>${item.espesor || "N/A"}</td>
        <td contenteditable="true" class="precio-editable" data-categoria="${categoria.nombre.toLowerCase()}" data-nombre="${item.nombre}" data-espesor="${item.espesor || 'N/A'}">${precioValue}</td>
      `;
      tbody.appendChild(row);
    });
  });

  document.querySelectorAll(".precio-editable").forEach(cell => {
    cell.addEventListener("blur", guardarPreciosModificados);
  });
}

function guardarPreciosModificados(event) {
  const cell = event.target;
  const categoria = cell.dataset.categoria;
  const nombre = cell.dataset.nombre;
  const espesor = cell.dataset.espesor === "N/A" ? null : parseFloat(cell.dataset.espesor);
  const nuevoPrecio = cell.innerText.trim();

  let precios = JSON.parse(localStorage.getItem("precios") || "{}");

  if (categoria === "servicios") {
    if (nombre === "Instalación") {
      precios.servicios.instalacion.precio = nuevoPrecio === "A PEDIDO" || nuevoPrecio === "n/d" ? nuevoPrecio : parseFloat(nuevoPrecio) || 0;
    } else if (nombre === "Transporte") {
      precios.servicios.transporte.precio = nuevoPrecio === "A PEDIDO" || nuevoPrecio === "n/d" ? nuevoPrecio : parseFloat(nuevoPrecio) || 0;
    }
  } else {
    const key = categoria === "vidrios" ? "precio_m2" : categoria === "separadores" || categoria === "terminaciones" ? "precio_ml" : "precio";
    const array = precios[categoria] || [];
    const item = array.find(i => i.nombre === nombre && (espesor === null || i.espesor === espesor));
    if (item) {
      item[key] = nuevoPrecio === "A PEDIDO" || nuevoPrecio === "n/d" ? nuevoPrecio : parseFloat(nuevoPrecio) || 0;
    }
  }

  localStorage.setItem("precios", JSON.stringify(precios));
  alert("Precio actualizado correctamente.");
}

function exportarPreciosExcel() {
  const precios = JSON.parse(localStorage.getItem("precios") || "{}");
  const ws_data = [["Tipo", "Nombre", "Espesor", "Precio"]];

  const categorias = [
    { nombre: "Vidrios", datos: precios.vidrios, precioKey: "precio_m2" },
    { nombre: "Separadores", datos: precios.separadores, precioKey: "precio_ml" },
    { nombre: "Terminaciones", datos: precios.terminaciones, precioKey: "precio_ml" },
    { nombre: "Perforaciones", datos: precios.perforaciones, precioKey: "precio" },
    { nombre: "Destajados", datos: precios.destajados, precioKey: "precio" },
    { nombre: "Servicios", datos: [
      { nombre: "Instalación", precio: precios.servicios.instalacion.precio, tipo: "Servicio" },
      { nombre: "Transporte", precio: precios.servicios.transporte.precio, tipo: "Servicio" }
    ], precioKey: "precio" }
  ];

  categorias.forEach(categoria => {
    categoria.datos.forEach(item => {
      ws_data.push([item.tipo || categoria.nombre, item.nombre, item.espesor || "N/A", item[categoria.precioKey] || item.precio]);
    });
  });

  const ws = XLSX.utils.aoa_to_sheet(ws_data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Precios");
  XLSX.writeFile(wb, `Precios_Cotizador_${Date.now()}.xlsx`);
}

window.verificarClave = verificarClave;
window.cargarExcel = cargarExcel;
window.exportarPreciosExcel = exportarPreciosExcel;