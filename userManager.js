document.addEventListener("DOMContentLoaded", async () => {
  const formNuevo = document.getElementById("formNuevoUsuario");
  const tbody = document.querySelector("#tablaUsuarios tbody");
  let listaUsuarios = JSON.parse(localStorage.getItem("usuarios-local") || "[]");

  if (!listaUsuarios.length) {
    try {
      const res = await fetch("usuarios.json");
      listaUsuarios = await res.json();
      localStorage.setItem("usuarios-local", JSON.stringify(listaUsuarios));
    } catch (e) {
      console.error("No se pudo cargar usuarios.json:", e);
    }
  }

  function renderUsuarios() {
    tbody.innerHTML = "";
    listaUsuarios.forEach((u, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${u.usuario}</td>
        <td>${u.clave}</td>
        <td>${u.factor}</td>
        <td><button onclick="eliminarUsuario(${index})">Eliminar</button></td>
      `;
      tbody.appendChild(row);
    });
  }

  if (formNuevo) {
    formNuevo.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(formNuevo));
      const usuario = data.nuevoUsuario.trim();
      const clave = data.nuevaClave.trim();
      const factor = parseFloat(data.nuevoFactor);

      if (!usuario || !clave || isNaN(factor)) {
        document.getElementById("estadoNuevoUsuario").textContent = "⚠️ Todos los campos son obligatorios.";
        return;
      }

      if (listaUsuarios.find(u => u.usuario === usuario)) {
        document.getElementById("estadoNuevoUsuario").textContent = "⚠️ El usuario ya existe.";
        return;
      }

      listaUsuarios.push({ usuario, clave, factor });
      localStorage.setItem("usuarios-local", JSON.stringify(listaUsuarios));
      renderUsuarios();
      document.getElementById("estadoNuevoUsuario").textContent = `✅ Usuario "${usuario}" creado correctamente.`;
      formNuevo.reset();
    });
  }

  window.eliminarUsuario = function(index) {
    if (confirm("¿Eliminar este usuario?")) {
      listaUsuarios.splice(index, 1);
      localStorage.setItem("usuarios-local", JSON.stringify(listaUsuarios));
      renderUsuarios();
    }
  };

  renderUsuarios();
});