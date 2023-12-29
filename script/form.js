const scriptURL =
  "https://script.google.com/macros/s/AKfycbzywS-CHOeiwVC1Ex6T5vSfMnoSP7YdemiX-LNKESO73fvdAk4qwB9MiX68CK2rka6wnw/exec";
const form = document.forms["RIZKI-port-contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // ketika tombol submit di klik
  // tampilkan button loading, hilangkan button submit
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // tampilkan button submit, hilangkan button Loading
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
