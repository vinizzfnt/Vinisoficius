document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const themeIcon = document.getElementById("themeIcon");
  const body = document.body;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const senha1 = document.getElementById("senha1").value;
    const senha2 = document.getElementById("senha2").value;

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

  function updateThemeIcon() {
    themeIcon.src = body.classList.contains("dark-theme")
      ? "moon.png"
      : "sun.png";
  }

  updateThemeIcon();

  themeIcon.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    updateThemeIcon();
  });
});
