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

// botão de remover
const btnRemover = document.createElement("button");
btnRemover.style.border = "none";
btnRemover.style.background = "none";
btnRemover.style.cursor = "pointer";
btnRemover.style.padding = "0";

// imagem da lixeira
const imgTrash = document.createElement("img");
imgTrash.src = "trash.png";
imgTrash.alt = "Remover";
imgTrash.style.width = "22px";
imgTrash.style.height = "22px";

// imagem do check
const imgCheck = document.createElement("img");
imgCheck.src = "check.png";
imgCheck.alt = "Marcar como feita";
imgCheck.style.width = "22px";
imgCheck.style.height = "22px";
imgCheck.style.marginRight = "10px"; // opcional

// adiciona as imagens dentro do li
btnRemover.appendChild(imgTrash);

// evento de remover
btnRemover.addEventListener("click", () => {
  tarefas.splice(i, 1);
  salvarTarefas();
  renderizar();
});

li.appendChild(imgCheck);
li.appendChild(btnRemover);



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
