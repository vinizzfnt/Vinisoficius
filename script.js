document.addEventListener("DOMContentLoaded", function() {

    const senha = document.getElementById("senha");
    const senha2 = document.getElementById("senha2");
    const form = document.getElementById("formRegistro");

    function validarSenha() {
        if (senha.value !== senha2.value) {
            senha2.setCustomValidity("As senhas não coincidem.");
        } else {
            senha2.setCustomValidity("");
        }
    }

    senha.oninput = validarSenha;
    senha2.oninput = validarSenha;

    form.onsubmit = function (e) {
        validarSenha();
        if (!form.checkValidity()) {
            e.preventDefault();
        }
    };

}); 

function mostrarSenhas() {
    const s1 = document.getElementById("senha");
    const s2 = document.getElementById("senha2");

    const tipo = s1.type === "password" ? "text" : "password";

    s1.type = tipo;
    s2.type = tipo;
}
function mostrarSenhaLogin() {
    const input = document.getElementById("loginSenha");
    input.type = input.type === "password" ? "text" : "password";
}
