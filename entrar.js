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
    const loginInput = document.getElementById("loginUser").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (!loginInput || !senha) {
      alert("Preencha todos os campos.");
      return;
    }

    const result = login(loginInput, senha);
    alert(result.message);
    if (result.success) window.location.href = "tarefas.html";
  });

  const toggle = document.getElementById("togglePassword");
  const senhaInput = document.getElementById("senha");
  toggle.addEventListener("click", () => { senhaInput.type = senhaInput.type === "password" ? "text" : "password"; });
});
function updateThemeIcon() {
  themeIcon.style.opacity = 0; 
  setTimeout(() => {
    themeIcon.src = body.classList.contains("dark-theme") ? "moon.png" : "sun.png";
    themeIcon.style.opacity = 1; 
  }, 150);
}
