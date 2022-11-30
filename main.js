// http://localhost:8000/products
let API = "http://localhost:8000/products";

// !=========== КОДОВОЕ СЛОВО ==========
let section_add = document.querySelector(".section__add");
let clickAdmin = document.getElementById("open-admin");
// let admin_panel_arr = document.getElementsByClassName("admin-panel");
let code = "";
console.log(section_add, clickAdmin);

function adminReturn() {
  section_add.style.display = "block";
  // if (code != "70-80") {
  //   setTimeout(() => {
  //     for (let i of admin_panel_arr) {
  //       i.style.display = "none";
  //     }
  //   }, 50);
  // }
}

clickAdmin.addEventListener("click", () => {
  code = prompt("Введите кодовое слово: ");
  adminReturn();
});

// ? блок куда добавляются карточки товара
