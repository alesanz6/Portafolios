document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");

  btn?.addEventListener("click", () => {
    menu?.classList.toggle("hidden");
    menu?.classList.toggle("flex");
    menu?.classList.toggle("flex-col");
    menu?.classList.toggle("mt-4");
    menu?.classList.toggle("gap-2");
  });
});
