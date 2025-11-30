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

  const toggle1 = document.getElementById("togglePassword1");
  const toggle2 = document.getElementById("togglePassword2");
  const senhaInput1 = document.getElementById("senha1");
  const senhaInput2 = document.getElementById("senha2");

  toggle1.addEventListener("click", () => { 
    if (senhaInput1.type === "password") {
      senhaInput1.type = "text";
      toggle1.src = "hide.png";
    } else {
      senhaInput1.type = "password";
      toggle1.src = "eye.png";
    }
  });

  toggle2.addEventListener("click", () => { 
    if (senhaInput2.type === "password") {
      senhaInput2.type = "text";
      toggle2.src = "hide.png";
    } else {
      senhaInput2.type = "password";
      toggle2.src = "eye.png";
    }
  });

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("nomeusuario").value.trim();
    const email = document.getElementById("emailCadastro").value.trim();
    const senha1 = document.getElementById("senha1").value.trim();
    const senha2 = document.getElementById("senha2").value.trim();

    if (!username || !email || !senha1 || !senha2) {
      alert("Preencha todos os campos!");
      return;
    }

    if (senha1 !== senha2) {
      alert("As senhas não coincidem!");
      return;
    }

    const result = signUp(username, email, senha1);
    alert(result.message);
    if (result.success) window.location.href = "index.html";
  });
});
