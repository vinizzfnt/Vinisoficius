const form = document.querySelector("form");

function togglePassword(toggleId, inputId) {
  const toggle = document.getElementById(toggleId);
  const input = document.getElementById(inputId);

  toggle.addEventListener("click", () => {
    if (input.type === "password") {
      input.type = "text";
      toggle.src = "hide.png";
    } else {
      input.type = "password";
      toggle.src = "eye.png";
    }
  });
}

togglePassword("togglePassword", "senha");
