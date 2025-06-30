function guardarCotizacion() {
  try {
    const cotizacion = {
      empresa: document.getElementById("nombreEmpresa").value,
      obra: document.getElementById("obra").value,
      direccion: document.getElementById("direccion").value,
      folio: document.getElementById("folio").value,
      supervisor: document.getElementById("supervisor").value,
      version: generarVersion(),
      fecha: new Date().toLocaleDateString(),
      entrega: document.getElementById("entrega").value,
      productos: productosCotizados.filter(p => p),
      servicios: {
        instalacion: document.getElementById("servicioInstalacion").checked,
        transporte: document.getElementById("servicioTransporte").checked
      }
    };

    if (!cotizacion.empresa || !cotizacion.folio || !cotizacion.obra) {
      alert("Por favor, completa los campos obligatorios (Empresa, Obra, Folio).");
      return;
    }

    const usuario = localStorage.getItem("usuario") || "desconocido";
    const historial = JSON.parse(localStorage.getItem(`cotizaciones_${usuario}`)) || [];

    historial.push(cotizacion);
    localStorage.setItem(`cotizaciones_${usuario}`, JSON.stringify(historial));

    alert("Cotización guardada exitosamente.");
  } catch (error) {
    console.error("Error al guardar cotización:", error);
    alert("Error al guardar la cotización.");
  }
}

function generarVersion() {
  const usuario = localStorage.getItem("usuario") || "default";
  const historial = JSON.parse(localStorage.getItem(`cotizaciones_${usuario}`)) || [];
  return historial.length + 1;
}