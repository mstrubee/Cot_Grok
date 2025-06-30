function mmToM(mm) {
  return mm / 1000;
}

function calcularM2(ancho_mm, alto_mm) {
  const ancho_m = mmToM(ancho_mm);
  const alto_m = mmToM(alto_mm);
  return parseFloat((ancho_m * alto_m).toFixed(3));
}

function calcularML(ancho_mm, alto_mm) {
  const ancho_m = mmToM(ancho_mm);
  const alto_m = mmToM(alto_mm);
  return parseFloat(((2 * ancho_m) + (2 * alto_m)).toFixed(3));
}

function calcularPesoVidrio(m2, espesor) {
  const densidadVidrio = 2.5; // kg/m² por mm de espesor
  return parseFloat((m2 * espesor * densidadVidrio).toFixed(3));
}