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
btnRemover.style.border = "none";
btnRemover.style.background = "none";
btnRemover.style.cursor = "pointer";
btnRemover.style.padding = "0";

// cria a imagem
const img = document.createElement("img");
img.src = "trash.png"; // coloque o nome da sua imagem
img.alt = "Remover";
img.style.width = "22px";    // opcional
img.style.height = "22px";   // opcional

btnRemover.appendChild(img);

// evento de remover
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
