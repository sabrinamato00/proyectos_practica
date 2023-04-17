const btnOpen = document.getElementById("open");
const contenedorModal = document.getElementById("contenedorModal");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModalBtn");
const closeModal = document.getElementById("close");

btnOpen.addEventListener("click", () => {
  contenedorModal.classList.add("active");
  modal.classList.add("active");
});

closeModalBtn.addEventListener("click", () => {
  contenedorModal.classList.remove("active");
  modal.classList.remove("active");
});

closeModal.addEventListener("click", () => {
  contenedorModal.classList.remove("active");
  modal.classList.remove("active");
});
