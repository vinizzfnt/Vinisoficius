document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  // Validação de senha
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

  // Função para configurar toggle de senha usando PNGs
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
});
