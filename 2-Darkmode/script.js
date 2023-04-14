const btnSwitch = document.querySelector("#switch");
// const card = document.getElementsByClassName("#card");
// const header = document.querySelector("header");

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");
  //   header.classList.toggle("dark");
});
