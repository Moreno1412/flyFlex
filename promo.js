
document.addEventListener("DOMContentLoaded", () => {
  const alert = document.createElement("div");
  alert.style.background = "#ff6b00";
  alert.style.color = "white";
  alert.style.padding = "1rem";
  alert.style.textAlign = "center";
  alert.style.fontWeight = "bold";
  alert.textContent = "🔥 Promoção ativa: Voos para Paris a partir de 29€!";
  document.body.insertBefore(alert, document.body.firstChild);
});
