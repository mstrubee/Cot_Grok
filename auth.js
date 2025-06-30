document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      const valido = await validarCredenciales(username, password);
      if (valido) {
        if (username === "LTAM" && password === "6658") {
          window.location.href = "admin.html";
        } else {
          window.location.href = "index.html";
        }
      } else {
        document.getElementById("loginError").innerText = "Credenciales incorrectas";
      }
    });
  }
});

async function validarCredenciales(username, password) {
  try {
    let usuarios = JSON.parse(localStorage.getItem("usuarios-local") || "[]");
    if (!usuarios.length) {
      const res = await fetch("usuarios.json");
      usuarios = await res.json();
      localStorage.setItem("usuarios-local", JSON.stringify(usuarios));
    }
    const usuario = usuarios.find(u => u.usuario === username && u.clave === password);
    if (usuario) {
      localStorage.setItem("usuario", usuario.usuario);
      localStorage.setItem("factor", usuario.factor);
      return true;
    }
    return false;
  } catch (e) {
    console.error("Error al validar credenciales:", e);
    return false;
  }
}

function logout() {
  localStorage.removeItem("usuario");
  localStorage.removeItem("factor");
  window.location.href = "login.html";
}
window.logout = logout;