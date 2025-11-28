const senha = document.getElementById("senha");
const toggle = document.getElementById("togglePassword");

toggle.addEventListener("click", () => {
    const type = senha.getAttribute("type") === "password" ? "text" : "password";
    senha.setAttribute("type", type);
    toggle.src = type === "password" ? "eye.png" : "hide.png";
});
