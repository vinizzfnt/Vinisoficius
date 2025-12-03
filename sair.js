document.addEventListener("DOMContentLoaded", () => {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    alert("Você precisa estar logado.");
    window.location.href = "index.html";
    return;
  }

  const body = document.body;
  const themeIcon = document.getElementById("themeIcon");
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
}); 