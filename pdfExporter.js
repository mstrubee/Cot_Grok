function exportarPDF() {
  const resumen = document.getElementById("tablaResumen");
  const empresa = document.getElementById("nombreEmpresa").value || "No especificado";
  const obra = document.getElementById("obra").value || "No especificado";
  const direccion = document.getElementById("direccion").value || "No especificado";
  const folio = document.getElementById("folio").value || "No especificado";
  const supervisor = document.getElementById("supervisor").value || "No especificado";
  const fecha = new Date().toLocaleDateString();

  if (!resumen) {
    alert("No hay resumen para exportar. Asegúrate de generar una cotización primero.");
    return;
  }

  try {
    const contenedor = document.createElement("div");
    contenedor.style.padding = "20px";
    contenedor.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
    contenedor.innerHTML = `
      <h1 style="font-size: 1.5rem; margin-bottom: 1rem;">Cotización</h1>
      <p><strong>Empresa:</strong> ${empresa}</p>
      <p><strong>Obra:</strong> ${obra}</p>
      <p><strong>Dirección:</strong> ${direccion}</p>
      <p><strong>Folio:</strong> ${folio}</p>
      <p><strong>Supervisor:</strong> ${supervisor}</p>
      <p><strong>Fecha:</strong> ${fecha}</p>
      <hr style="margin: 1rem 0;">
      ${resumen.outerHTML}
      <div id="resumenCotizacion" style="margin-top: 1rem;">${document.getElementById("resumenCotizacion").innerHTML}</div>
    `;

    const opt = {
      margin: 0.5,
      filename: `Cotizacion_${localStorage.getItem("usuario") || "anonimo"}_${Date.now()}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
    };

    html2pdf().from(contenedor).set(opt).save();
  } catch (error) {
    alert("Error al generar el PDF: " + error.message);
  }
}