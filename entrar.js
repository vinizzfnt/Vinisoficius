document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const themeIcon = document.getElementById("themeIcon");
  const body = document.body;

  if (getTema() === "escuro") body.classList.add("dark-theme");

  function updateThemeIcon() {
    if (!themeIcon) return;
    themeIcon.style.opacity = 0;
    setTimeout(() => {
      themeIcon.src = body.classList.contains("dark-theme") ? "moon.png" : "sun.png";
      themeIcon.style.opacity = 1;
    }, 150);
  }

  updateThemeIcon();

  themeIcon.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    salvarTema(body.classList.contains("dark-theme") ? "escuro" : "claro");
    updateThemeIcon();
  });

  const toggle = document.getElementById("togglePassword");
  const senhaInput = document.getElementById("senha");

  toggle.addEventListener("click", () => { 
    if (senhaInput.type === "password") {
      senhaInput.type = "text";
      toggle.src = "hide.png";
    } else {
      senhaInput.type = "password";
      toggle.src = "eye.png";
    }
  });

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const usernameOrEmail = document.getElementById("loginUser").value.trim();
    const password = document.getElementById("senha").value.trim();

    if (!usernameOrEmail || !password) {
      alert("Preencha todos os campos!");
      return;
    }

    const result = login(usernameOrEmail, password);
    alert(result.message);
    if (result.success) window.location.href = "tarefas.html";
  });
});
