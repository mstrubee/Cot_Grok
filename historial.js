
document.addEventListener("DOMContentLoaded", () => {
  const usuario = localStorage.getItem("usuario") || "default";
  const historial = JSON.parse(localStorage.getItem(`cotizaciones_${usuario}`) || "[]");

  const historialContainer = document.createElement("div");
  historialContainer.innerHTML = "<h3>Historial de Cotizaciones</h3>";
  const tabla = document.createElement("table");
  tabla.innerHTML = \`
    <thead><tr>
      <th>Versión</th><th>Fecha</th><th>Obra</th><th>Total</th>
      <th>Acciones</th>
    </tr></thead>
    <tbody></tbody>
  \`;

  historial.forEach((cot, index) => {
    const fila = document.createElement("tr");
    fila.innerHTML = \`
      <td>\${cot.version}</td>
      <td>\${cot.fecha}</td>
      <td>\${cot.obra}</td>
      <td>\${cot.productos?.reduce((acc, p) => acc + (typeof p.precio === 'number' ? p.precio : 0), 0).toLocaleString() || "$0"}</td>
      <td>
        <button onclick="cargarCotizacionDesdeHistorial(\${index})">Reutilizar</button>
        <button onclick="borrarCotizacionDesdeHistorial(\${index})">Borrar</button>
      </td>
    \`;
    tabla.querySelector("tbody").appendChild(fila);
  });

  historialContainer.appendChild(tabla);
  document.querySelector(".container").appendChild(historialContainer);
});

function cargarCotizacionDesdeHistorial(index) {
  const usuario = localStorage.getItem("usuario") || "default";
  const historial = JSON.parse(localStorage.getItem(`cotizaciones_${usuario}`) || "[]");
  const cot = historial[index];
  if (!cot) return;

  document.getElementById("obra").value = cot.obra;
  document.getElementById("direccion").value = cot.direccion;
  document.getElementById("folio").value = cot.folio;
  document.getElementById("supervisor").value = cot.supervisor;

  // Limpiar tabla actual
  document.getElementById("cuerpoTabla").innerHTML = "";
  productosCotizados = [];
  contadorProductos = 0;

  cot.productos.forEach(p => {
    agregarProducto();
    const id = contadorProductos - 1;

    document.getElementById(`nombre-\${id}`).value = p.nombre;
    document.getElementById(`cantidad-\${id}`).value = p.cantidad;
    document.getElementById(`tipo-\${id}`).value = p.tipo;
    document.getElementById(`alto-\${id}`).value = p.alto_mm;
    document.getElementById(`ancho-\${id}`).value = p.ancho_mm;
    document.getElementById(`vidrioA-\${id}`).value = p.vidrioA;
    actualizarEspesores(id, 'A');
    document.getElementById(`espesorA-\${id}`).value = p.espesorA;

    if (p.tipo === "Termopanel") {
      document.getElementById(`vidrioB-\${id}`).value = p.vidrioB;
      actualizarEspesores(id, 'B');
      document.getElementById(`espesorB-\${id}`).value = p.espesorB;
      document.getElementById(`separador-\${id}`).value = p.separador;
      document.getElementById(`espesorSeparador-\${id}`).value = p.espesorSeparador;
      document.getElementById(`colorSeparador-\${id}`).value = p.colorSeparador;
    }

    document.getElementById(`terminacion-\${id}`).value = p.terminacion;
    document.getElementById(`perforacion-\${id}`).value = p.perforacion;
    document.getElementById(`cantPerforacion-\${id}`).value = p.cantPerforacion;
    document.getElementById(`destajado-\${id}`).value = p.destajado;
    document.getElementById(`cantDestajado-\${id}`).value = p.cantDestajado;
    document.getElementById(`entrega-\${id}`).value = p.entrega;

    calcularLinea(id);
  });
}

function borrarCotizacionDesdeHistorial(index) {
  const usuario = localStorage.getItem("usuario") || "default";
  let historial = JSON.parse(localStorage.getItem(`cotizaciones_${usuario}`) || "[]");

  if (confirm("¿Seguro que deseas borrar esta cotización?")) {
    historial.splice(index, 1);
    localStorage.setItem(`cotizaciones_${usuario}`, JSON.stringify(historial));
    location.reload();
  }
}
