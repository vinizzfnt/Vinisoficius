document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const themeIcon = document.getElementById("themeIcon");
  const body = document.body;

  if (getTema() === "escuro") body.classList.add("dark-theme");

  function updateThemeIcon() {
    themeIcon.src = body.classList.contains("dark-theme") ? "moon.png" : "sun.png";
  }

  updateThemeIcon();

  themeIcon.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    salvarTema(body.classList.contains("dark-theme") ? "escuro" : "claro");
    updateThemeIcon();
  });

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("nomeusuario").value.trim();
    const email = document.getElementById("emailCadastro").value.trim();
    const senha1 = document.getElementById("senha1").value.trim();
    const senha2 = document.getElementById("senha2").value.trim();

    if (senha1 !== senha2) {
      alert("As senhas não coincidem!");
      return;
    }

    const result = signUp(username, email, senha1);
    alert(result.message);
    if (result.success) window.location.href = "index.html";
  });

  const toggle1 = document.getElementById("togglePassword1");
  const toggle2 = document.getElementById("togglePassword2");
  const senhaInput1 = document.getElementById("senha1");
  const senhaInput2 = document.getElementById("senha2");

  toggle1.addEventListener("click", () => { senhaInput1.type = senhaInput1.type === "password" ? "text" : "password"; });
  toggle2.addEventListener("click", () => { senhaInput2.type = senhaInput2.type === "password" ? "text" : "password"; });
});
function updateThemeIcon() {
  themeIcon.style.opacity = 0; 
  setTimeout(() => {
    themeIcon.src = body.classList.contains("dark-theme") ? "moon.png" : "sun.png";
    themeIcon.style.opacity = 1; 
  }, 150);
}
