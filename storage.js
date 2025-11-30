function salveItens(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getItens(key) {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}

function removeItens(key) {
  localStorage.removeItem(key);
}

function signUp(username, email, password) {
  if (!username || !email || !password) return { success: false, message: "Preencha todos os campos." };
  let users = getItens("users") || [];
  if (users.find(user => user.username === username)) return { success: false, message: "Nome de usuário já existe." };
  if (users.find(user => user.email === email)) return { success: false, message: "E-mail já cadastrado." };
  users.push({ username, email, password });
  salveItens("users", users);
  return { success: true, message: "Cadastro realizado com sucesso!" };
}

function login(usernameOrEmail, password) {
  let users = getItens("users") || [];
  const user = users.find(
    user => (user.username === usernameOrEmail || user.email === usernameOrEmail) && user.password === password
  );
  if (user) {
    salveItens('currentUser', user.username);
    return { success: true, message: "Login realizado com sucesso!" };
  } else {
    return { success: false, message: "Nome de usuário/E-mail ou senha incorretos." };
  }
}

function logout() {
  removeItens('currentUser');
}

function getCurrentUser() {
  return getItens('currentUser');
}

function salvarTema(tema) {
  salveItens("tema", tema);
}

function getTema() {
  return getItens("tema") || "claro";
}
function salveItens(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getItens(key) {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}
