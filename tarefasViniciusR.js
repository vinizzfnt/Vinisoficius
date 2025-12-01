document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("novaTarefa");
  const btnAdd = document.getElementById("adicionarTarefa");
  const lista = document.getElementById("listaTarefas");

  // Pega usuário logado (se houver)
  const currentUser = getCurrentUser() || "default";

  // Pega tarefas do localStorage
  let tarefas = getItens("tasks_" + currentUser) || [];

  // Salva tarefas no localStorage
  function salvarTarefas() {
    salveItens("tasks_" + currentUser, tarefas);
  }

  // Renderiza lista de tarefas
  function renderizar() {
    lista.innerHTML = "";
    tarefas.forEach((t, i) => {
      const li = document.createElement("li");
      li.textContent = t;

      const btnRemover = document.createElement("button");
      btnRemover.textContent = "X";
      btnRemover.addEventListener("click", () => {
        tarefas.splice(i, 1);
        salvarTarefas();
        renderizar();
      });

      li.appendChild(btnRemover);
      lista.appendChild(li);
    });
  }

  // Adiciona nova tarefa
  btnAdd.addEventListener("click", () => {
    const valor = input.value.trim();
    if (valor === "") return;
    tarefas.push(valor);
    salvarTarefas();
    renderizar();
    input.value = "";
  });

  // Render inicial
  renderizar();
});
