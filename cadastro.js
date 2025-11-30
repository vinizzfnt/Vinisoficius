document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const body = document.body;
  const themeIcon = document.getElementById("themeIcon");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const senha1 = document.getElementById("senha1").value.trim();
    const senha2 = document.getElementById("senha2").value.trim();

    if (senha1 !== senha2) {
      alert("As senhas não coincidem!");
      return;
    }

    alert("Cadastro realizado com sucesso!");
    form.reset();
  });

  function togglePassword(toggleId, inputId) {
    const toggle = document.getElementById(toggleId);
    const input = document.getElementById(inputId);
    if (!toggle || !input) return;

    toggle.addEventListener("click", () => {
      if (input.type === "password") {
        input.type = "text";
        toggle.src = "hide.png";
      } else {
        input.type = "password";
        toggle.src = "eye.png";
      }
    });
  }

  togglePassword("togglePassword1", "senha1");
  togglePassword("togglePassword2", "senha2");

  function switchTheme() {
    themeIcon.style.opacity = "0";
    themeIcon.style.transform = "scale(0.8)";

    setTimeout(() => {
      body.classList.toggle("dark-theme");
      themeIcon.src = body.classList.contains("dark-theme") ? "moon.png" : "sun.png";
      themeIcon.style.opacity = "1";
      themeIcon.style.transform = "scale(1)";
    }, 200);
  }

  themeIcon.addEventListener("click", switchTheme);
});
