# Reemplazar la función actualizarResumen en el archivo cotizador.js

# Cargar el contenido original del archivo modificado previamente
with open("/mnt/data/cotizador_actualizado.js", "r", encoding="utf-8") as f:
    js_content = f.read()

# Nueva definición de la función actualizarResumen
new_function_code = """
function actualizarResumen() {
  try {
    let total = 0;
    const filas = document.querySelectorAll("#cuerpoTabla tr");
    filas.forEach(fila => {
      const celda = fila.querySelector("td:nth-last-child(2)");
      if (celda) {
        let texto = celda.textContent.trim();
        texto = texto.replace(/\\$/g, "").replace(/\\./g, "").replace(",", ".");
        const valor = parseFloat(texto);
        if (!isNaN(valor)) {
          total += valor;
        }
      }
    });

    const totalNeto = Math.round(total);
    const iva = Math.round(total * 0.19);
    const totalFinal = totalNeto + iva;

    document.querySelector("#resumenCotizacion").querySelector("p:nth-of-type(1)").textContent = `Total Neto: $${totalNeto.toLocaleString("es-CL")}`;
    document.querySelector("#resumenCotizacion").querySelector("p:nth-of-type(2)").textContent = `IVA (19%): $${iva.toLocaleString("es-CL")}`;
    document.querySelector("#resumenCotizacion").querySelector("p:nth-of-type(3)").textContent = `Total Final: $${totalFinal.toLocaleString("es-CL")}`;
  } catch (error) {
    console.error("Error al calcular el resumen", error);
    alert("Error al calcular el resumen");
  }
}
"""

# Reemplazar la función existente
js_content_updated = re.sub(
    r"function\s+actualizarResumen\s*\(\)\s*{.*?^\}",
    new_function_code.strip(),
    js_content,
    flags=re.DOTALL | re.MULTILINE
)

# Guardar el archivo actualizado
final_output_path = "/mnt/data/cotizador_funcionando.js"
with open(final_output_path, "w", encoding="utf-8") as f:
    f.write(js_content_updated)

final_output_path
