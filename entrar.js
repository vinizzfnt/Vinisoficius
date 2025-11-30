document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const body = document.body;
  const themeIcon = document.getElementById("themeIcon");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const loginInput = document.getElementById("loginUser").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (loginInput === "" || senha === "") {
      alert("Preencha todos os campos.");
      return;
    }

    const isEmail = loginInput.includes("@");
    alert("Login realizado com: " + (isEmail ? "E-mail" : "Nome de usuário"));
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

  togglePassword("togglePassword", "senha");

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
