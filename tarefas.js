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

  document.getElementById("usuarioLogado").textContent = "Olá, " + currentUser;

  const form = document.getElementById("taskForm");
  const list = document.getElementById("taskList");
  let tasks = getItens("tasks_" + currentUser) || [];

  function render() {
    list.innerHTML = "";
    tasks.forEach((t, i) => {
      const li = document.createElement("li");
      li.textContent = t;
      const btn = document.createElement("button");
      btn.textContent = "X";
      btn.addEventListener("click", () => {
        tasks.splice(i, 1);
        salveItens("tasks_" + currentUser, tasks);
        render();
      });
      li.appendChild(btn);
      list.appendChild(li);
    });
  }

  form.addEventListener("submit", e => {
    e.preventDefault();
    const input = document.getElementById("taskInput");
    if (input.value.trim() === "") return;
    tasks.push(input.value.trim());
    salveItens("tasks_" + currentUser, tasks);
    input.value = "";
    render();
  });

  render();

  document.getElementById("logoutBtn").addEventListener("click", () => {
    logout();
    window.location.href = "index.html";
  });
});
function updateThemeIcon() {
  themeIcon.style.opacity = 0; 
  setTimeout(() => {
    themeIcon.src = body.classList.contains("dark-theme") ? "moon.png" : "sun.png";
    themeIcon.style.opacity = 1; 
  }, 150);
}
let users = getItens("users") || [];
users.push({ username, email, password });
salveItens("users", users);

