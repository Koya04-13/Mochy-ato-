const form = document.getElementById("donation-form");

if (form) {
  const name = document.getElementById("donor-name");
  const amount = document.getElementById("donor-amount");
  const message = document.getElementById("donor-msg");
  const error = document.getElementById("form-error");
  const thanks = document.getElementById("thanks");
  const copyText = document.getElementById("copy-text");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const quantity = Number(amount.value);

    if (!Number.isFinite(quantity) || quantity < 1) {
      error.textContent = "Escribe una cantidad válida.";
      return;
    }

    const text =
      "Hola Jennifer, " +
      (name.value.trim() ? "soy " + name.value.trim() + ". " : "") +
      "Quiero apoyar el proyecto de Mochy con $" + quantity + "." +
      (message.value.trim()
        ? "\nMi mensaje: " + message.value.trim()
        : "");

    copyText.textContent = text;
    error.textContent = "";

    form.hidden = true;
    thanks.hidden = false;
  });

  const copyButton = document.getElementById("copy-btn");

  if (copyButton) {
    copyButton.addEventListener("click", async function() {
      try {
        await navigator.clipboard.writeText(copyText.textContent);
        copyButton.textContent = "¡Mensaje copiado!";
      } catch {
        copyButton.textContent = "No se pudo copiar. Selecciona el mensaje.";
      }
    });
  }
}
