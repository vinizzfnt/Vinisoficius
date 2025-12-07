document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("novaTarefa");
  const btnAdd = document.getElementById("adicionarTarefa");
  const lista = document.getElementById("listaTarefas");

  const currentUser = getCurrentUser() || "default";
  let tarefas = getItens("tasks_" + currentUser) || [];

  function salvarTarefas() {
    salveItens("tasks_" + currentUser, tarefas);
  }

  function renderizar() {
    lista.innerHTML = "";

    tarefas.forEach((tarefa, i) => {
      const li = document.createElement("li");

      // Converte strings antigas para objetos
      if (typeof tarefa === "string") {
        tarefa = { texto: tarefa, feito: false };
        tarefas[i] = tarefa;
      }

      // ------------------
      // CHECK (ESQUERDA)
      // ------------------
      const imgCheck = document.createElement("img");
      imgCheck.classList.add("check");
      imgCheck.src = tarefa.feito ? "cross.png" : "check.png";
      imgCheck.alt = "Marcar como feita";

      imgCheck.addEventListener("click", () => {
        tarefa.feito = !tarefa.feito;
        salvarTarefas();
        renderizar();
      });

      // ------------------
      // TEXTO NO MEIO
      // ------------------
      const spanTexto = document.createElement("span");
      spanTexto.textContent = tarefa.texto;

      if (tarefa.feito) li.classList.add("feito");

      // ------------------
      // BOTÃO LIXEIRA
      // ------------------
      const btnRemover = document.createElement("button");
      const imgTrash = document.createElement("img");

      imgTrash.src = "trash.png";
      imgTrash.alt = "Remover";

      btnRemover.appendChild(imgTrash);

      btnRemover.addEventListener("click", () => {
        tarefas.splice(i, 1);
        salvarTarefas();
        renderizar();
      });

      // ------------------
      // MONTAGEM DO ITEM
      // ------------------
      li.appendChild(imgCheck);     // check à esquerda
      li.appendChild(spanTexto);    // texto central
      li.appendChild(btnRemover);   // lixeira à direita

      lista.appendChild(li);
    });
  }

  // ------------------
  // ADICIONAR TAREFA
  // ------------------
  btnAdd.addEventListener("click", () => {
    const valor = input.value.trim();
    if (valor === "") return;

    tarefas.push({ texto: valor, feito: false });
    salvarTarefas();
    renderizar();
    input.value = "";
  });

  // ------------------
  // RENDER INICIAL
  // ------------------
  renderizar();
});
