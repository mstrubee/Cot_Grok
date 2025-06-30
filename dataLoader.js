async function cargarPrecios() {
  try {
    const res = await fetch("precios_base.json");
    const precios = await res.json();
    localStorage.setItem("precios", JSON.stringify(precios));
    return precios;
  } catch (e) {
    console.error("Error al cargar precios_base.json:", e);
    return JSON.parse(localStorage.getItem("precios") || "{}");
  }
}