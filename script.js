const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const senha1 = document.getElementById('senha1').value;
    const senha2 = document.getElementById('senha2').value;

    if(senha1 !== senha2){
        alert("As senhas não coincidem!");
        return;
    }

    alert("Cadastro realizado com sucesso!");
});

function togglePassword(toggleId, inputId) {
    const toggle = document.getElementById(toggleId);
    const input = document.getElementById(inputId);

    toggle.addEventListener('click', () => {
        if (input.type === 'password') {
            input.type = 'text';
            toggle.src = 'hide.png';
        } else {
            input.type = 'password';
            toggle.src = 'eye.png';
        }
    });
}

togglePassword('toggleSenha1', 'senha1');
togglePassword('toggleSenha2', 'senha2');
