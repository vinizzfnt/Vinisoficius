const senha = document.getElementById('senha');
const toggle = document.getElementById('togglePassword');

toggle.src = 'eye.png';

toggle.addEventListener('click', () => {
    if (senha.type === 'password') {
        senha.type = 'text';
        toggle.src = 'hide.png';
    } else {
        senha.type = 'password';
        toggle.src = 'eye.png';
    }
});
